/**
 * Static lookup maps: token-constrained prop values → utility class names.
 *
 * This is the heart of the fast-path.  Instead of running the runtime
 * css-in-js pipeline (css → hash → stylis → insertRule) for every Box render,
 * we resolve styling props to pre-generated class names in O(1).
 *
 * The utility CSS file that pairs with these maps is generated from the same
 * token data at build-time (see buildUtilities.ts).
 */

// ─── Spacing ─────────────────────────────────────────────────
const spacingScale = [0, 1, 2, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 80, 96, 112, 128] as const;

function buildSpacingMap(prefix: string): Map<string, string> {
  const map = new Map<string, string>();
  map.set('none', `rcx-${prefix}-0`);
  for (const px of spacingScale) {
    map.set(`x${px}`, `rcx-${prefix}-${px}`);
    if (prefix.startsWith('m')) {
      map.set(`neg-x${px}`, `rcx-${prefix}-neg-${px}`);
      map.set(`-x${px}`, `rcx-${prefix}-neg-${px}`);
    }
  }
  return map;
}

export const spacingMaps: Record<string, Map<string, string>> = {
  margin: buildSpacingMap('m'),
  marginBlock: buildSpacingMap('mb'),
  marginBlockStart: buildSpacingMap('mbs'),
  marginBlockEnd: buildSpacingMap('mbe'),
  marginInline: buildSpacingMap('mi'),
  marginInlineStart: buildSpacingMap('mis'),
  marginInlineEnd: buildSpacingMap('mie'),
  padding: buildSpacingMap('p'),
  paddingBlock: buildSpacingMap('pb'),
  paddingBlockStart: buildSpacingMap('pbs'),
  paddingBlockEnd: buildSpacingMap('pbe'),
  paddingInline: buildSpacingMap('pi'),
  paddingInlineStart: buildSpacingMap('pis'),
  paddingInlineEnd: buildSpacingMap('pie'),
  // aliases
  m: buildSpacingMap('m'),
  mb: buildSpacingMap('mb'),
  mbs: buildSpacingMap('mbs'),
  mbe: buildSpacingMap('mbe'),
  mi: buildSpacingMap('mi'),
  mis: buildSpacingMap('mis'),
  mie: buildSpacingMap('mie'),
  p: buildSpacingMap('p'),
  pb: buildSpacingMap('pb'),
  pbs: buildSpacingMap('pbs'),
  pbe: buildSpacingMap('pbe'),
  pi: buildSpacingMap('pi'),
  pis: buildSpacingMap('pis'),
  pie: buildSpacingMap('pie'),
};

// ─── Size ────────────────────────────────────────────────────
function buildSizeMap(prefix: string): Map<string, string> {
  const map = new Map<string, string>();
  for (const px of spacingScale) {
    map.set(`x${px}`, `rcx-${prefix}-${px}`);
  }
  map.set('none', `rcx-${prefix}-none`);
  map.set('full', `rcx-${prefix}-full`);
  map.set('sw', `rcx-${prefix}-sw`);
  map.set('sh', `rcx-${prefix}-sh`);
  return map;
}

export const sizeMaps: Record<string, Map<string, string>> = {
  width: buildSizeMap('w'),
  w: buildSizeMap('w'),
  height: buildSizeMap('h'),
  h: buildSizeMap('h'),
  minWidth: buildSizeMap('min-w'),
  maxWidth: buildSizeMap('max-w'),
  minHeight: buildSizeMap('min-h'),
  maxHeight: buildSizeMap('max-h'),
};

// ─── Background color ────────────────────────────────────────
const bgMap = new Map<string, string>();

// surface-* tokens
const surfaceNames = [
  'light', 'tint', 'room', 'neutral', 'disabled', 'hover',
  'selected', 'dark', 'featured', 'featured-hover', 'sidebar', 'overlay', 'transparent',
] as const;
for (const name of surfaceNames) {
  bgMap.set(`surface-${name}`, `rcx-bg-surface-${name}`);
  bgMap.set(name, `rcx-bg-surface-${name}`);
}

// status-background-* tokens
const statusBgNames = [
  'info', 'success', 'danger', 'warning', 'warning-2',
  'service-1', 'service-2',
] as const;
for (const name of statusBgNames) {
  bgMap.set(`status-background-${name}`, `rcx-bg-status-${name}`);
}

// badge-background-* tokens
const badgeLevels = ['level-0', 'level-1', 'level-2', 'level-3', 'level-4'] as const;
for (const name of badgeLevels) {
  bgMap.set(`badge-background-${name}`, `rcx-bg-badge-${name}`);
}

export { bgMap as backgroundColorMap };

// ─── Font color ──────────────────────────────────────────────
const fontColorMap = new Map<string, string>();
const fontNames = [
  'white', 'disabled', 'annotation', 'hint', 'secondary-info',
  'default', 'titles-labels', 'info', 'danger', 'pure-white', 'pure-black',
] as const;
for (const name of fontNames) {
  fontColorMap.set(`font-${name}`, `rcx-color-font-${name}`);
  fontColorMap.set(name, `rcx-color-font-${name}`);
}

// status-font-* tokens
const statusFontNames = [
  'font-on-info', 'font-on-success', 'font-on-danger',
  'font-on-warning', 'font-on-warning-2', 'font-on-service-1', 'font-on-service-2',
] as const;
for (const name of statusFontNames) {
  fontColorMap.set(`status-${name}`, `rcx-color-status-${name}`);
}

export { fontColorMap };

// ─── Stroke color (border-color) ─────────────────────────────
const strokeColorMap = new Map<string, string>();
const strokeNames = [
  'extra-light', 'light', 'medium', 'dark', 'extra-dark',
  'extra-light-highlight', 'highlight', 'extra-light-error', 'error',
] as const;
for (const name of strokeNames) {
  strokeColorMap.set(`stroke-${name}`, `rcx-border-${name}`);
  strokeColorMap.set(name, `rcx-border-${name}`);
}
export { strokeColorMap };

// ─── Font scale ──────────────────────────────────────────────
const fontScaleNames = [
  'hero', 'h1', 'h2', 'h3', 'h4', 'h5',
  'p1', 'p1m', 'p1b', 'p2', 'p2m', 'p2b',
  'c1', 'c2', 'micro',
] as const;

export const fontScaleMap = new Map<string, string>(
  fontScaleNames.map((name) => [name, `rcx-font-${name}`]),
);

// ─── Elevation ───────────────────────────────────────────────
export const elevationMap = new Map<string, string>([
  ['0', 'rcx-elevation-0'],
  ['1', 'rcx-elevation-1'],
  ['1nb', 'rcx-elevation-1nb'],
  ['2', 'rcx-elevation-2'],
  ['2nb', 'rcx-elevation-2nb'],
]);

// ─── Border radius ───────────────────────────────────────────
const borderRadiusMap = new Map<string, string>();
for (const px of [0, 2, 4, 8, 12, 16, 20]) {
  borderRadiusMap.set(`x${px}`, `rcx-rounded-${px}`);
}
borderRadiusMap.set('full', 'rcx-rounded-full');
borderRadiusMap.set('none', 'rcx-rounded-none');
export { borderRadiusMap };

// ─── Border width ────────────────────────────────────────────
export const borderWidthMap = new Map<string, string>([
  ['none', 'rcx-border-w-none'],
  ['default', 'rcx-border-w-default'],
  ['x1', 'rcx-border-w-default'],
  ['x2', 'rcx-border-w-2'],
  ['x4', 'rcx-border-w-4'],
]);

// ─── Display ─────────────────────────────────────────────────
export const displayMap = new Map<string, string>([
  ['none', 'rcx-d-none'],
  ['block', 'rcx-d-block'],
  ['inline', 'rcx-d-inline'],
  ['inline-block', 'rcx-d-inline-block'],
  ['flex', 'rcx-d-flex'],
  ['inline-flex', 'rcx-d-inline-flex'],
  ['grid', 'rcx-d-grid'],
]);

// ─── Flex ────────────────────────────────────────────────────
export const flexDirectionMap = new Map<string, string>([
  ['row', 'rcx-flex-row'],
  ['row-reverse', 'rcx-flex-row-reverse'],
  ['column', 'rcx-flex-column'],
  ['column-reverse', 'rcx-flex-column-reverse'],
]);

export const flexWrapMap = new Map<string, string>([
  ['nowrap', 'rcx-flex-nowrap'],
  ['wrap', 'rcx-flex-wrap'],
  ['wrap-reverse', 'rcx-flex-wrap-reverse'],
]);

export const alignItemsMap = new Map<string, string>([
  ['stretch', 'rcx-items-stretch'],
  ['flex-start', 'rcx-items-flex-start'],
  ['flex-end', 'rcx-items-flex-end'],
  ['center', 'rcx-items-center'],
  ['baseline', 'rcx-items-baseline'],
]);

export const justifyContentMap = new Map<string, string>([
  ['flex-start', 'rcx-justify-flex-start'],
  ['flex-end', 'rcx-justify-flex-end'],
  ['center', 'rcx-justify-center'],
  ['space-between', 'rcx-justify-space-between'],
  ['space-around', 'rcx-justify-space-around'],
  ['space-evenly', 'rcx-justify-space-evenly'],
]);

// ─── Overflow ────────────────────────────────────────────────
export const overflowMap = new Map<string, string>([
  ['hidden', 'rcx-overflow-hidden'],
  ['auto', 'rcx-overflow-auto'],
  ['scroll', 'rcx-overflow-scroll'],
  ['visible', 'rcx-overflow-visible'],
]);

// ─── Position ────────────────────────────────────────────────
export const positionMap = new Map<string, string>([
  ['static', 'rcx-position-static'],
  ['relative', 'rcx-position-relative'],
  ['absolute', 'rcx-position-absolute'],
  ['fixed', 'rcx-position-fixed'],
  ['sticky', 'rcx-position-sticky'],
]);

// ─── Boolean props ───────────────────────────────────────────
export const booleanPropMap: Record<string, string> = {
  withTruncatedText: 'rcx-truncate',
  invisible: 'rcx-invisible',
};

// ─── Inset ───────────────────────────────────────────────────
function buildInsetMap(prefix: string): Map<string, string> {
  const map = new Map<string, string>();
  map.set('none', `rcx-${prefix}-0`);
  for (const px of spacingScale) {
    map.set(`x${px}`, `rcx-${prefix}-${px}`);
  }
  return map;
}

export const insetMaps: Record<string, Map<string, string>> = {
  inset: buildInsetMap('inset'),
  insetBlock: buildInsetMap('inset-block'),
  insetBlockStart: buildInsetMap('inset-block-start'),
  insetBlockEnd: buildInsetMap('inset-block-end'),
  insetInline: buildInsetMap('inset-inline'),
  insetInlineStart: buildInsetMap('inset-inline-start'),
  insetInlineEnd: buildInsetMap('inset-inline-end'),
};

// ─── Master resolver ─────────────────────────────────────────
// Maps a (propName, value) → className | undefined
// Returns undefined when the value doesn't match any known utility (triggers
// fallback to runtime css-in-js).

const propToMap: Record<string, Map<string, string>> = {
  // spacing
  ...spacingMaps,
  // size
  ...sizeMaps,
  // inset
  ...insetMaps,
  // color
  backgroundColor: bgMap,
  bg: bgMap,
  color: fontColorMap,
  borderColor: strokeColorMap,
  // typography
  fontScale: fontScaleMap,
  // border
  borderRadius: borderRadiusMap,
  borderWidth: borderWidthMap,
  // layout
  display: displayMap,
  flexDirection: flexDirectionMap,
  flexWrap: flexWrapMap,
  alignItems: alignItemsMap,
  justifyContent: justifyContentMap,
  overflow: overflowMap,
  position: positionMap,
  // elevation
  elevation: elevationMap,
};

/**
 * Try to resolve a single styling prop to a utility class name.
 * Returns the class name string, or undefined if the value is not a known token.
 */
export function resolveUtilityClass(
  propName: string,
  value: unknown,
): string | undefined {
  // boolean props
  if (propName in booleanPropMap) {
    return value ? booleanPropMap[propName] : undefined;
  }

  if (typeof value !== 'string' && typeof value !== 'number') {
    return undefined;
  }

  const map = propToMap[propName];
  if (!map) {
    return undefined;
  }

  return map.get(String(value));
}
