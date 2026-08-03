#!/usr/bin/env node
/**
 * Reads a running (or statically served) Storybook and emits figma-spec.json:
 * a declarative description of every component variant, with each visual
 * property bound to the CSS custom property the code actually references.
 *
 * The Figma plugin consumes this file and does no thinking of its own.
 *
 *   node src/extract.mjs --url http://localhost:6006 --out figma-spec.json
 *   node src/extract.mjs --static ../../packages/fuselage/storybook-static
 */
import fs from 'fs';
import path from 'path';
import http from 'http';
import { fileURLToPath } from 'url';

import { chromium } from 'playwright';

import { measureElement } from './measure.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const arg = (name, fallback) => {
  const i = process.argv.indexOf(`--${name}`);
  return i > -1 && process.argv[i + 1] ? process.argv[i + 1] : fallback;
};

const OUT = path.resolve(
  arg('out', path.join(__dirname, '..', 'figma-spec.json')),
);
const CONFIG = JSON.parse(
  fs.readFileSync(
    path.resolve(arg('config', path.join(__dirname, '..', 'components.json'))),
    'utf-8',
  ),
);
const ONLY = arg('only', null);

/** Serve storybook-static so --static behaves like --url. */
const serveStatic = (dir) =>
  new Promise((resolve) => {
    const types = {
      '.html': 'text/html',
      '.js': 'text/javascript',
      '.css': 'text/css',
      '.json': 'application/json',
      '.map': 'application/json',
      '.svg': 'image/svg+xml',
      '.woff2': 'font/woff2',
      '.woff': 'font/woff',
      '.ttf': 'font/ttf',
      '.png': 'image/png',
    };
    const server = http.createServer((req, res) => {
      const rel =
        decodeURIComponent(req.url.split('?')[0]).replace(/^\/+/, '') ||
        'index.html';
      const file = path.join(dir, rel);
      if (!file.startsWith(path.resolve(dir))) {
        res.writeHead(403).end();
        return;
      }
      fs.readFile(file, (err, buf) => {
        if (err) {
          res.writeHead(404).end();
          return;
        }
        res.writeHead(200, {
          'content-type':
            types[path.extname(file)] || 'application/octet-stream',
        });
        res.end(buf);
      });
    });
    server.listen(0, '127.0.0.1', () =>
      resolve({ server, url: `http://127.0.0.1:${server.address().port}` }),
    );
  });

/**
 * Cross product of axis values, in config order.
 *
 * A `oneOf` axis collapses several mutually exclusive boolean args into one
 * axis. Fuselage spells sizes and variants as separate booleans (Tag has
 * `medium` and `large`; FramedIcon has `info`/`success`/`warning`/`danger`), so
 * crossing them independently generates nonsense like `medium=true, large=true`.
 */
const matrix = (axes) => {
  let rows = [{ __args: {} }];
  for (const axis of axes) {
    const next = [];
    for (const row of rows) {
      for (const v of axis.values) {
        const args = { ...row.__args };
        if (axis.oneOf) {
          for (const a of axis.oneOf.args) args[a] = v === a;
        } else {
          args[axis.name] = v;
        }
        next.push({ ...row, [axis.name]: v, __args: args });
      }
    }
    rows = next;
  }
  return rows;
};

/** Storybook's ?args= encoding: key:value pairs joined by ';'. Booleans as !true/!false. */
const encodeArgs = (args) =>
  Object.entries(args)
    .filter(([, v]) => v !== null && v !== undefined)
    .map(([k, v]) => {
      if (typeof v === 'boolean') return `${k}:!${v}`;
      if (typeof v === 'number') return `${k}:${v}`;
      return `${k}:${String(v).replace(/[;:&]/g, '')}`;
    })
    .join(';');

// Figma variant properties are conventionally capitalised, and an existing set
// built as "Variant=primary, Size=default" must be matched exactly or the sync
// creates a duplicate instead of updating in place.
const propName = (argName) =>
  argName.charAt(0).toUpperCase() + argName.slice(1);

const labelFor = (component, axis, value) => {
  const override = component.axisLabels?.[axis]?.[String(value)];
  if (override) return override;
  if (value === null || value === undefined) return 'default';
  if (typeof value === 'boolean') return value ? 'true' : 'false';
  return String(value);
};

async function main() {
  let staticServer = null;
  let baseUrl = arg('url', null);
  const staticDir = arg('static', null);
  if (!baseUrl) {
    if (!staticDir) {
      console.error(
        'need --url <storybook url> or --static <storybook-static dir>',
      );
      process.exit(1);
    }
    staticServer = await serveStatic(path.resolve(staticDir));
    baseUrl = staticServer.url;
    console.log(`serving ${staticDir} at ${baseUrl}`);
  }

  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 1280, height: 720 },
  });

  // One warm-up load so the preview bundle and the story store exist.
  await page.goto(
    `${baseUrl}/iframe.html?id=${CONFIG.components[0].storyId}&viewMode=story`,
    {
      waitUntil: 'domcontentloaded',
    },
  );
  await page.waitForFunction(() => !!window.__STORYBOOK_STORY_STORE__, {
    timeout: 60_000,
  });
  await page.waitForSelector('#storybook-root > *', { timeout: 60_000 });

  const components = CONFIG.components.filter((c) => !ONLY || c.name === ONLY);
  const spec = { generatedFrom: staticDir || baseUrl, components: [] };
  const warnings = [];

  for (const component of components) {
    // argTypes are the source of truth for what each axis can be.
    const argTypes = await page.evaluate(async (storyId) => {
      const st = await window.__STORYBOOK_STORY_STORE__.loadStory({ storyId });
      const out = {};
      for (const [k, v] of Object.entries(st.argTypes || {})) {
        const t = v?.control?.type ?? v?.control;
        out[k] = { type: t, options: v.options || null };
      }
      return out;
    }, component.storyId);

    const axes = component.axes.map((name) => {
      const oneOf = component.oneOf?.[name];
      if (oneOf) {
        for (const a of oneOf.args) {
          if (!argTypes[a])
            throw new Error(
              `${component.name}: oneOf "${name}" references unknown arg "${a}"`,
            );
        }
        return {
          name,
          oneOf,
          values: [oneOf.noneLabel ?? 'default', ...oneOf.args],
        };
      }
      if (component.axisValues?.[name])
        return { name, values: component.axisValues[name] };
      const at = argTypes[name];
      if (!at)
        throw new Error(`${component.name}: arg "${name}" not in argTypes`);
      if (at.type === 'boolean') return { name, values: [false, true] };
      if (at.options?.length) return { name, values: at.options };
      throw new Error(
        `${component.name}: arg "${name}" has no options and is not boolean`,
      );
    });

    const rows = matrix(axes);
    console.log(
      `${component.name}: ${rows.length} variants (${axes.map((a) => `${a.name}×${a.values.length}`).join(' ')})`,
    );

    const variants = [];
    for (const row of rows) {
      const args = { ...(component.args || {}), ...row.__args };
      const url = `${baseUrl}/iframe.html?id=${component.storyId}&viewMode=story&args=${encodeURIComponent(encodeArgs(args))}`;
      await page.goto(url, { waitUntil: 'domcontentloaded' });
      await page.evaluate(() => document.fonts.ready);
      await page.waitForSelector('#storybook-root > *', { timeout: 30_000 });

      const measured = await page.evaluate(
        measureElement,
        component.rootSelector || null,
      );
      if (measured.error) {
        warnings.push(
          `${component.name} ${JSON.stringify(row)}: ${measured.error}`,
        );
        continue;
      }
      // Block-level components stretch to the story canvas, so the measured
      // width is the container, not the component. Decide per variant, not per
      // component: a vertical Divider is 1px wide while a horizontal one fills.
      const L = measured.layout;
      if (
        component.fluidWidth &&
        L.containerWidth &&
        L.width >= L.containerWidth - 1
      ) {
        L.fluidWidth = true;
        delete L.width;
      }
      delete L.containerWidth;

      const key = axes
        .map(
          (a) =>
            `${propName(a.name)}=${labelFor(component, a.name, row[a.name])}`,
        )
        .join(', ');
      // Record the actual args sent, not the axis labels — a oneOf axis label
      // like "medium" is not itself an arg value.
      variants.push({ key, args: row.__args, ...measured });
    }

    // An axis that changes nothing on the root element means the differentiator
    // lives in a child or a pseudo-element, which root-only measurement cannot
    // see. Without this check the spec looks fine and every variant is a clone.
    if (variants.length > 1) {
      const fingerprint = (v) => JSON.stringify([v.values, v.layout, v.text]);
      const distinct = new Set(variants.map(fingerprint));
      if (distinct.size === 1) {
        warnings.push(
          `${component.name}: ALL ${variants.length} variants measured identically — ` +
            `axes [${component.axes.join(', ')}] have no effect on ${component.rootSelector}. ` +
            `The differentiator is probably a child node, a pseudo-element, or an SVG fill. Do not ship this component.`,
        );
      } else if (distinct.size < variants.length / 2) {
        warnings.push(
          `${component.name}: only ${distinct.size} distinct renderings across ${variants.length} variants — ` +
            `some axis may not affect ${component.rootSelector}`,
        );
      }
    }

    // Group identical unbindable sets — 32 copies of the same warning is noise.
    const groups = new Map();
    for (const v of variants) {
      if (!v.unbindable.length) continue;
      const k = v.unbindable.join(',');
      if (!groups.has(k)) groups.set(k, []);
      groups.get(k).push(v.key);
    }
    for (const [props, keys] of groups) {
      warnings.push(
        `${component.name}: no declared custom property for [${props}] on ${keys.length}/${variants.length} variants` +
          ` (e.g. ${keys[0]}) — plugin falls back to matching a variable by value`,
      );
    }

    spec.components.push({
      name: component.name,
      storyId: component.storyId,
      textChild: component.textChild || 'label',
      axes: Object.fromEntries(
        axes.map((a) => [
          propName(a.name),
          a.values.map((v) => labelFor(component, a.name, v)),
        ]),
      ),
      variants,
    });
  }

  await browser.close();
  if (staticServer) staticServer.server.close();

  spec.warnings = warnings;
  fs.writeFileSync(OUT, JSON.stringify(spec, null, 2));

  const allVariants = spec.components.flatMap((c) => c.variants);
  const total = allVariants.length;
  console.log(
    `\n${spec.components.length} components, ${total} variants -> ${OUT}`,
  );

  // Per-property coverage is the number that matters: "variants with zero
  // unbindable properties" reads as 0% whenever one property has no runtime
  // token anywhere, which hides that the colors all bound correctly.
  const PROPS = ['fill', 'stroke', 'textFill', 'strokeWeight', 'radius'];
  console.log('\ntoken binding coverage by property:');
  for (const p of PROPS) {
    const n = allVariants.filter((v) => v.bind[p]).length;
    const pct = total ? Math.round((n / total) * 100) : 0;
    console.log(`  ${p.padEnd(13)} ${String(n).padStart(4)}/${total}  ${pct}%`);
  }

  if (warnings.length) {
    console.log(`\n${warnings.length} warning(s):`);
    for (const w of warnings) console.log(`  ${w}`);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
