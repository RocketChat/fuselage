/**
 * no-literal-dimension — flag literal px/rem dimension values in style objects
 * and css/styled tagged templates ONLY (to avoid false positives elsewhere).
 *
 * Tracked properties: padding*, margin*, fontSize, fontWeight, lineHeight,
 * borderRadius, gap, width, height.
 *
 * Allowed values: 0, auto, 100%, CSS var(), calc() references.
 *
 * Zero hardcoded Fuselage values — bans the literal pattern only.
 */

// Bounded digit runs (no unbounded `+`) so the pattern is linear by
// construction and cannot backtrack polynomially. No real dimension has more
// than a handful of digits.
const DIMENSION_RE = /-?\d{1,9}(?:\.\d{1,9})?(?:px|rem)/i;

const DIMENSION_PROPS = new Set([
  'padding',
  'paddingTop',
  'paddingRight',
  'paddingBottom',
  'paddingLeft',
  'paddingBlock',
  'paddingBlockStart',
  'paddingBlockEnd',
  'paddingInline',
  'paddingInlineStart',
  'paddingInlineEnd',
  'margin',
  'marginTop',
  'marginRight',
  'marginBottom',
  'marginLeft',
  'marginBlock',
  'marginBlockStart',
  'marginBlockEnd',
  'marginInline',
  'marginInlineStart',
  'marginInlineEnd',
  'fontSize',
  'fontWeight',
  'lineHeight',
  'borderRadius',
  'gap',
  'rowGap',
  'columnGap',
  'width',
  'height',
  'minWidth',
  'maxWidth',
  'minHeight',
  'maxHeight',
  // CSS kebab-case equivalents (may appear in template literals)
  'padding-top',
  'padding-right',
  'padding-bottom',
  'padding-left',
  'padding-block',
  'padding-block-start',
  'padding-block-end',
  'padding-inline',
  'padding-inline-start',
  'padding-inline-end',
  'margin-top',
  'margin-right',
  'margin-bottom',
  'margin-left',
  'margin-block',
  'margin-block-start',
  'margin-block-end',
  'margin-inline',
  'margin-inline-start',
  'margin-inline-end',
  'font-size',
  'font-weight',
  'line-height',
  'border-radius',
  'row-gap',
  'column-gap',
  'min-width',
  'max-width',
  'min-height',
  'max-height',
]);

const ALLOWED_RE = /^(0|auto|100%|var\(|calc\()/;

function isAllowed(value) {
  if (typeof value !== 'string') return true;
  const trimmed = value.trim();
  return ALLOWED_RE.test(trimmed);
}

function hasDimensionLiteral(value) {
  if (typeof value !== 'string') return false;
  if (isAllowed(value)) return false;
  return DIMENSION_RE.test(value);
}

function isInsideStyleJSXAttr(node) {
  let current = node.parent;
  while (current) {
    if (
      current.type === 'JSXAttribute' &&
      current.name &&
      current.name.name === 'style'
    ) {
      return true;
    }
    current = current.parent;
  }
  return false;
}

function isInsideCssTaggedTemplate(node) {
  let current = node.parent;
  while (current) {
    if (current.type === 'TaggedTemplateExpression') {
      const { tag } = current;
      if (
        (tag.type === 'Identifier' && tag.name === 'css') ||
        (tag.type === 'MemberExpression' &&
          tag.object &&
          tag.object.name === 'styled') ||
        (tag.type === 'CallExpression' &&
          tag.callee &&
          tag.callee.name === 'styled') ||
        (tag.type === 'CallExpression' &&
          tag.callee &&
          tag.callee.type === 'MemberExpression' &&
          tag.callee.object &&
          tag.callee.object.name === 'styled')
      ) {
        return true;
      }
    }
    current = current.parent;
  }
  return false;
}

/** Get the string key of a Property node. */
function getPropKey(node) {
  if (!node.key) return null;
  if (node.key.type === 'Identifier') return node.key.name;
  if (node.key.type === 'Literal') return String(node.key.value);
  return null;
}

export default {
  meta: {
    type: 'problem',
    docs: {
      description:
        'Disallow literal px/rem dimension values in style objects and css/styled tagged templates. Use Box spacing props (p/m on x* scale), fontScale=, or borderRadius= scale names.',
      recommended: true,
    },
    schema: [],
    messages: {
      noLiteralDimension:
        'Literal dimension value detected. Use Box spacing props (`p`/`m` on the x* scale), `fontScale=`, or a `borderRadius=` scale name so spacing resolves from the Fuselage design system.',
    },
  },

  create(context) {
    return {
      // style={{ padding: '16px' }}
      Property(node) {
        if (!isInsideStyleJSXAttr(node)) return;
        const key = getPropKey(node);
        if (!key || !DIMENSION_PROPS.has(key)) return;
        const val = node.value;
        if (val && val.type === 'Literal' && typeof val.value === 'string') {
          if (hasDimensionLiteral(val.value)) {
            context.report({ node: val, messageId: 'noLiteralDimension' });
          }
        }
      },

      // Template quasis in css`...`/styled`...`
      TemplateElement(node) {
        const raw = node.value && node.value.raw;
        if (!raw) return;
        if (!isInsideCssTaggedTemplate(node)) return;
        if (hasDimensionLiteral(raw)) {
          context.report({ node, messageId: 'noLiteralDimension' });
        }
      },
    };
  },
};
