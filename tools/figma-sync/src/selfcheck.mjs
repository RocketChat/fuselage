#!/usr/bin/env node
/**
 * Checks that hold without a Storybook or a Figma file, so CI can run them on
 * every PR. Anything needing a browser lives in extract.mjs; anything needing
 * Figma lives in the `--twice` idempotency scripts.
 *
 *   node src/selfcheck.mjs
 */
import assert from 'assert';
import fs from 'fs';
import path from 'path';
import { execFileSync } from 'child_process';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');

let failures = 0;
const check = (name, fn) => {
  try {
    fn();
    console.log(`  ok    ${name}`);
  } catch (e) {
    failures += 1;
    console.error(`  FAIL  ${name}\n        ${e.message}`);
  }
};

console.log('figma-sync selfcheck\n');

const config = JSON.parse(
  fs.readFileSync(path.join(ROOT, 'components.json'), 'utf-8'),
);

check('every kept component declares a rootSelector', () => {
  for (const c of config.components) {
    assert(
      c.rootSelector && c.rootSelector.startsWith('.'),
      `${c.name} has no rootSelector — the story root is a Box wrapper, not the component`,
    );
  }
});

check('every kept component declares at least one axis', () => {
  for (const c of config.components) {
    assert(Array.isArray(c.axes) && c.axes.length > 0, `${c.name}: axes`);
  }
});

check('storyIds are well-formed and unique', () => {
  const seen = new Set();
  for (const c of [...config.components, ...config.skipped]) {
    assert(c.storyId && c.storyId.includes('--'), `${c.name}: storyId`);
    assert(!seen.has(c.storyId), `duplicate storyId ${c.storyId}`);
    seen.add(c.storyId);
  }
});

check('no component is both kept and skipped', () => {
  const kept = new Set(config.components.map((c) => c.name));
  for (const s of config.skipped) {
    assert(!kept.has(s.name), `${s.name} is in both lists`);
  }
});

check('every skipped component records why', () => {
  for (const s of config.skipped) {
    assert(
      s.reason && s.reason.length > 30,
      `${s.name}: reason must explain the failure, not just name it`,
    );
  }
});

check('oneOf axes reference args, not axis names', () => {
  for (const c of config.components) {
    for (const [axis, def] of Object.entries(c.oneOf || {})) {
      assert(
        Array.isArray(def.args) && def.args.length > 0,
        `${c.name}.${axis}: args`,
      );
      assert(
        !def.args.includes(axis),
        `${c.name}.${axis}: an axis cannot list itself as one of its args`,
      );
    }
  }
});

check('plugin/code.js is up to date with src/apply.js', () => {
  const current = fs.readFileSync(
    path.join(ROOT, 'plugin', 'code.js'),
    'utf-8',
  );
  execFileSync(
    process.execPath,
    [path.join(__dirname, 'emit-apply.mjs'), '--plugin'],
    {
      stdio: 'pipe',
    },
  );
  const regenerated = fs.readFileSync(
    path.join(ROOT, 'plugin', 'code.js'),
    'utf-8',
  );
  if (current !== regenerated) {
    fs.writeFileSync(path.join(ROOT, 'plugin', 'code.js'), regenerated);
    throw new Error(
      'plugin/code.js was stale — it has been regenerated, commit the result. ' +
        'It must never be hand-edited; src/apply.js is the source.',
    );
  }
});

// Comments in apply.js deliberately quote the anti-patterns these checks look
// for, so scanning the raw file gives false positives. Strip them first.
const codeOnly = (file) =>
  fs
    .readFileSync(file, 'utf-8')
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/(^|[^:])\/\/.*$/gm, '$1');

const applySrcRaw = fs.readFileSync(path.join(__dirname, 'apply.js'), 'utf-8');
const applySrc = codeOnly(path.join(__dirname, 'apply.js'));

check('apply.js has no Node or browser globals', () => {
  for (const banned of [
    'require(',
    'process.',
    'document.',
    'window.',
    'fetch(',
  ]) {
    assert(
      !applySrc.includes(banned),
      `apply.js uses "${banned}" — it runs in the Figma plugin sandbox`,
    );
  }
});

check('apply.js never folds current node size into the target', () => {
  assert(
    !/Math\.max\([^)]*\b(comp|node)\.(width|height)/.test(applySrc),
    'found Math.max(..., node.width) — that makes a re-sync depend on prior state',
  );
});

check(
  'apply.js seeds paint literals from the measured colour, with alpha',
  () => {
    assert(
      applySrc.includes('opacity: c.a === undefined ? 1 : c.a'),
      'paint must carry the measured alpha, or transparent borders render opaque black',
    );
    assert(
      /color:\s*\{\s*r:\s*c\.r,\s*g:\s*c\.g,\s*b:\s*c\.b\s*\}/.test(applySrc),
      'paint literal must come from the measured colour, not a hardcoded default',
    );
  },
);

check('apply.js documents why those two rules exist', () => {
  // Cheap guard against someone "simplifying" the rules away later.
  assert(
    /read-and-compare/.test(applySrcRaw) && /alpha/.test(applySrcRaw),
    'the invariants must stay documented at the top of apply.js',
  );
});

const snapPath = path.join(ROOT, 'figma-spec.snapshot.json');
check('committed snapshot exists and parses', () => {
  assert(
    fs.existsSync(snapPath),
    'figma-spec.snapshot.json is missing — run extract once and commit it',
  );
  const snap = JSON.parse(fs.readFileSync(snapPath, 'utf-8'));
  assert(
    Array.isArray(snap.components) && snap.components.length > 0,
    'empty snapshot',
  );
});

check('snapshot covers exactly the kept components', () => {
  const snap = JSON.parse(fs.readFileSync(snapPath, 'utf-8'));
  const inSnap = snap.components.map((c) => c.name).sort();
  const kept = config.components.map((c) => c.name).sort();
  assert.deepStrictEqual(
    inSnap,
    kept,
    `snapshot has [${inSnap}] but components.json keeps [${kept}] — re-run extract with --update-snapshot`,
  );
});

check('snapshot variant counts match the axis cross product', () => {
  const snap = JSON.parse(fs.readFileSync(snapPath, 'utf-8'));
  for (const c of snap.components) {
    const expected = Object.values(c.axes).reduce((n, v) => n * v.length, 1);
    assert.strictEqual(
      c.variants.length,
      expected,
      `${c.name}: ${c.variants.length} variants but axes imply ${expected}`,
    );
  }
});

check('snapshot variant keys use capitalised properties', () => {
  const snap = JSON.parse(fs.readFileSync(snapPath, 'utf-8'));
  for (const c of snap.components) {
    for (const v of c.variants) {
      for (const part of v.key.split(', ')) {
        const prop = part.split('=')[0];
        assert(
          prop[0] === prop[0].toUpperCase(),
          `${c.name}/${v.key}: "${prop}" must be capitalised or the sync duplicates the set`,
        );
      }
    }
  }
});

console.log(failures ? `\n${failures} check(s) failed` : '\nall checks passed');
process.exit(failures ? 1 : 0);
