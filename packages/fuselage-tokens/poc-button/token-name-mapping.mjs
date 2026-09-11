// Shared naming rules between the live Figma fetch (sync-figma-button-tokens.mjs)
// and the offline export->base.json conversion (convert-export-to-base.mjs).
// Keeping this in one place means both stages agree on how Figma's naming
// maps to base.json's naming - no risk of the two drifting apart.

// Figma state name -> base.json key suffix. Maps 1:1, no folding needed -
// base.json keeps Focus and Keyfocus as distinct keys (unlike the compiled
// --rcx-button-* CSS vars, which fold keyfocus into focus).
export const STATE_SUFFIX = {
  default: 'Default',
  hover: 'Hover',
  press: 'Press',
  focus: 'Focus',
  keyfocus: 'Keyfocus',
  disabled: 'Disabled',
};

// Normalized (lowercase, no spaces/hyphens) Figma kind segment -> base.json
// PascalCase kind name. All 5 kinds actually present in base.json today -
// there is no Warning/SecondaryWarning kind in base.json or in the Figma
// Themes/Button group, so those are intentionally not mapped.
export const KIND_KEY = {
  primary: 'Primary',
  secondary: 'Secondary',
  secondarydanger: 'SecondaryDanger',
  danger: 'Danger',
  success: 'Success',
};

export const normalizeKind = (name) =>
  name.toLowerCase().replace(/[\s-]+/g, '');

// base.json has one naming inconsistency: SecondaryDanger's disabled font key
// is "onSecondaryDangerDisabled", not "fontOnSecondaryDangerDisabled" like
// every other kind. Everything else follows the fontOn<Kind>[Disabled] rule.
const FONT_KEY_OVERRIDES = {
  SecondaryDangerDisabled: 'onSecondaryDangerDisabled',
};

export function fontKey(kind, disabled) {
  const suffix = disabled ? `${kind}Disabled` : kind;
  return FONT_KEY_OVERRIDES[suffix] || `fontOn${suffix}`;
}

// Primitives collection group name -> colors.jsonc prefix. Mirrors
// packages/fuselage/src/styles/colors.scss's own $-map-type-to-prefix.
export const PRIMITIVE_PREFIX = {
  neutral: 'n',
  red: 'r',
  orange: 'o',
  purple: 'p',
  yellow: 'y',
  green: 'g',
  blue: 'b',
};

// Real Figma exports give the Primitives target as a single "Group/Grade"
// name, e.g. "Blue/500" or "Neutral/white" - note "white" is a GRADE under
// Neutral, not its own group, matching colors.jsonc's flat "white" key.
// "Blue/500" -> "{colors.b500}" ; "Neutral/white" -> "{colors.white}"
export function primitiveAlias(targetVariableName) {
  const [group, grade] = targetVariableName.split('/');
  if (grade.toLowerCase() === 'white') {
    return '{colors.white}';
  }
  const prefix = PRIMITIVE_PREFIX[group.toLowerCase()];
  if (!prefix) {
    throw new Error(`Unknown primitive group "${group}"`);
  }
  return `{colors.${prefix}${grade}}`;
}
