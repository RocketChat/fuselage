#!/usr/bin/env node
/**
 * run-gate.mjs — ESM orchestrator for the fuselage-craft gate.
 *
 * Runs:
 *   1. Lint gate — programmatic ESLint with the local gate config
 *   2. Type gate — spawns typecheck.mjs (which runs tsc --noEmit)
 *
 * Usage:
 *   node skills/fuselage-craft/gate/run-gate.mjs [globs...]
 *   node skills/fuselage-craft/gate/run-gate.mjs src/**\/*.{ts,tsx}
 *
 * Exits nonzero if lint errors > 0 OR tsc exits nonzero.
 * Warnings do NOT fail the gate.
 */

import { ESLint } from 'eslint';
import { spawn } from 'child_process';
import { fileURLToPath, pathToFileURL } from 'url';
import { dirname, resolve as pathResolve, relative, join } from 'path';
import { argv, exit, cwd } from 'process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const GATE_DIR = __dirname;

const DEFAULT_GLOBS = ['src/**/*.{ts,tsx}'];
const targetGlobs = argv.slice(2).length > 0 ? argv.slice(2) : DEFAULT_GLOBS;

// ─── Live Fuselage control list ───────────────────────────────────────────────

/**
 * Load the live list of Fuselage form input control names from the resolver.
 * These are passed as the `controls` option to the require-field-wrapper rule
 * so no Fuselage names are baked into the rule itself.
 *
 * On failure, returns null and the rule falls back to its raw-HTML default.
 */
async function loadLiveFuselageControls() {
  // Locate resolve.mjs relative to this file: ../resolve.mjs
  const resolverPath = pathToFileURL(
    join(GATE_DIR, '..', 'resolve.mjs'),
  ).href;
  try {
    const { resolveCategory } = await import(resolverPath);
    const result = await resolveCategory('forms');
    if (result.status === 'ok' && Array.isArray(result.data) && result.data.length > 0) {
      return result.data;
    }
    process.stderr.write(
      `run-gate: resolver returned ${result.status} for forms: ${result.reason ?? ''}\n`,
    );
    return null;
  } catch (err) {
    process.stderr.write(
      `run-gate: could not load resolver (${err.message}); require-field-wrapper will use raw-HTML default\n`,
    );
    return null;
  }
}

// ─── Lint gate ────────────────────────────────────────────────────────────────

async function runLintGate(fuselageControls) {
  // Build rule options for require-field-wrapper.
  // If we have a live control list, merge it with the raw-HTML defaults.
  const rawHtml = ['input', 'select', 'textarea'];
  const controls = fuselageControls
    ? [...new Set([...rawHtml, ...fuselageControls])]
    : null; // null = rule uses its own DEFAULT_CONTROLS (raw HTML only)

  const overrideConfig = controls
    ? [
        {
          rules: {
            'fuselage-craft-gate/require-field-wrapper': [
              'error',
              { controls },
            ],
          },
        },
      ]
    : undefined;

  const eslint = new ESLint({
    overrideConfigFile: pathResolve(GATE_DIR, 'eslint.config.mjs'),
    ...(overrideConfig ? { overrideConfig } : {}),
    // Let the consumer's cwd be the base for glob resolution
    cwd: cwd(),
  });

  let results;
  try {
    results = await eslint.lintFiles(targetGlobs);
  } catch (err) {
    process.stderr.write(`Lint gate error: ${err.message}\n`);
    return { errors: 1, warnings: 0 };
  }

  let totalErrors = 0;
  let totalWarnings = 0;

  for (const result of results) {
    if (result.messages.length === 0) continue;

    const relPath = relative(cwd(), result.filePath);
    for (const msg of result.messages) {
      const severity = msg.severity === 2 ? 'error' : 'warn';
      const loc = `${relPath}:${msg.line}:${msg.column}`;
      const ruleId = msg.ruleId ? ` [${msg.ruleId}]` : '';
      process.stdout.write(`${severity}  ${loc}${ruleId}  ${msg.message}\n`);
    }

    totalErrors += result.errorCount;
    totalWarnings += result.warningCount;
  }

  return { errors: totalErrors, warnings: totalWarnings };
}

// ─── Type gate ────────────────────────────────────────────────────────────────

function runTypeGate() {
  return new Promise((promiseResolve) => {
    const scriptPath = new URL('./typecheck.mjs', import.meta.url).pathname;

    const child = spawn(process.execPath, [scriptPath], {
      stdio: 'inherit',
      shell: false,
    });

    child.on('close', (code) => {
      promiseResolve(code ?? 1);
    });

    child.on('error', (err) => {
      process.stderr.write(
        `Type gate: failed to spawn typecheck: ${err.message}\n`,
      );
      promiseResolve(1);
    });
  });
}

// ─── Main ─────────────────────────────────────────────────────────────────────

process.stdout.write(
  `\nfuselage-craft gate — targeting: ${targetGlobs.join(', ')}\n\n`,
);

// Load live Fuselage form control list before lint (degrade gracefully on failure)
const fuselageControls = await loadLiveFuselageControls();
if (fuselageControls) {
  process.stdout.write(
    `resolver: loaded ${fuselageControls.length} Fuselage form controls for require-field-wrapper\n`,
  );
} else {
  process.stdout.write(
    `resolver: could not load Fuselage controls — require-field-wrapper will check raw HTML only\n`,
  );
}

process.stdout.write('─── Lint gate ───────────────────────────────────────\n');
const { errors: lintErrors, warnings: lintWarnings } = await runLintGate(fuselageControls);

process.stdout.write(
  '\n─── Type gate ───────────────────────────────────────\n',
);
const typeExitCode = await runTypeGate();

// ─── Summary ──────────────────────────────────────────────────────────────────

process.stdout.write('\n═════════════════════════════════════════════════════\n');
const typeStatus = typeExitCode === 0 ? 'PASS' : 'FAIL';
const lintStatus = lintErrors > 0 ? 'FAIL' : 'PASS';

process.stdout.write(`Type gate : ${typeStatus}\n`);
process.stdout.write(
  `Lint gate : ${lintStatus}  (${lintErrors} errors, ${lintWarnings} warnings)\n`,
);
process.stdout.write('═════════════════════════════════════════════════════\n\n');

const failed = lintErrors > 0 || typeExitCode !== 0;
exit(failed ? 1 : 0);
