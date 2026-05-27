#!/usr/bin/env node
/**
 * resolve.mjs — live source-of-truth resolver for fuselage-craft.
 *
 * Reads @rocket.chat/fuselage* packages from the consumer's working directory.
 * Uses the TypeScript compiler API against installed .d.ts files (consumer) or
 * monorepo src/*.ts (in the fuselage monorepo itself). Zero Fuselage vocabulary
 * is hardcoded here.
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
import { readFileSync, existsSync } from 'fs';
import { resolve as pathResolve, dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// ─── Resolution root ──────────────────────────────────────────────────────────

const cwd = process.cwd();

/**
 * Build a require() anchored to a given directory.
 */
function makeRequire(dir) {
  return createRequire(pathToFileURL(join(dir, 'package.json')).href);
}

const cwdRequire = makeRequire(cwd);

/**
 * Read the `version` field from a package's package.json.
 */
function readPackageVersion(pkgName) {
  try {
    const pkgJson = cwdRequire(`${pkgName}/package.json`);
    if (pkgJson && pkgJson.version) return pkgJson.version;
  } catch {
    // fall through
  }
  const shortName = pkgName.replace('@rocket.chat/', '');
  try {
    const localPath = pathResolve(cwd, 'packages', shortName, 'package.json');
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

// ─── TypeScript compiler bootstrap ───────────────────────────────────────────

/**
 * Resolve the TypeScript module. Try:
 *   1. Consumer's cwd node_modules
 *   2. This skill's own directory (gate/node_modules has typescript)
 * Returns the ts module or null.
 */
let _ts = null;
let _tsResolved = false;

function loadTypeScript() {
  if (_tsResolved) return _ts;
  _tsResolved = true;

  // 1. Try from cwd
  try {
    _ts = cwdRequire('typescript');
    return _ts;
  } catch {
    // fall through
  }

  // 2. Try from skill dir (gate/node_modules has typescript in the monorepo)
  const candidates = [
    join(__dirname, 'gate'), // skills/fuselage-craft/gate
    __dirname, // skills/fuselage-craft
  ];
  for (const dir of candidates) {
    try {
      _ts = makeRequire(dir)('typescript');
      return _ts;
    } catch {
      // continue
    }
  }

  _ts = null;
  return null;
}

const TS_DEGRADED = {
  status: 'type-only',
  data: 'typescript not resolvable from cwd; validate via the type gate',
};

// ─── Package entry resolution ─────────────────────────────────────────────────

const PKG_SHORT = {
  '@rocket.chat/fuselage': 'fuselage',
  '@rocket.chat/fuselage-forms': 'fuselage-forms',
  '@rocket.chat/fuselage-hooks': 'fuselage-hooks',
};

/**
 * Resolve the TypeScript entry point for a package.
 * Priority:
 *   1. Installed package's types field (consumer node_modules .d.ts)
 *   2. Monorepo src/index.ts (in the fuselage monorepo itself)
 * Returns { path, source } or null.
 */
function resolveTypesEntry(pkg) {
  // 1. Installed node_modules
  try {
    const pkgJsonPath = cwdRequire.resolve(`${pkg}/package.json`);
    const pkgJson = JSON.parse(readFileSync(pkgJsonPath, 'utf8'));
    const typesField = pkgJson.types || pkgJson.typings;
    if (typesField) {
      const pkgDir = dirname(pkgJsonPath);
      const entry = join(pkgDir, typesField);
      if (existsSync(entry)) {
        return { path: entry, source: 'installed .d.ts (types)' };
      }
    }
  } catch {
    // fall through
  }

  // 2. Monorepo src fallback
  const short = PKG_SHORT[pkg];
  if (short) {
    const srcIndex = pathResolve(cwd, 'packages', short, 'src', 'index.ts');
    if (existsSync(srcIndex)) {
      return { path: srcIndex, source: 'monorepo src (types)' };
    }
  }

  return null;
}

// ─── TS Program cache ─────────────────────────────────────────────────────────

const _programCache = new Map();

/**
 * Build (or retrieve cached) a ts.Program for a given entry file.
 * Returns { program, checker, sourceFile } or null.
 */
function getTsProgram(entryPath) {
  if (_programCache.has(entryPath)) return _programCache.get(entryPath);

  const ts = loadTypeScript();
  if (!ts) {
    _programCache.set(entryPath, null);
    return null;
  }

  const compilerOptions = {
    noEmit: true,
    skipLibCheck: true,
    types: [],
    // Use Bundler when available (TS >=5.0), fall back to NodeNext
    moduleResolution:
      ts.ModuleResolutionKind.Bundler ?? ts.ModuleResolutionKind.NodeNext,
    target: ts.ScriptTarget.ESNext,
    allowJs: false,
    // Allow .d.ts programs to pull in .ts source
    allowImportingTsExtensions: true,
    noEmitOnError: false,
  };

  let program;
  try {
    program = ts.createProgram([entryPath], compilerOptions);
  } catch (e) {
    _programCache.set(entryPath, null);
    return null;
  }

  const checker = program.getTypeChecker();
  const sourceFile = program.getSourceFile(entryPath);
  if (!sourceFile) {
    _programCache.set(entryPath, null);
    return null;
  }

  const result = { program, checker, sourceFile };
  _programCache.set(entryPath, result);
  return result;
}

// ─── TS extraction helpers ────────────────────────────────────────────────────

/**
 * Get all exported symbols from a module's source file.
 */
function getExportedSymbols(checker, sourceFile) {
  const moduleSymbol = checker.getSymbolAtLocation(sourceFile);
  if (!moduleSymbol) return [];
  return checker.getExportsOfModule(moduleSymbol);
}

/**
 * Check if a symbol is a value declaration (function, class, variable, const).
 */
function isValueDeclaration(ts, symbol) {
  const flags = symbol.getFlags();
  return !!(
    flags & ts.SymbolFlags.Function ||
    flags & ts.SymbolFlags.Class ||
    flags & ts.SymbolFlags.Variable ||
    flags & ts.SymbolFlags.BlockScopedVariable ||
    flags & ts.SymbolFlags.FunctionScopedVariable
  );
}

/**
 * Extract string literal members from a type alias union.
 * e.g. type FontScale = 'hero' | 'h1' | 'h2' | ...
 */
function extractUnionStringLiterals(ts, checker, symbol) {
  const decls = symbol.getDeclarations?.() ?? [];
  for (const decl of decls) {
    if (!ts.isTypeAliasDeclaration(decl)) continue;
    const type = checker.getTypeAtLocation(decl.type);
    if (type.isUnion()) {
      const literals = [];
      for (const t of type.types) {
        if (t.isStringLiteral()) literals.push(t.value);
      }
      if (literals.length > 0) return literals;
    }
    // single literal (non-union)
    if (type.isStringLiteral()) return [type.value];
  }
  return null;
}

/**
 * Extract the keys of an exported const object symbol.
 * e.g. export const surfaceColors = { 'surface-light': ..., ... }
 * Returns an array of string keys.
 */
function extractObjectKeys(ts, checker, symbol) {
  const type = checker.getTypeOfSymbol(symbol);
  const props = checker.getPropertiesOfType(type);
  const keys = props.map((p) => p.getName());
  return keys.filter((k) => typeof k === 'string' && k.length > 0);
}

/**
 * Extract string literal union members from the `elevation` property
 * of the StylingProps type exported by the fuselage entry.
 * Looks for the StylingProps type alias and reads its `elevation` property.
 */
function extractElevationLiterals(ts, checker, exports) {
  // Find StylingProps type alias in exported symbols
  const stylingPropsSymbol = exports.find((s) => s.getName() === 'StylingProps');
  if (stylingPropsSymbol) {
    const decls = stylingPropsSymbol.getDeclarations?.() ?? [];
    for (const decl of decls) {
      if (!ts.isTypeAliasDeclaration(decl)) continue;
      const type = checker.getTypeAtLocation(decl.type);
      const elevProp = type.getProperty('elevation');
      if (elevProp) {
        const elevType = checker.getTypeOfSymbol(elevProp);
        const literals = extractUnionFromType(ts, elevType);
        if (literals && literals.length > 0) return literals;
      }
    }
  }

  // Fallback: search all exported interface/type symbols for one with `elevation`
  for (const sym of exports) {
    const decls = sym.getDeclarations?.() ?? [];
    for (const decl of decls) {
      if (!ts.isTypeAliasDeclaration(decl) && !ts.isInterfaceDeclaration(decl))
        continue;
      const type = checker.getTypeAtLocation(decl);
      const elevProp = type.getProperty('elevation');
      if (!elevProp) continue;
      const elevType = checker.getTypeOfSymbol(elevProp);
      const literals = extractUnionFromType(ts, elevType);
      if (literals && literals.length > 0) return literals;
    }
  }

  return null;
}

/**
 * Extract string literal union values from a type (handles union + single).
 */
function extractUnionFromType(ts, type) {
  if (type.isUnion()) {
    const lits = [];
    for (const t of type.types) {
      if (t.isStringLiteral()) lits.push(t.value);
    }
    return lits.length > 0 ? lits : null;
  }
  if (type.isStringLiteral()) return [type.value];
  return null;
}

// ─── Token data import (cwd-anchored, absolute path) ──────────────────────────

/**
 * Import a package data file (e.g. colors.mjs) from the CONSUMER's node_modules.
 * A bare `import('pkg/file')` resolves relative to THIS module (the skill repo),
 * not the consumer's cwd, so subpath data imports silently fail in a consumer.
 * Resolve the package dir from cwd and import the absolute file URL instead.
 * Falls back to the monorepo packages/<short>/ location.
 * Returns { value, source } or null.
 */
async function importPkgData(pkg, files) {
  const candidates = [];
  try {
    const pkgDir = dirname(cwdRequire.resolve(`${pkg}/package.json`));
    for (const f of files) candidates.push([join(pkgDir, f), 'node_modules (data)']);
  } catch {
    // not resolvable via node_modules
  }
  const short = pkg.replace('@rocket.chat/', '');
  for (const f of files) {
    candidates.push([pathResolve(cwd, 'packages', short, f), 'monorepo (data)']);
  }
  for (const [abs, source] of candidates) {
    if (!existsSync(abs)) continue;
    try {
      const mod = await import(pathToFileURL(abs).href);
      if (mod && mod.default) return { value: mod.default, source };
    } catch {
      // try next candidate
    }
  }
  return null;
}

// ─── Category resolvers ───────────────────────────────────────────────────────

async function resolveColors() {
  const hit = await importPkgData('@rocket.chat/fuselage-tokens', [
    'colors.mjs',
    'colors.js',
  ]);
  if (hit && Object.keys(hit.value).length > 0) {
    return { status: 'ok', source: hit.source, data: Object.keys(hit.value) };
  }
  return {
    status: 'unavailable',
    reason: '@rocket.chat/fuselage-tokens colors data could not be loaded',
    data: [],
  };
}

async function resolveFontScale() {
  const ts = loadTypeScript();

  if (ts) {
    // Primary: extract FontScale type alias from the fuselage entry
    const entry = resolveTypesEntry('@rocket.chat/fuselage');
    if (entry) {
      const prog = getTsProgram(entry.path);
      if (prog) {
        const { checker, sourceFile } = prog;
        const exports = getExportedSymbols(checker, sourceFile);
        const fontScaleSym = exports.find((s) => s.getName() === 'FontScale');
        if (fontScaleSym) {
          const literals = extractUnionStringLiterals(ts, checker, fontScaleSym);
          if (literals && literals.length > 0) {
            return { status: 'ok', source: entry.source, data: literals };
          }
        }
      }
    }
  }

  // Data fallback: typography tokens
  const hit = await importPkgData('@rocket.chat/fuselage-tokens', [
    'typography.mjs',
    'typography.js',
  ]);
  if (hit && hit.value && hit.value.fontScales) {
    return {
      status: 'ok',
      source: hit.source,
      data: Object.keys(hit.value.fontScales),
    };
  }

  if (!ts) return TS_DEGRADED;

  return {
    status: 'unavailable',
    reason: 'FontScale type not found and typography data unavailable',
    data: [],
  };
}

async function resolveBreakpoints() {
  const hit = await importPkgData('@rocket.chat/fuselage-tokens', [
    'breakpoints.mjs',
    'breakpoints.js',
  ]);
  if (hit) {
    const v = hit.value;
    const data = Array.isArray(v)
      ? v.map((b) => b.name).filter(Boolean)
      : Object.keys(v);
    if (data.length > 0) return { status: 'ok', source: hit.source, data };
  }
  return {
    status: 'unavailable',
    reason: '@rocket.chat/fuselage-tokens breakpoints data could not be loaded',
    data: [],
  };
}

/**
 * Semantic color groups: read the exported const sub-objects from Theme.ts.
 * The Palette export is: { surface: surfaceColors, text: textIconColors, ... }
 * Each sub-object (surfaceColors, textIconColors, ...) is also exported directly.
 * We read the Palette object's type properties, and for each, extract the
 * keys of the corresponding sub-object type.
 */
async function resolveSemantic() {
  const ts = loadTypeScript();
  if (!ts) return TS_DEGRADED;

  const entry = resolveTypesEntry('@rocket.chat/fuselage');
  if (!entry) {
    return {
      status: 'unavailable',
      reason: '@rocket.chat/fuselage not installed and not in monorepo',
      data: {},
    };
  }

  const prog = getTsProgram(entry.path);
  if (!prog) {
    return {
      status: 'unavailable',
      reason: 'Could not build TypeScript program for @rocket.chat/fuselage',
      data: {},
    };
  }

  const { checker, sourceFile } = prog;
  const exports = getExportedSymbols(checker, sourceFile);

  // The Palette const maps group names to sub-object consts.
  // We can read Palette's type directly: each property's type has the color keys.
  const paletteSym = exports.find((s) => s.getName() === 'Palette');
  if (paletteSym) {
    const paletteType = checker.getTypeOfSymbol(paletteSym);
    const groupProps = checker.getPropertiesOfType(paletteType);
    const groups = {};
    for (const groupProp of groupProps) {
      const groupName = groupProp.getName();
      const groupType = checker.getTypeOfSymbol(groupProp);
      const colorProps = checker.getPropertiesOfType(groupType);
      const keys = colorProps.map((p) => p.getName()).filter((k) => k.startsWith(groupName.replace('Color', '')) || k.length > 0);
      // Filter to only string keys that look like semantic color names (contain '-')
      const colorKeys = colorProps
        .map((p) => p.getName())
        .filter((k) => typeof k === 'string' && k.includes('-'));
      if (colorKeys.length > 0) groups[groupName] = colorKeys;
    }
    if (Object.keys(groups).length > 0) {
      return { status: 'ok', source: entry.source, data: groups };
    }
  }

  // Fallback: read the named sub-object exports directly
  // Map from export name to palette group key
  const subObjectMap = [
    ['surfaceColors', 'surface'],
    ['textIconColors', 'text'],
    ['strokeColors', 'stroke'],
    ['statusBackgroundColors', 'status'],
    ['statusColors', 'statusColor'],
    ['badgeBackgroundColors', 'badge'],
    ['shadowColors', 'shadow'],
  ];

  const groups = {};
  for (const [exportName, groupKey] of subObjectMap) {
    const sym = exports.find((s) => s.getName() === exportName);
    if (!sym) continue;
    const keys = extractObjectKeys(ts, checker, sym);
    if (keys.length > 0) groups[groupKey] = keys;
  }

  if (Object.keys(groups).length > 0) {
    return { status: 'ok', source: entry.source, data: groups };
  }

  return {
    status: 'unavailable',
    reason: 'Palette and sub-object exports not found in @rocket.chat/fuselage types',
    data: {},
  };
}

async function resolveElevation() {
  const ts = loadTypeScript();
  if (!ts) return TS_DEGRADED;

  const entry = resolveTypesEntry('@rocket.chat/fuselage');
  if (!entry) {
    return {
      status: 'type-only',
      data: 'type-only: @rocket.chat/fuselage not found; values are "0"|"1"|"2"|"1nb"|"2nb" in StylingProps',
    };
  }

  const prog = getTsProgram(entry.path);
  if (!prog) {
    return {
      status: 'type-only',
      data: 'type-only: could not build TypeScript program; validate via the type gate',
    };
  }

  const { checker, sourceFile } = prog;
  const exports = getExportedSymbols(checker, sourceFile);

  const literals = extractElevationLiterals(ts, checker, exports);
  if (literals && literals.length > 0) {
    return { status: 'ok', source: entry.source, data: literals };
  }

  // Second approach: build a separate program targeting stylingProps.ts directly
  const short = PKG_SHORT['@rocket.chat/fuselage'];
  const stylingPropsPath = pathResolve(
    cwd,
    'packages',
    short,
    'src',
    'components',
    'Box',
    'stylingProps.ts',
  );
  if (existsSync(stylingPropsPath)) {
    const prog2 = getTsProgram(stylingPropsPath);
    if (prog2) {
      const exports2 = getExportedSymbols(prog2.checker, prog2.sourceFile);
      const stylingPropsSym = exports2.find((s) => s.getName() === 'StylingProps');
      if (stylingPropsSym) {
        const decls = stylingPropsSym.getDeclarations?.() ?? [];
        for (const decl of decls) {
          if (!ts.isTypeAliasDeclaration(decl)) continue;
          const type = prog2.checker.getTypeAtLocation(decl.type);
          const elevProp = type.getProperty('elevation');
          if (elevProp) {
            const elevType = prog2.checker.getTypeOfSymbol(elevProp);
            const lits = extractUnionFromType(ts, elevType);
            if (lits && lits.length > 0) {
              return { status: 'ok', source: 'monorepo src (types)', data: lits };
            }
          }
        }
      }
    }
  }

  return {
    status: 'type-only',
    data: 'type-only: elevation literals are "0"|"1"|"2"|"1nb"|"2nb" in StylingProps.elevation; validate via the type gate',
  };
}

async function resolveComponents() {
  const ts = loadTypeScript();
  if (!ts) return TS_DEGRADED;

  const entry = resolveTypesEntry('@rocket.chat/fuselage');
  if (!entry) {
    return {
      status: 'unavailable',
      reason: '@rocket.chat/fuselage not installed and not in monorepo',
      data: [],
    };
  }

  const prog = getTsProgram(entry.path);
  if (!prog) {
    return {
      status: 'unavailable',
      reason: 'Could not build TypeScript program for @rocket.chat/fuselage',
      data: [],
    };
  }

  const { checker, sourceFile } = prog;
  const exports = getExportedSymbols(checker, sourceFile);

  const names = exports
    .filter((s) => /^[A-Z]/.test(s.getName()) && isValueDeclaration(ts, s))
    .map((s) => s.getName())
    .sort();

  if (names.length > 0) {
    return { status: 'ok', source: entry.source, data: names };
  }

  return {
    status: 'unavailable',
    reason: 'No PascalCase value exports found in @rocket.chat/fuselage types',
    data: [],
  };
}

async function resolveForms() {
  const ts = loadTypeScript();
  if (!ts) return TS_DEGRADED;

  const entry = resolveTypesEntry('@rocket.chat/fuselage-forms');
  if (!entry) {
    return {
      status: 'unavailable',
      reason: '@rocket.chat/fuselage-forms not installed and not in monorepo',
      data: [],
    };
  }

  const prog = getTsProgram(entry.path);
  if (!prog) {
    return {
      status: 'unavailable',
      reason: 'Could not build TypeScript program for @rocket.chat/fuselage-forms',
      data: [],
    };
  }

  const { checker, sourceFile } = prog;
  const exports = getExportedSymbols(checker, sourceFile);

  const names = exports
    .filter((s) => /^[A-Z]/.test(s.getName()) && isValueDeclaration(ts, s))
    .map((s) => s.getName())
    .sort();

  if (names.length > 0) {
    return { status: 'ok', source: entry.source, data: names };
  }

  return {
    status: 'unavailable',
    reason: 'No PascalCase value exports found in @rocket.chat/fuselage-forms types',
    data: [],
  };
}

async function resolveHooks() {
  const ts = loadTypeScript();
  if (!ts) return TS_DEGRADED;

  const entry = resolveTypesEntry('@rocket.chat/fuselage-hooks');
  if (!entry) {
    return {
      status: 'unavailable',
      reason: '@rocket.chat/fuselage-hooks not installed and not in monorepo',
      data: [],
    };
  }

  const prog = getTsProgram(entry.path);
  if (!prog) {
    return {
      status: 'unavailable',
      reason: 'Could not build TypeScript program for @rocket.chat/fuselage-hooks',
      data: [],
    };
  }

  const { checker, sourceFile } = prog;
  const exports = getExportedSymbols(checker, sourceFile);

  const names = exports
    .filter((s) => /^use[A-Z]/.test(s.getName()))
    .map((s) => s.getName())
    .sort();

  if (names.length > 0) {
    return { status: 'ok', source: entry.source, data: names };
  }

  return {
    status: 'unavailable',
    reason: 'No hook exports found in @rocket.chat/fuselage-hooks types',
    data: [],
  };
}

// ─── Public API ───────────────────────────────────────────────────────────────

/**
 * Resolve a single category.
 * Returns: { status: 'ok'|'unavailable'|'type-only'|'rule', source?, reason?, data }
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
    case 'elevation':
      return resolveElevation();
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
    case 'radius':
      return {
        status: 'rule',
        data: 'Border radius is permissive (CSSProperties[\'borderRadius\']); semantic convention is \'none\'|\'full\'|x<N> but this is not enforced by types. Validate via design system conventions.',
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
  const resolvedFrom = cwd;
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
            resolvedFrom: cwd,
            versions: collectVersions(),
            categories: { [categoryArg]: await resolveCategory(categoryArg) },
          };
    process.stdout.write(JSON.stringify(result, null, 2) + '\n');
    return;
  }

  // Human output
  const versions = collectVersions();

  process.stdout.write('\n═══ fuselage-craft resolver ══════════════════════════\n');
  process.stdout.write(`Resolved from: ${cwd}\n`);
  process.stdout.write('Package versions:\n');
  for (const [pkg, ver] of Object.entries(versions)) {
    process.stdout.write(`  ${pkg}: ${ver}\n`);
  }
  process.stdout.write('══════════════════════════════════════════════════════\n\n');

  const cats =
    categoryArg === 'all'
      ? [
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
        ]
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
  (process.argv[1] === __filename || process.argv[1].endsWith('/resolve.mjs'));

if (isMain) {
  main().catch((err) => {
    process.stderr.write(`resolve.mjs error: ${err.message}\n`);
    process.exit(1);
  });
}
