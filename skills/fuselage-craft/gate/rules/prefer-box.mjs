/**
 * prefer-box — warn when a raw DOM element (lowercase tag) uses `style={{...}}`
 * inline styles, suggesting a Fuselage <Box> with semantic props instead.
 *
 * Severity: WARN (not error) — kept conservative to limit noise.
 * Only targets lowercase JSX elements (div, span, section, etc.) with a style
 * prop that contains an ObjectExpression (not a variable reference).
 */

// HTML tags that are reasonable candidates for <Box> replacement
const CANDIDATE_TAGS = new Set([
  'div',
  'span',
  'section',
  'article',
  'aside',
  'main',
  'header',
  'footer',
  'nav',
  'ul',
  'ol',
  'li',
  'p',
  'a',
  'button',
  'form',
  'fieldset',
  'label',
]);

export default {
  meta: {
    type: 'suggestion',
    docs: {
      description:
        'Prefer Fuselage <Box> with semantic props over raw DOM elements with inline styles.',
      recommended: false,
    },
    schema: [],
    messages: {
      preferBox:
        'Avoid inline style objects on raw DOM element <{{tag}}>. Use the Fuselage <Box> component with semantic props (p=, color=, fontScale=, etc.) so styles resolve from the design system.',
    },
  },

  create(context) {
    return {
      JSXOpeningElement(node) {
        const nameNode = node.name;
        // Only lowercase (DOM) elements
        if (nameNode.type !== 'JSXIdentifier') return;
        const tagName = nameNode.name;
        if (!CANDIDATE_TAGS.has(tagName)) return;

        // Find a style attribute with an inline object expression
        const styleAttr = node.attributes.find(
          (attr) =>
            attr.type === 'JSXAttribute' &&
            attr.name &&
            attr.name.name === 'style' &&
            attr.value &&
            attr.value.type === 'JSXExpressionContainer' &&
            attr.value.expression &&
            attr.value.expression.type === 'ObjectExpression',
        );

        if (!styleAttr) return;

        // Only warn when the object has at least one property (not empty {})
        if (styleAttr.value.expression.properties.length === 0) return;

        context.report({
          node,
          messageId: 'preferBox',
          data: { tag: tagName },
        });
      },
    };
  },
};
