#!/usr/bin/env node
/**
 * resolve.mjs — live source-of-truth resolver for fuselage-craft.
 *
 * Reads @rocket.chat/fuselage* packages at runtime from the consumer's
 * working directory. Zero Fuselage vocabulary is hardcoded here.
 *
 * Usage:
 *   node skills/fuselage-craft/resolve.mjs [category] [--json]
 *
 * Categories: colors, semantic, fontscale, breakpoints, spacing,
 *             elevation, radius, components, forms, hooks, all (default)
 *
 * Exports: resolveCategory(category), resolveAll()
 */

import { createRequire } from 'module';
import { pathToFileURL, fileURLToPath } from 'url';
import { readFileSync, readdirSync } from 'fs';
import { resolve as pathResolve, dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// ─── Resolution root ──────────────────────────────────────────────────────────

/**
 * Build a require() anchored to the consumer's working directory.
 * Falls back to the skill directory if cwd anchor fails.
 */
function makeCwdRequire() {
  const cwd = process.cwd();
  try {
    return createRequire(pathToFileURL(join(cwd, 'package.json')).href);
  } catch {
    return createRequire(pathToFileURL(join(cwd, '_anchor.js')).href);
  }
}

const cwdRequire = makeCwdRequire();

/**
 * Read the `version` field from a package's package.json.
 * Tries require resolution, then monorepo source fallback.
 */
function readPackageVersion(pkgName) {
  // Try resolving via node_modules
  try {
    const pkgJson = cwdRequire(`${pkgName}/package.json`);
    if (pkgJson && pkgJson.version) return pkgJson.version;
  } catch {
    // fall through
  }
  // Monorepo fallback: look in packages/<short-name>/package.json
  const shortName = pkgName.replace('@rocket.chat/', '');
  try {
    const localPath = pathResolve(process.cwd(), 'packages', shortName, 'package.json');
    const raw = readFileSync(localPath, 'utf8');
    const parsed = JSON.parse(raw);
    if (parsed.version) return parsed.version + ' (monorepo/src)';
  } catch {
    // not in monorepo either
  }
  return 'unknown';
}

/**
 * Collect resolved versions for the header.
 */
function collectVersions() {
  const packages = [
    '@rocket.chat/fuselage',
    '@rocket.chat/fuselage-tokens',
    '@rocket.chat/fuselage-forms',
    '@rocket.chat/fuselage-hooks',
  ];
  const versions = {};
  for (const pkg of packages) {
    versions[pkg] = readPackageVersion(pkg);
  }
  return versions;
}

// ─── Monorepo source-scan helpers ────────────────────────────────────────────

/**
 * Find the local source directory for a package name.
 * Returns null if not found (consumer install scenario — normal resolution handles it).
 */
function findLocalSrcDir(pkgName) {
  const shortName = pkgName.replace('@rocket.chat/', '');
  const candidate = pathResolve(process.cwd(), 'packages', shortName, 'src');
  try {
    readdirSync(candidate);
    return candidate;
  } catch {
    return null;
  }
}

/**
 * Extract capitalized export names from an index.ts/index.js file via regex.
 * Pattern: `export * from './Foo'` or `export { Foo, Bar }` or `export const Foo`
 * Returns array of PascalCase or camelCase names matching the filter fn.
 */
function extractExportNamesFromSource(filePath, filterFn) {
  let src;
  try {
    src = readFileSync(filePath, 'utf8');
  } catch {
    return null; // file not readable
  }

  const names = new Set();

  // export * from './FooBar' — the path segment is the component name
  for (const m of src.matchAll(/export \* from ['"]\.\/([^'"]+)['"]/g)) {
    const segment = m[1];
    if (filterFn(segment)) names.add(segment);
  }

  // export { Foo, Bar, ... } — named exports
  for (const m of src.matchAll(/export \{([^}]+)\}/g)) {
    for (const raw of m[1].split(',')) {
      const name = raw.trim().split(/\s+as\s+/).pop().trim();
      if (filterFn(name)) names.add(name);
    }
  }

  // export const Foo / export function Foo / export class Foo
  for (const m of src.matchAll(/export (?:const|function|class) ([A-Za-z_$][A-Za-z0-9_$]*)/g)) {
    if (filterFn(m[1])) names.add(m[1]);
  }

  // export default as Foo
  for (const m of src.matchAll(/export \{ default as ([A-Za-z_$][A-Za-z0-9_$]*)/g)) {
    if (filterFn(m[1])) names.add(m[1]);
  }

  return [...names].sort();
}

/**
 * Scan a directory for component subdirectory names (PascalCase directories).
 */
function scanComponentDirs(dir) {
  try {
    return readdirSync(dir, { withFileTypes: true })
      .filter((d) => d.isDirectory() && /^[A-Z]/.test(d.name))
      .map((d) => d.name)
      .sort();
  } catch {
    return null;
  }
}

/**
 * Extract string-keyed tokens from a TypeScript source file.
 * Finds object literals like: export const fooColors = { 'key-name': ..., ... }
 * Returns a map of exportName -> string[keys].
 */
function extractStringKeysFromThemeSrc(filePath) {
  let src;
  try {
    src = readFileSync(filePath, 'utf8');
  } catch {
    return null;
  }

  // Palette is assembled from named sub-objects in Theme.ts
  // Regex: export const Palette = { subKey: varName, ... }
  const paletteMatch = src.match(/export const Palette\s*=\s*\{([^}]+)\}/);
  if (!paletteMatch) return null;

  const paletteBody = paletteMatch[1];
  // Extract { surface: surfaceColors, text: textIconColors, ... }
  const subObjects = {};
  for (const m of paletteBody.matchAll(/(\w+)\s*:\s*(\w+)/g)) {
    subObjects[m[1]] = m[2]; // e.g. surface -> surfaceColors
  }

  const result = {};
  for (const [paletteKey, varName] of Object.entries(subObjects)) {
    // Find the object declaration: export const varName = { 'key': ..., }
    const re = new RegExp(
      `export const ${varName}\\s*=\\s*\\{([^}]+)\\}`,
      's',
    );
    const match = src.match(re);
    if (!match) continue;

    const keys = [];
    // Match string literal keys: 'key-name' or "key-name"
    for (const km of match[1].matchAll(/['"]([a-z][a-z0-9-]+)['"]\s*:/g)) {
      keys.push(km[1]);
    }
    if (keys.length > 0) result[paletteKey] = keys;
  }

  return result;
}

// ─── Category resolvers ───────────────────────────────────────────────────────

async function resolveColors() {
  // Try: dynamic import from consumer node_modules first
  try {
    const mod = await import(
      /* @vite-ignore */ `@rocket.chat/fuselage-tokens/colors.mjs`
    ).catch(() => null);
    if (mod && mod.default && Object.keys(mod.default).length > 0) {
      return { status: 'ok', source: 'node_modules (ESM)', data: Object.keys(mod.default) };
    }
  } catch {
    // fall through
  }

  // Monorepo fallback: import directly from local path
  const shortName = 'fuselage-tokens';
  const localMjs = pathResolve(process.cwd(), 'packages', shortName, 'colors.mjs');
  try {
    const mod = await import(pathToFileURL(localMjs).href);
    if (mod && mod.default && Object.keys(mod.default).length > 0) {
      return { status: 'ok', source: 'monorepo/src', data: Object.keys(mod.default) };
    }
  } catch {
    // fall through
  }

  return {
    status: 'unavailable',
    reason: '@rocket.chat/fuselage-tokens/colors.mjs could not be loaded',
    data: [],
  };
}

async function resolveFontScale() {
  // Try consumer node_modules first
  try {
    const mod = await import(
      /* @vite-ignore */ `@rocket.chat/fuselage-tokens/typography.mjs`
    ).catch(() => null);
    if (mod && mod.default && mod.default.fontScales) {
      return {
        status: 'ok',
        source: 'node_modules (ESM)',
        data: Object.keys(mod.default.fontScales),
      };
    }
  } catch {
    // fall through
  }

  // Monorepo fallback
  const localMjs = pathResolve(process.cwd(), 'packages', 'fuselage-tokens', 'typography.mjs');
  try {
    const mod = await import(pathToFileURL(localMjs).href);
    if (mod && mod.default && mod.default.fontScales) {
      return {
        status: 'ok',
        source: 'monorepo/src',
        data: Object.keys(mod.default.fontScales),
      };
    }
  } catch {
    // fall through
  }

  return {
    status: 'unavailable',
    reason: '@rocket.chat/fuselage-tokens/typography.mjs could not be loaded',
    data: [],
  };
}

async function resolveBreakpoints() {
  // Try consumer node_modules first
  try {
    const mod = await import(
      /* @vite-ignore */ `@rocket.chat/fuselage-tokens/breakpoints.mjs`
    ).catch(() => null);
    if (mod && mod.default && Object.keys(mod.default).length > 0) {
      return {
        status: 'ok',
        source: 'node_modules (ESM)',
        data: Object.keys(mod.default),
      };
    }
  } catch {
    // fall through
  }

  // Monorepo fallback
  const localMjs = pathResolve(
    process.cwd(),
    'packages',
    'fuselage-tokens',
    'breakpoints.mjs',
  );
  try {
    const mod = await import(pathToFileURL(localMjs).href);
    if (mod && mod.default && Object.keys(mod.default).length > 0) {
      return {
        status: 'ok',
        source: 'monorepo/src',
        data: Object.keys(mod.default),
      };
    }
  } catch {
    // fall through
  }

  return {
    status: 'unavailable',
    reason: '@rocket.chat/fuselage-tokens/breakpoints.mjs could not be loaded',
    data: [],
  };
}

async function resolveSemantic() {
  // Try: dynamic import of built @rocket.chat/fuselage and read Palette
  try {
    const mod = await import('@rocket.chat/fuselage').catch(() => null);
    if (mod && mod.Palette && typeof mod.Palette === 'object') {
      const groups = {};
      for (const [group, obj] of Object.entries(mod.Palette)) {
        if (obj && typeof obj === 'object') {
          groups[group] = Object.keys(obj);
        }
      }
      if (Object.keys(groups).length > 0) {
        return { status: 'ok', source: 'node_modules (built Palette)', data: groups };
      }
    }
  } catch {
    // fall through
  }

  // Monorepo fallback: parse Theme.ts source with regex
  const localTheme = pathResolve(
    process.cwd(),
    'packages',
    'fuselage',
    'src',
    'Theme.ts',
  );
  try {
    const groups = extractStringKeysFromThemeSrc(localTheme);
    if (groups && Object.keys(groups).length > 0) {
      return { status: 'ok', source: 'monorepo/src (Theme.ts regex)', data: groups };
    }
  } catch {
    // fall through
  }

  return {
    status: 'unavailable',
    reason:
      'semantic palette unavailable in this environment (package not built or import side-effects); ' +
      'semantic color/bg names: resolve via the type gate',
    data: {},
  };
}

async function resolveComponents() {
  // Try: dynamic import of built @rocket.chat/fuselage
  try {
    const mod = await import('@rocket.chat/fuselage').catch(() => null);
    if (mod) {
      const names = Object.keys(mod).filter((k) => /^[A-Z]/.test(k));
      if (names.length > 0) {
        return { status: 'ok', source: 'node_modules (built)', data: names.sort() };
      }
    }
  } catch {
    // fall through
  }

  // Monorepo fallback: scan packages/fuselage/src/components/ directories
  const srcDir = findLocalSrcDir('@rocket.chat/fuselage');
  if (srcDir) {
    const componentsDir = join(srcDir, 'components');
    const dirs = scanComponentDirs(componentsDir);
    if (dirs && dirs.length > 0) {
      return { status: 'ok', source: 'monorepo/src (dir scan)', data: dirs };
    }
    // Also try scanning the components/index.ts for exports
    const idxPath = join(componentsDir, 'index.ts');
    const names = extractExportNamesFromSource(idxPath, (n) => /^[A-Z]/.test(n));
    if (names && names.length > 0) {
      return { status: 'ok', source: 'monorepo/src (index.ts scan)', data: names };
    }
  }

  return {
    status: 'unavailable',
    reason: '@rocket.chat/fuselage could not be loaded and no local src found',
    data: [],
  };
}

async function resolveForms() {
  // Try: dynamic import of built @rocket.chat/fuselage-forms
  try {
    const mod = await import('@rocket.chat/fuselage-forms').catch(() => null);
    if (mod) {
      const names = Object.keys(mod).filter((k) => /^[A-Z]/.test(k));
      if (names.length > 0) {
        return { status: 'ok', source: 'node_modules (built)', data: names.sort() };
      }
    }
  } catch {
    // fall through
  }

  // Monorepo fallback: scan leaf source files (not re-export index files, which
  // produce path-segment false positives like "Inputs" or "WrappedInputComponents").
  const srcDir = findLocalSrcDir('@rocket.chat/fuselage-forms');
  if (srcDir) {
    const namesToCheck = new Set();

    // Leaf files that declare the actual exported component names
    const leafFiles = [
      join(srcDir, 'Inputs', 'WrappedInputComponents.ts'),
      join(srcDir, 'Field', 'index.ts'),
      join(srcDir, 'Field', 'Label', 'index.ts'),
    ];

    for (const file of leafFiles) {
      const names = extractExportNamesFromSource(file, (n) => /^[A-Z]/.test(n));
      if (names) names.forEach((n) => namesToCheck.add(n));
    }

    const data = [...namesToCheck].sort();
    if (data.length > 0) {
      return { status: 'ok', source: 'monorepo/src (leaf-file scan)', data };
    }
  }

  return {
    status: 'unavailable',
    reason: '@rocket.chat/fuselage-forms could not be loaded and no local src found',
    data: [],
  };
}

async function resolveHooks() {
  // Try: dynamic import of built @rocket.chat/fuselage-hooks
  try {
    const mod = await import('@rocket.chat/fuselage-hooks').catch(() => null);
    if (mod) {
      const names = Object.keys(mod).filter((k) => /^use[A-Z]/.test(k));
      if (names.length > 0) {
        return { status: 'ok', source: 'node_modules (built)', data: names.sort() };
      }
    }
  } catch {
    // fall through
  }

  // Monorepo fallback: parse src/index.ts
  const srcDir = findLocalSrcDir('@rocket.chat/fuselage-hooks');
  if (srcDir) {
    const indexPath = join(srcDir, 'index.ts');
    const names = extractExportNamesFromSource(indexPath, (n) => /^use[A-Z]/.test(n));
    if (names && names.length > 0) {
      return { status: 'ok', source: 'monorepo/src (index.ts scan)', data: names };
    }
  }

  return {
    status: 'unavailable',
    reason: '@rocket.chat/fuselage-hooks could not be loaded and no local src found',
    data: [],
  };
}

// ─── Public API ───────────────────────────────────────────────────────────────

/**
 * Resolve a single category.
 * Returns: { status: 'ok'|'unavailable'|'type-only', source?, reason?, data }
 */
export async function resolveCategory(category) {
  switch (category) {
    case 'colors':
      return resolveColors();
    case 'fontscale':
      return resolveFontScale();
    case 'breakpoints':
      return resolveBreakpoints();
    case 'semantic':
      return resolveSemantic();
    case 'components':
      return resolveComponents();
    case 'forms':
      return resolveForms();
    case 'hooks':
      return resolveHooks();
    case 'spacing':
      return {
        status: 'rule',
        data: 'Spacing uses the x<N> scale on a 4px grid (x1=4px, x2=8px, x4=16px, x8=32px, …). Type gate is authoritative for valid spacing tokens.',
      };
    case 'elevation':
      return {
        status: 'type-only',
        data: 'type-only; authoritative validation is the type gate (tsc). Values live in src/components/Box/stylingProps.ts.',
      };
    case 'radius':
      return {
        status: 'type-only',
        data: 'type-only; authoritative validation is the type gate (tsc). Values live in src/components/Box/stylingProps.ts.',
      };
    default:
      return { status: 'unavailable', reason: `Unknown category: ${category}`, data: [] };
  }
}

/**
 * Resolve all categories.
 * Returns: { resolvedFrom, versions, categories: { [cat]: result } }
 */
export async function resolveAll() {
  const resolvedFrom = process.cwd();
  const versions = collectVersions();

  const categoryNames = [
    'colors',
    'fontscale',
    'breakpoints',
    'semantic',
    'components',
    'forms',
    'hooks',
    'spacing',
    'elevation',
    'radius',
  ];

  const categories = {};
  for (const cat of categoryNames) {
    categories[cat] = await resolveCategory(cat);
  }

  return { resolvedFrom, versions, categories };
}

// ─── CLI entry point ──────────────────────────────────────────────────────────

async function main() {
  const args = process.argv.slice(2);
  const jsonMode = args.includes('--json');
  const categoryArg = args.find((a) => !a.startsWith('--')) || 'all';

  if (jsonMode) {
    const result =
      categoryArg === 'all'
        ? await resolveAll()
        : {
            resolvedFrom: process.cwd(),
            versions: collectVersions(),
            categories: { [categoryArg]: await resolveCategory(categoryArg) },
          };
    process.stdout.write(JSON.stringify(result, null, 2) + '\n');
    return;
  }

  // Human output
  const resolvedFrom = process.cwd();
  const versions = collectVersions();

  process.stdout.write('\n═══ fuselage-craft resolver ══════════════════════════\n');
  process.stdout.write(`Resolved from: ${resolvedFrom}\n`);
  process.stdout.write('Package versions:\n');
  for (const [pkg, ver] of Object.entries(versions)) {
    process.stdout.write(`  ${pkg}: ${ver}\n`);
  }
  process.stdout.write('══════════════════════════════════════════════════════\n\n');

  const cats = categoryArg === 'all'
    ? ['colors', 'fontscale', 'breakpoints', 'semantic', 'components', 'forms', 'hooks', 'spacing', 'elevation', 'radius']
    : [categoryArg];

  for (const cat of cats) {
    const result = await resolveCategory(cat);
    process.stdout.write(`─── ${cat} (${result.source ?? result.status}) ──────────────────────────\n`);

    if (result.status === 'unavailable') {
      process.stdout.write(`  unavailable: ${result.reason}\n`);
    } else if (result.status === 'type-only' || result.status === 'rule') {
      process.stdout.write(`  ${result.data}\n`);
    } else if (cat === 'semantic' && result.status === 'ok') {
      // Grouped output
      for (const [group, keys] of Object.entries(result.data)) {
        process.stdout.write(`  [${group}]\n`);
        for (const k of keys) {
          process.stdout.write(`    ${k}\n`);
        }
      }
    } else if (Array.isArray(result.data)) {
      for (const name of result.data) {
        process.stdout.write(`  ${name}\n`);
      }
    }

    process.stdout.write('\n');
  }
}

// Run CLI only when invoked directly
const isMain =
  process.argv[1] &&
  (process.argv[1] === __filename ||
    process.argv[1].endsWith('/resolve.mjs'));

if (isMain) {
  main().catch((err) => {
    process.stderr.write(`resolve.mjs error: ${err.message}\n`);
    process.exit(1);
  });
}
