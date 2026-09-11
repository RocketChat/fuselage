#!/usr/bin/env node
/**
 * Proposes a components.json entry for a component, doing the mechanical parts
 * so a human only has to review a judgement call.
 *
 *   node src/add-component.mjs Chip --url http://localhost:6006
 *   node src/add-component.mjs Chip --url http://localhost:6006 --write
 *
 * Derived automatically (no judgement needed):
 *   storyId       from the Storybook index
 *   rootSelector  first `.rcx-*` class in the component's .styles.scss
 *   axes          select and boolean argTypes, minus DENY below
 *
 * Left to a human, because getting these wrong is how you ship a wrong library:
 *   which axes actually matter visually — `placement` has 11 options and changes
 *   nothing about the component itself, `oneOf` grouping for mutually exclusive
 *   booleans, sample `args`, and whether the component belongs in scope at all.
 *
 * Nothing is written unless you pass --write, and even then the diff is the
 * review surface. Run `extract --only <Name>` afterwards: the error-level checks
 * are what tell you whether the proposal actually measures.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import { chromium } from 'playwright';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const REPO = path.join(ROOT, '..', '..');

const arg = (name, fallback) => {
  const i = process.argv.indexOf(`--${name}`);
  return i > -1 && process.argv[i + 1] && !process.argv[i + 1].startsWith('--')
    ? process.argv[i + 1]
    : fallback;
};
const flag = (name) => process.argv.includes(`--${name}`);

// Args that exist for polymorphism, wiring or content rather than appearance.
// Anything here still shows up in the report so you can override the guess.
const DENY = new Set([
  'is',
  'href',
  'external',
  'onClick',
  'onClose',
  'onChange',
  'children',
  'className',
  'placement',
  'linkTarget',
  'objectFit',
  'type',
  'icon',
  'title',
  'percentage',
]);

const name = process.argv[2];
if (!name || name.startsWith('--')) {
  console.error(
    'usage: node src/add-component.mjs <ComponentName> [--url <storybook>] [--write]',
  );
  process.exit(1);
}

/** The root class the component's own stylesheet declares. */
function rootSelectorFor(componentName) {
  const scss = path.join(
    REPO,
    'packages/fuselage/src/components',
    componentName,
    `${componentName}.styles.scss`,
  );
  if (!fs.existsSync(scss)) return null;
  const m = fs.readFileSync(scss, 'utf-8').match(/^\.(rcx-[a-z0-9-]+)/m);
  return m ? `.${m[1]}` : null;
}

const baseUrl = arg('url', 'http://localhost:6006');

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });

const index = await (await fetch(`${baseUrl}/index.json`)).json();
const stories = Object.values(index.entries).filter((e) => e.type === 'story');
const mine = stories.filter((e) => e.title.split('/').pop() === name);
if (!mine.length) {
  console.error(`no stories found whose title ends in "${name}"`);
  console.error(
    'available: ' +
      [...new Set(stories.map((e) => e.title.split('/').pop()))]
        .sort()
        .join(', '),
  );
  await browser.close();
  process.exit(1);
}
const story =
  mine.find((e) => /^default$/i.test(e.name)) ||
  mine.find((e) => /default/i.test(e.name)) ||
  mine[0];

await page.goto(`${baseUrl}/iframe.html?id=${story.id}&viewMode=story`, {
  waitUntil: 'domcontentloaded',
});
// The store throws "index is not ready" until a story has actually rendered.
await page.waitForFunction(() => !!window.__STORYBOOK_STORY_STORE__, {
  timeout: 60_000,
});
await page.waitForSelector('#storybook-root > *', { timeout: 60_000 });

const argTypes = await page.evaluate(async (storyId) => {
  const st = await window.__STORYBOOK_STORY_STORE__.loadStory({ storyId });
  const out = {};
  for (const [k, v] of Object.entries(st.argTypes || {})) {
    const t = v?.control?.type ?? v?.control;
    if (t === 'select' || t === 'radio' || t === 'inline-radio') {
      out[k] = { kind: 'select', options: v.options || [] };
    } else if (t === 'boolean') {
      out[k] = { kind: 'boolean' };
    }
  }
  return out;
}, story.id);

await browser.close();

const rootSelector = rootSelectorFor(name);
const proposedAxes = Object.entries(argTypes)
  .filter(([k]) => !DENY.has(k))
  .map(([k, v]) => k);

const entry = {
  name,
  storyId: story.id,
  axes: proposedAxes,
  rootSelector:
    rootSelector || 'TODO — no .styles.scss found, find the root class by hand',
};

const matrixSize = proposedAxes.reduce((n, k) => {
  const a = argTypes[k];
  return n * (a.kind === 'boolean' ? 2 : a.options.length || 1);
}, 1);

console.log(`\n${name}  (${mine.length} stories, using ${story.id})\n`);
console.log('argTypes found:');
for (const [k, v] of Object.entries(argTypes)) {
  const shape =
    v.kind === 'boolean' ? 'boolean' : `select[${v.options.length}]`;
  const verdict = DENY.has(k)
    ? 'skipped (not a visual axis)'
    : 'proposed as axis';
  console.log(`  ${k.padEnd(18)} ${shape.padEnd(12)} ${verdict}`);
}

console.log(`\nrootSelector: ${rootSelector || 'NOT FOUND'}`);
console.log(`proposed matrix: ${matrixSize} variants`);
if (matrixSize > 30) {
  console.log(
    '  ^ over ~30. Drop an axis, or group mutually exclusive booleans with oneOf.',
  );
}
if (!rootSelector) {
  console.log(
    '  ^ without a rootSelector you measure the css-in-js Box wrapper, not the component.',
  );
}

console.log('\nproposed entry:\n');
console.log(JSON.stringify(entry, null, 2));

console.log(
  [
    '',
    'Review before trusting it:',
    '  - are all those axes actually visual? drop the ones that are not',
    '  - are any of them mutually exclusive booleans? use oneOf',
    '  - does it need sample args (children, title) to render meaningfully?',
    '',
    `Then measure it:  node src/extract.mjs --url ${baseUrl} --only ${name}`,
    'An error-level finding means it does not measure — move it to skipped with',
    'the reason rather than shipping it.',
  ].join('\n'),
);

if (flag('write')) {
  const cfgPath = path.join(ROOT, 'components.json');
  const cfg = JSON.parse(fs.readFileSync(cfgPath, 'utf-8'));
  const already = [
    ...cfg.components,
    ...cfg.skipped,
    ...(cfg.outOfScope || []),
  ].find((c) => c.name === name);
  if (already) {
    console.error(`\n${name} is already in components.json — edit it by hand`);
    process.exit(1);
  }
  cfg.components.push(entry);
  fs.writeFileSync(cfgPath, `${JSON.stringify(cfg, null, 2)}\n`);
  console.log(`\nappended to ${cfgPath} — review the diff, then run extract`);
}
