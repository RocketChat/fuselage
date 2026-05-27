/**
 * no-literal-shadow — flag literal boxShadow / box-shadow values in:
 *   - style={{...}} objects
 *   - css/styled tagged templates
 *
 * Message: use Box `elevation=`.
 *
 * Zero hardcoded Fuselage values — bans the literal pattern, not specific token values.
 */

const SHADOW_PROPS = new Set(['boxShadow', 'box-shadow']);

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

function getPropKey(node) {
  if (!node.key) return null;
  if (node.key.type === 'Identifier') return node.key.name;
  if (node.key.type === 'Literal') return String(node.key.value);
  return null;
}

/**
 * A heuristic to detect whether a template literal chunk contains a box-shadow
 * declaration. Matches lines like:  box-shadow: 0 2px 4px rgba(0,0,0,.2);
 */
const SHADOW_DECL_RE = /box-shadow\s*:/i;

export default {
  meta: {
    type: 'problem',
    docs: {
      description:
        'Disallow literal boxShadow/box-shadow values. Use Box `elevation=` prop so shadows resolve from the Fuselage design system.',
      recommended: true,
    },
    schema: [],
    messages: {
      noLiteralShadow:
        'Literal shadow value detected. Use the Box `elevation=` prop (e.g. elevation="2") so the shadow resolves from the Fuselage design system.',
    },
  },

  create(context) {
    return {
      // style={{ boxShadow: '0 2px 4px #000' }}
      Property(node) {
        if (!isInsideStyleJSXAttr(node)) return;
        const key = getPropKey(node);
        if (!key || !SHADOW_PROPS.has(key)) return;
        const val = node.value;
        // Any non-trivial value (string literal, non-zero, non-none) is flagged.
        if (val && val.type === 'Literal') {
          const v = val.value;
          // Allow 'none', 'unset', 'inherit', '0'
          if (
            typeof v === 'string' &&
            !['none', 'unset', 'inherit', 'initial', '0'].includes(
              v.trim().toLowerCase(),
            )
          ) {
            context.report({ node: val, messageId: 'noLiteralShadow' });
          }
        }
      },

      // TemplateElement inside css`...`/styled`...` containing box-shadow declarations
      TemplateElement(node) {
        const raw = node.value && node.value.raw;
        if (!raw) return;
        if (!isInsideCssTaggedTemplate(node)) return;
        if (SHADOW_DECL_RE.test(raw)) {
          context.report({ node, messageId: 'noLiteralShadow' });
        }
      },
    };
  },
};
