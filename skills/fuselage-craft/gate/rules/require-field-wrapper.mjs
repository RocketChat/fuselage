/**
 * require-field-wrapper — flag input controls that are NOT inside a <Field> JSX ancestor.
 *
 * Controls checked:
 *   - Raw HTML: input, select, textarea
 *   - Configurable list of Fuselage control component names (camelCase)
 *
 * Options (single schema object):
 *   controls  {string[]}  Additional / override component names to check.
 *   fieldComponent {string}  The wrapper component name (default: 'Field').
 *
 * Zero hardcoded Fuselage values — component list is configurable rule option.
 */

// Default: only raw HTML elements. Fuselage control names are supplied at
// runtime via the `controls` option (populated by run-gate.mjs from the
// live resolver). Nothing Fuselage-specific is hardcoded here.
const DEFAULT_CONTROLS = ['input', 'select', 'textarea'];

const DEFAULT_FIELD = 'Field';

/**
 * Walk JSX ancestor chain and return true when a matching wrapper is found.
 * The field wrapper may be `Field` or `FieldRow` (or the configured name).
 */
function hasFieldAncestor(node, fieldComponent) {
  const variants = new Set([fieldComponent, `${fieldComponent}Row`]);
  let current = node.parent;
  while (current) {
    if (current.type === 'JSXElement') {
      const opening = current.openingElement;
      if (opening) {
        const name = opening.name;
        // <Field> — JSXIdentifier
        if (name.type === 'JSXIdentifier' && variants.has(name.name)) {
          return true;
        }
        // <Field.Row> — JSXMemberExpression
        if (
          name.type === 'JSXMemberExpression' &&
          name.object &&
          name.object.type === 'JSXIdentifier' &&
          variants.has(name.object.name)
        ) {
          return true;
        }
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
        'Require input controls to be wrapped in a <Field> component for built-in a11y.',
      recommended: true,
    },
    schema: [
      {
        type: 'object',
        properties: {
          controls: {
            type: 'array',
            items: { type: 'string' },
            description:
              'List of component names considered input controls. Replaces the default list when provided.',
          },
          fieldComponent: {
            type: 'string',
            description:
              'Name of the field wrapper component (default: "Field").',
          },
        },
        additionalProperties: false,
      },
    ],
    messages: {
      requireFieldWrapper:
        'Input control "{{name}}" must be wrapped in a <{{field}}> (or <{{field}}Row>) component for built-in accessibility. See Fuselage Field docs.',
    },
  },

  create(context) {
    const options = context.options[0] || {};
    const controls = new Set(
      Array.isArray(options.controls) ? options.controls : DEFAULT_CONTROLS,
    );
    const fieldComponent =
      typeof options.fieldComponent === 'string'
        ? options.fieldComponent
        : DEFAULT_FIELD;

    return {
      JSXOpeningElement(node) {
        const name = node.name;
        let componentName = null;

        if (name.type === 'JSXIdentifier') {
          componentName = name.name;
        } else if (name.type === 'JSXMemberExpression') {
          // e.g. <Foo.Bar> — build full name for matching
          const parts = [];
          let n = name;
          while (n.type === 'JSXMemberExpression') {
            parts.unshift(n.property.name);
            n = n.object;
          }
          if (n.type === 'JSXIdentifier') parts.unshift(n.name);
          componentName = parts.join('.');
        }

        if (!componentName || !controls.has(componentName)) return;

        // The JSXOpeningElement's parent is JSXElement
        if (!hasFieldAncestor(node.parent, fieldComponent)) {
          context.report({
            node,
            messageId: 'requireFieldWrapper',
            data: { name: componentName, field: fieldComponent },
          });
        }
      },
    };
  },
};
