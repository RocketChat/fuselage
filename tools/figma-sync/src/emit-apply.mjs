#!/usr/bin/env node
/**
 * Generates the two apply entry points from the single implementation in
 * `apply.js`, so the plugin and the MCP path can never drift apart.
 *
 *   node src/emit-apply.mjs                 # one script per component, into .apply/
 *   node src/emit-apply.mjs --twice         # each script applies twice and asserts idempotency
 *   node src/emit-apply.mjs --only Button
 *   node src/emit-apply.mjs --plugin        # regenerate plugin/code.js
 *
 * The per-component split exists because `use_figma` caps its `code` payload at
 * 50k characters and the full spec plus apply.js is larger than that.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');

const arg = (name, fallback) => {
  const i = process.argv.indexOf(`--${name}`);
  return i > -1 && process.argv[i + 1] && !process.argv[i + 1].startsWith('--')
    ? process.argv[i + 1]
    : fallback;
};
const flag = (name) => process.argv.includes(`--${name}`);

const MAX_CODE = 50_000;

/** apply.js with its ESM export removed, so it can be inlined verbatim. */
const applySource = () =>
  fs
    .readFileSync(path.join(__dirname, 'apply.js'), 'utf-8')
    .replace(/^export function applySpec/m, 'function applySpec');

/** Only the fields apply.js reads — keeps each emitted script under the cap. */
const slimComponent = (c) => ({
  name: c.name,
  storyId: c.storyId,
  textChild: c.textChild,
  axes: c.axes,
  variants: c.variants.map((v) => ({
    key: v.key,
    layout: v.layout,
    text: v.text && v.text.content ? v.text : null,
    bind: v.bind,
    values: v.values,
  })),
});

const summarise = `
const summarise = (r) => ({
  changes: r.changes,
  changedSample: r.changed.slice(0, 12),
  components: r.components,
  resolution: {
    byName: r.resolution.byName,
    byValue: r.resolution.byValue,
    unresolved: r.resolution.unresolved.length,
    unresolvedSample: r.resolution.unresolved.slice(0, 5),
  },
});`;

function emitOnce(component) {
  return `${applySource()}
const SPEC = ${JSON.stringify({ components: [slimComponent(component)] })};
${summarise}
return summarise(await applySpec(figma, SPEC));
`;
}

function emitTwice(component) {
  return `${applySource()}
const SPEC = ${JSON.stringify({ components: [slimComponent(component)] })};
${summarise}
// Idempotency contract: applying the same spec twice must be a no-op the second
// time. A non-zero second pass means some write depends on prior node state.
const first = await applySpec(figma, SPEC);
const second = await applySpec(figma, SPEC);
return {
  component: ${JSON.stringify(component.name)},
  idempotent: second.changes === 0,
  first: summarise(first),
  second: summarise(second),
};
`;
}

function emitPlugin() {
  return `/* eslint-disable no-undef */
/**
 * GENERATED FILE — do not edit.
 * Run \`node src/emit-apply.mjs --plugin\` to regenerate.
 *
 * The apply logic below is inlined verbatim from src/apply.js so the plugin and
 * the MCP path share one implementation.
 */

${applySource()}

figma.showUI(__html__, { width: 420, height: 520 });

figma.ui.onmessage = async (msg) => {
  if (msg.type !== 'sync') return;
  try {
    let spec;
    if (msg.json) {
      spec = JSON.parse(msg.json);
    } else if (msg.url) {
      const res = await fetch(msg.url);
      if (!res.ok) throw new Error('fetch ' + msg.url + ' -> HTTP ' + res.status);
      spec = await res.json();
    } else {
      throw new Error('provide a spec URL or paste the JSON');
    }

    const vars = await figma.variables.getLocalVariablesAsync();
    if (vars.length === 0) {
      throw new Error(
        'this file has no variables — publish the token collections before syncing components',
      );
    }

    const report = await applySpec(figma, spec);
    const results = report.components.map(
      (c) =>
        c.name +
        ': ' +
        c.created +
        ' created, ' +
        c.updated +
        ' updated, ' +
        c.variants +
        ' variants' +
        (c.orphaned.length ? ', ' + c.orphaned.length + ' orphaned (left alone)' : ''),
    );
    const log = [
      report.changes + ' property write(s)',
      'bindings: ' +
        report.resolution.byName +
        ' by name, ' +
        report.resolution.byValue +
        ' by value, ' +
        report.resolution.unresolved.length +
        ' unresolved',
    ];
    figma.ui.postMessage({ type: 'done', results, log });
  } catch (e) {
    figma.ui.postMessage({ type: 'error', message: e.message, log: [] });
  }
};
`;
}

const specPath = path.resolve(arg('spec', path.join(ROOT, 'figma-spec.json')));

if (flag('plugin')) {
  const out = path.join(ROOT, 'plugin', 'code.js');
  fs.writeFileSync(out, emitPlugin());
  console.log(`wrote ${out} (generated from src/apply.js)`);
  process.exit(0);
}

if (!fs.existsSync(specPath)) {
  console.error(`spec not found: ${specPath}\nrun src/extract.mjs first`);
  process.exit(1);
}
const spec = JSON.parse(fs.readFileSync(specPath, 'utf-8'));
const only = arg('only', null);
const components = spec.components.filter((c) => !only || c.name === only);
if (!components.length) {
  console.error(`no components matched${only ? ` --only ${only}` : ''}`);
  process.exit(1);
}

const outDir = path.resolve(arg('out-dir', path.join(ROOT, '.apply')));
fs.mkdirSync(outDir, { recursive: true });

const twice = flag('twice');
let oversize = 0;
components.forEach((c, i) => {
  const code = twice ? emitTwice(c) : emitOnce(c);
  const file = path.join(
    outDir,
    `${String(i + 1).padStart(2, '0')}-${c.name}.js`,
  );
  fs.writeFileSync(file, code);
  const kb = (code.length / 1024).toFixed(1);
  const over = code.length > MAX_CODE;
  if (over) oversize += 1;
  console.log(
    `${c.name.padEnd(12)} ${String(c.variants.length).padStart(3)} variants  ${kb.padStart(6)} kB${over ? '  <<< OVER 50k use_figma LIMIT' : ''}`,
  );
});

console.log(
  `\n${components.length} script(s) -> ${outDir}${twice ? '  (each applies twice and asserts idempotency)' : ''}`,
);
if (oversize) {
  console.error(
    `\n${oversize} script(s) exceed the 50k use_figma limit — split the component's axes.`,
  );
  process.exit(1);
}
