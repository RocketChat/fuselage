#!/usr/bin/env node
/**
 * Generates utility CSS classes from @rocket.chat/fuselage-tokens dist output.
 *
 * Run: node packages/fuselage/src/utilities/buildUtilities.mjs
 * Output: packages/fuselage/src/utilities/fuselage-utilities.css
 */

import { readFileSync, writeFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';

const __dirname = dirname(fileURLToPath(import.meta.url));
const require = createRequire(import.meta.url);

const tokenColors = require('@rocket.chat/fuselage-tokens/colors.json');
const tokenTypography = require('@rocket.chat/fuselage-tokens/typography.json');
const tokenSurface = JSON.parse(readFileSync(require.resolve('@rocket.chat/fuselage-tokens/dist/surface.json'), 'utf8'));
const tokenStroke = JSON.parse(readFileSync(require.resolve('@rocket.chat/fuselage-tokens/dist/stroke.json'), 'utf8'));
const tokenFont = JSON.parse(readFileSync(require.resolve('@rocket.chat/fuselage-tokens/dist/font.json'), 'utf8'));
const tokenShadow = JSON.parse(readFileSync(require.resolve('@rocket.chat/fuselage-tokens/dist/shadow.json'), 'utf8'));
const tokenBadge = JSON.parse(readFileSync(require.resolve('@rocket.chat/fuselage-tokens/dist/badge.json'), 'utf8'));
const tokenStatus = JSON.parse(readFileSync(require.resolve('@rocket.chat/fuselage-tokens/dist/status.json'), 'utf8'));

const lines = [];
function emit(css) { lines.push(css); }

// ─── Spacing ─────────────────────────────────────────────────
const spacingScale = [0, 1, 2, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 80, 96, 112, 128];

const spacingProps = {
  m: 'margin', mb: 'margin-block', mbs: 'margin-block-start', mbe: 'margin-block-end',
  mi: 'margin-inline', mis: 'margin-inline-start', mie: 'margin-inline-end',
  p: 'padding', pb: 'padding-block', pbs: 'padding-block-start', pbe: 'padding-block-end',
  pi: 'padding-inline', pis: 'padding-inline-start', pie: 'padding-inline-end',
};

emit('/* ═══ Spacing ═══ */');
for (const [abbr, prop] of Object.entries(spacingProps)) {
  for (const px of spacingScale) {
    const rem = px / 16;
    emit(`.rcx-${abbr}-${px} { ${prop}: ${rem}rem; }`);
  }
  if (abbr.startsWith('m')) {
    for (const px of spacingScale) {
      if (px === 0) continue;
      const rem = px / 16;
      emit(`.rcx-${abbr}-neg-${px} { ${prop}: -${rem}rem; }`);
    }
  }
}

// ─── Size ────────────────────────────────────────────────────
const sizeProps = {
  w: 'width', h: 'height',
  'min-w': 'min-width', 'max-w': 'max-width',
  'min-h': 'min-height', 'max-h': 'max-height',
};
const sizeSpecial = { none: '0px', full: '100%', sw: '100vw', sh: '100vh' };

emit('\n/* ═══ Sizing ═══ */');
for (const [abbr, prop] of Object.entries(sizeProps)) {
  for (const px of spacingScale) {
    emit(`.rcx-${abbr}-${px} { ${prop}: ${px / 16}rem; }`);
  }
  for (const [name, value] of Object.entries(sizeSpecial)) {
    emit(`.rcx-${abbr}-${name} { ${prop}: ${value}; }`);
  }
}

// ─── Surface colors ──────────────────────────────────────────
emit('\n/* ═══ Surface colors (background) ═══ */');
for (const [name, fallback] of Object.entries(tokenSurface.surface.light)) {
  const kebab = name.replace(/([A-Z])/g, '-$1').toLowerCase();
  emit(`.rcx-bg-surface-${kebab} { background-color: var(--rcx-color-surface-${kebab}, ${fallback}); }`);
}

// ─── Font colors ─────────────────────────────────────────────
emit('\n/* ═══ Font colors ═══ */');
for (const [name, fallback] of Object.entries(tokenFont.font.light)) {
  const kebab = name.replace(/([A-Z])/g, '-$1').toLowerCase();
  emit(`.rcx-color-font-${kebab} { color: var(--rcx-color-font-${kebab}, ${fallback}); }`);
}

// ─── Stroke colors ───────────────────────────────────────────
emit('\n/* ═══ Stroke colors (border-color) ═══ */');
for (const [name, fallback] of Object.entries(tokenStroke.stroke.light)) {
  const kebab = name.replace(/([A-Z])/g, '-$1').toLowerCase();
  emit(`.rcx-border-${kebab} { border-color: var(--rcx-color-stroke-${kebab}, ${fallback}); }`);
}

// ─── Status background colors ────────────────────────────────
emit('\n/* ═══ Status background colors ═══ */');
for (const [name, fallback] of Object.entries(tokenStatus.status.light)) {
  if (name.startsWith('font-on-')) continue;
  emit(`.rcx-bg-status-${name} { background-color: var(--rcx-color-status-background-${name}, ${fallback}); }`);
}

// ─── Status font colors ─────────────────────────────────────
emit('\n/* ═══ Status font colors ═══ */');
for (const [name, fallback] of Object.entries(tokenStatus.status.light)) {
  if (!name.startsWith('font-on-')) continue;
  emit(`.rcx-color-status-${name} { color: var(--rcx-color-status-${name}, ${fallback}); }`);
}

// ─── Badge colors ────────────────────────────────────────────
emit('\n/* ═══ Badge colors ═══ */');
for (const [name, fallback] of Object.entries(tokenBadge.badge.light)) {
  emit(`.rcx-bg-badge-${name} { background-color: var(--rcx-color-badge-background-${name}, ${fallback}); }`);
}

// ─── Palette colors ──────────────────────────────────────────
emit('\n/* ═══ Palette colors ═══ */');
const nameMap = { n: 'neutral', b: 'primary', r: 'danger', g: 'success', y: 'warning', o: 'service-1', p: 'service-2' };
for (const [key, hex] of Object.entries(tokenColors)) {
  const prefix = key.charAt(0);
  const grade = key.slice(1);
  const name = nameMap[prefix];
  if (!name) continue;
  const varName = `--rcx-color-${name}-${grade}`;
  emit(`.rcx-bg-${key} { background-color: var(${varName}, ${hex}); }`);
  emit(`.rcx-color-${key} { color: var(${varName}, ${hex}); }`);
}

// ─── Typography ──────────────────────────────────────────────
emit('\n/* ═══ Font scale ═══ */');
for (const [name, scale] of Object.entries(tokenTypography.fontScales)) {
  emit(`.rcx-font-${name} { font-size: ${scale.fontSize / 16}rem; font-weight: ${scale.fontWeight}; line-height: ${scale.lineHeight / 16}rem; letter-spacing: ${scale.letterSpacing / 16}rem; }`);
}

emit('\n/* ═══ Font family ═══ */');
for (const [name, faces] of Object.entries(tokenTypography.fontFamilies)) {
  const value = faces.map(f => (f.includes(' ') ? `'${f}'` : f)).join(', ');
  emit(`.rcx-font-family-${name} { font-family: var(--rcx-font-family-${name}, ${value}); }`);
}

// ─── Border width ────────────────────────────────────────────
emit('\n/* ═══ Border width ═══ */');
for (const [n, v] of Object.entries({ none: '0', default: '1px', 2: '2px', 4: '4px' })) {
  emit(`.rcx-border-w-${n} { border-width: ${v}; }`);
}

// ─── Border radius ───────────────────────────────────────────
emit('\n/* ═══ Border radius ═══ */');
for (const px of [0, 2, 4, 8, 12, 16, 20]) {
  emit(`.rcx-rounded-${px} { border-radius: ${px / 16}rem; }`);
}
emit(`.rcx-rounded-full { border-radius: 9999px; }`);
emit(`.rcx-rounded-none { border-radius: 0; }`);

// ─── Elevation ───────────────────────────────────────────────
emit('\n/* ═══ Elevation ═══ */');
const sh = tokenShadow.shadow.light;
emit(`.rcx-elevation-0 { box-shadow: none; }`);
emit(`.rcx-elevation-1 { box-shadow: 0px 0px 12px 0px var(--rcx-color-shadow-elevation-1, ${sh['elevation-1']}); border: 1px solid var(--rcx-color-shadow-elevation-border, ${sh['elevation-border']}); }`);
emit(`.rcx-elevation-1nb { box-shadow: 0px 0px 12px 0px var(--rcx-color-shadow-elevation-1, ${sh['elevation-1']}); }`);
emit(`.rcx-elevation-2 { box-shadow: 0px 0px 2px 0px var(--rcx-color-shadow-elevation-2x, ${sh['elevation-2x']}), 0px 0px 12px 0px var(--rcx-color-shadow-elevation-2y, ${sh['elevation-2y']}); border: 1px solid var(--rcx-color-shadow-elevation-border, ${sh['elevation-border']}); }`);
emit(`.rcx-elevation-2nb { box-shadow: 0px 0px 2px 0px var(--rcx-color-shadow-elevation-2x, ${sh['elevation-2x']}), 0px 0px 12px 0px var(--rcx-color-shadow-elevation-2y, ${sh['elevation-2y']}); }`);

// ─── Display ─────────────────────────────────────────────────
emit('\n/* ═══ Display ═══ */');
for (const d of ['none', 'block', 'inline', 'inline-block', 'flex', 'inline-flex', 'grid']) {
  emit(`.rcx-d-${d} { display: ${d}; }`);
}

// ─── Flex ────────────────────────────────────────────────────
emit('\n/* ═══ Flex ═══ */');
for (const v of ['row', 'row-reverse', 'column', 'column-reverse']) emit(`.rcx-flex-${v} { flex-direction: ${v}; }`);
for (const v of ['nowrap', 'wrap', 'wrap-reverse']) emit(`.rcx-flex-${v} { flex-wrap: ${v}; }`);
for (const v of ['stretch', 'flex-start', 'flex-end', 'center', 'baseline']) emit(`.rcx-items-${v} { align-items: ${v}; }`);
for (const v of ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly']) emit(`.rcx-justify-${v} { justify-content: ${v}; }`);
for (const n of [0, 1]) { emit(`.rcx-grow-${n} { flex-grow: ${n}; }`); emit(`.rcx-shrink-${n} { flex-shrink: ${n}; }`); }

// ─── Overflow ────────────────────────────────────────────────
emit('\n/* ═══ Overflow ═══ */');
for (const v of ['hidden', 'auto', 'scroll', 'visible']) {
  emit(`.rcx-overflow-${v} { overflow: ${v}; }`);
  emit(`.rcx-overflow-x-${v} { overflow-x: ${v}; }`);
  emit(`.rcx-overflow-y-${v} { overflow-y: ${v}; }`);
}

// ─── Position ────────────────────────────────────────────────
emit('\n/* ═══ Position ═══ */');
for (const v of ['static', 'relative', 'absolute', 'fixed', 'sticky']) emit(`.rcx-position-${v} { position: ${v}; }`);

// ─── Text ────────────────────────────────────────────────────
emit('\n/* ═══ Text ═══ */');
for (const v of ['left', 'center', 'right', 'justify']) emit(`.rcx-text-${v} { text-align: ${v}; }`);
for (const v of ['uppercase', 'lowercase', 'capitalize', 'none']) emit(`.rcx-text-transform-${v} { text-transform: ${v}; }`);
emit(`.rcx-truncate { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }`);
emit(`.rcx-invisible { visibility: hidden; opacity: 0; }`);

// ─── Inset ───────────────────────────────────────────────────
emit('\n/* ═══ Inset ═══ */');
const insetProps = {
  inset: 'inset', 'inset-block': 'inset-block', 'inset-block-start': 'inset-block-start',
  'inset-block-end': 'inset-block-end', 'inset-inline': 'inset-inline',
  'inset-inline-start': 'inset-inline-start', 'inset-inline-end': 'inset-inline-end',
};
for (const [abbr, prop] of Object.entries(insetProps)) {
  emit(`.rcx-${abbr}-0 { ${prop}: 0; }`);
  for (const px of spacingScale) {
    if (px === 0) continue;
    emit(`.rcx-${abbr}-${px} { ${prop}: ${px / 16}rem; }`);
  }
}

// ─── Write ───────────────────────────────────────────────────
const output = `/* ════════════════════════════════════════════════════════════════
 * Fuselage Utility CSS — Auto-generated from @rocket.chat/fuselage-tokens
 * DO NOT EDIT MANUALLY — Regenerate with: node src/utilities/buildUtilities.mjs
 * ════════════════════════════════════════════════════════════════ */

${lines.join('\n')}
`;

const outPath = resolve(__dirname, 'fuselage-utilities.css');
writeFileSync(outPath, output, 'utf8');

const sizeKB = (Buffer.byteLength(output) / 1024).toFixed(1);
console.log(`✔ Generated ${outPath}`);
console.log(`  ${lines.length} rules, ${sizeKB} KB (uncompressed)`);
