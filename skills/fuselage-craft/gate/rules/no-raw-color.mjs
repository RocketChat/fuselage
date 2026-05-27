/**
 * no-raw-color — flag literal color values in JSX/style/CSS contexts.
 *
 * Detects hex (#rrggbb etc.), rgb(), rgba(), hsl(), hsla() in:
 *   - JSXAttribute string values whose attribute name relates to color
 *   - ObjectExpression property values inside a `style={{...}}` JSX attribute
 *   - TemplateLiteral / string arguments of tagged templates named `css` or `styled.*`
 *
 * Zero hardcoded Fuselage values — bans the literal pattern, not specific tokens.
 */

const COLOR_RE = /#([0-9a-fA-F]{3,8})\b|rgb\(|rgba\(|hsl\(|hsla\(/i;

const COLOR_PROP_RE = /^(color|background|backgroundColor|background-color|fill|stroke|border-color|borderColor|outline|outlineColor|caretColor|textDecorationColor|columnRuleColor|accentColor)$/i;

/** Return true when the string value contains a color literal. */
function hasColorLiteral(value) {
  return typeof value === 'string' && COLOR_RE.test(value);
}

/** Walk up ancestors to find whether this node is inside a `style={{...}}` JSX attribute. */
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

/** Return true when the node is inside a tagged template whose tag is `css` or `styled.*`. */
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

export default {
  meta: {
    type: 'problem',
    docs: {
      description:
        'Disallow literal color values in JSX/style/CSS contexts. Use Box color=/bg= semantic token names instead.',
      recommended: true,
    },
    schema: [],
    messages: {
      noRawColor:
        'Literal color value detected. Use a Box `color=` or `bg=` semantic token name (e.g. color="default") so the value resolves from the Fuselage design system at runtime.',
    },
  },

  create(context) {
    /**
     * Report a node if its string value matches the color pattern.
     */
    function reportIfColor(node, value) {
      if (hasColorLiteral(value)) {
        context.report({ node, messageId: 'noRawColor' });
      }
    }

    return {
      // Style object properties: style={{ color: '#fff' }}
      Property(node) {
        if (!isInsideStyleJSXAttr(node)) return;
        const val = node.value;
        if (val && val.type === 'Literal' && typeof val.value === 'string') {
          reportIfColor(val, val.value);
        }
      },

      // JSXAttribute string values where the attribute name relates to color
      // e.g. <div color="#fff"> or <Comp background="rgba(0,0,0,0.5)">
      JSXAttribute(node) {
        if (!node.value) return;
        const attrName =
          node.name.type === 'JSXIdentifier' ? node.name.name : '';
        if (!COLOR_PROP_RE.test(attrName)) return;

        const val = node.value;
        if (val.type === 'Literal' && typeof val.value === 'string') {
          reportIfColor(val, val.value);
        } else if (
          val.type === 'JSXExpressionContainer' &&
          val.expression.type === 'Literal' &&
          typeof val.expression.value === 'string'
        ) {
          reportIfColor(val.expression, val.expression.value);
        }
      },

      // String literals inside css`...` / styled.xxx`...` tagged templates
      Literal(node) {
        if (typeof node.value !== 'string') return;
        if (!isInsideCssTaggedTemplate(node)) return;
        reportIfColor(node, node.value);
      },

      // Template literal quasis inside css`...` / styled.xxx`...`
      TemplateElement(node) {
        const raw = node.value && node.value.raw;
        if (!raw) return;
        if (!isInsideCssTaggedTemplate(node)) return;
        if (hasColorLiteral(raw)) {
          context.report({ node, messageId: 'noRawColor' });
        }
      },
    };
  },
};
