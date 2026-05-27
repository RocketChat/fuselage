/**
 * valid-color-token — flag invalid/malformed Fuselage color token names.
 *
 * Catches the case where a developer passes the FULL internal token name
 * (e.g. color='font-default') when the Box transform already prepends the
 * prefix — resulting in font-font-default at runtime (invalid, console warning).
 *
 * Two error kinds:
 *   doublePrefix  — value starts with the group prefix (font-/stroke-) when the
 *                   prop already adds that prefix. The fix is to use the bare name.
 *   unknownToken  — value is a string that is not in the installed palette at all.
 *
 * CRITICAL: If the `palette` option is absent or empty this rule is a complete
 * NO-OP. It must NEVER false-positive when it has no live data. Standalone
 * `npx eslint --config` won't inject the palette — that's intentional.
 * The authoritative run is via run-gate.mjs which injects the live palette.
 *
 * Options (single schema object):
 *   palette  {Array<{groupName: string, meta: object|null, keys: string[]}>}
 *     The `semantic` resolver output array. Injected by run-gate.mjs; not
 *     present in standalone eslint runs.
 */

/** CSS-literal patterns that belong to no-raw-color, not here. Skip them. */
const RAW_COLOR_RE = /var\(|#|rgb|hsl/i;

/**
 * Return true when a string value should be skipped by this rule
 * (non-semantic, handled by no-raw-color or is a dynamic expression).
 */
function isRawOrDynamic(value) {
  return RAW_COLOR_RE.test(value);
}

/**
 * Build the validation sets from the palette array.
 *
 * Returns:
 *   colorValid      Set<string>  — valid bare names for color=
 *   bgValid         Set<string>  — valid bare AND full names for bg=/backgroundColor=
 *   borderColorValid Set<string> — valid bare names for borderColor=
 */
function buildSets(palette) {
  const colorValid = new Set();
  const bgValid = new Set();
  const borderColorValid = new Set();

  for (const group of palette) {
    const { groupName, meta, keys } = group;

    if (groupName === 'text') {
      // text group: meta.prop includes 'color='; keys are already bare (font- stripped)
      for (const k of keys) {
        colorValid.add(k);
      }
    } else if (groupName === 'surface') {
      // surface group: meta.prop is 'bg= / backgroundColor='; keys are already bare
      // bg= accepts BOTH bare ('light') and full ('surface-light') forms
      for (const k of keys) {
        bgValid.add(k);
        bgValid.add('surface-' + k);
      }
    } else if (groupName === 'stroke') {
      // stroke group: meta.prop is 'borderColor='; keys are already bare (stroke- stripped)
      for (const k of keys) {
        borderColorValid.add(k);
      }
    } else if (groupName === 'statusColor') {
      // statusColor group: full names (e.g. 'success', 'danger') also valid for color=
      for (const k of keys) {
        colorValid.add(k);
      }
    } else if (groupName === 'status') {
      // status group: status-background-* full names are valid for bg=
      for (const k of keys) {
        bgValid.add(k);
      }
    }
    // badge, shadow, and other groups: not mapped to JSX props — skip
  }

  return { colorValid, bgValid, borderColorValid };
}

/**
 * Validate a single string value for a given prop and report if invalid.
 * @param {object} context  ESLint context
 * @param {object} node     AST node to report on
 * @param {string} prop     JSX attribute name (color/bg/backgroundColor/borderColor)
 * @param {string} value    The string literal value to check
 * @param {Set}    colorValid
 * @param {Set}    bgValid
 * @param {Set}    borderColorValid
 */
function checkValue(context, node, prop, value, colorValid, bgValid, borderColorValid) {
  // Skip raw CSS literals — those are no-raw-color's job
  if (isRawOrDynamic(value)) return;

  if (prop === 'color') {
    // double-prefix: developer wrote 'font-default' but transform adds 'font-' itself
    if (value.startsWith('font-')) {
      const bare = value.slice('font-'.length);
      context.report({
        node,
        messageId: 'doublePrefix',
        data: { prop, prefix: 'font-', bare, value },
      });
      return;
    }
    if (!colorValid.has(value)) {
      context.report({
        node,
        messageId: 'unknownToken',
        data: { prop, value },
      });
    }
  } else if (prop === 'borderColor') {
    // double-prefix: developer wrote 'stroke-light' but transform adds 'stroke-' itself
    if (value.startsWith('stroke-')) {
      const bare = value.slice('stroke-'.length);
      context.report({
        node,
        messageId: 'doublePrefix',
        data: { prop, prefix: 'stroke-', bare, value },
      });
      return;
    }
    if (!borderColorValid.has(value)) {
      context.report({
        node,
        messageId: 'unknownToken',
        data: { prop, value },
      });
    }
  } else if (prop === 'bg' || prop === 'backgroundColor') {
    // bg= is permissive: accepts bare ('light') and full ('surface-light') forms
    if (!bgValid.has(value)) {
      context.report({
        node,
        messageId: 'unknownToken',
        data: { prop, value },
      });
    }
  }
}

export default {
  meta: {
    type: 'problem',
    docs: {
      description:
        'Flag invalid or double-prefixed Fuselage color token names in JSX color/bg/borderColor props.',
      recommended: true,
    },
    schema: [
      {
        type: 'object',
        properties: {
          palette: {
            type: 'array',
            description:
              'Semantic palette array from resolveCategory("semantic"). Injected by run-gate.mjs. ' +
              'When absent the rule is a no-op.',
            items: {
              type: 'object',
              properties: {
                groupName: { type: 'string' },
                meta: {},
                keys: { type: 'array', items: { type: 'string' } },
              },
              required: ['groupName', 'keys'],
              additionalProperties: true,
            },
          },
        },
        additionalProperties: false,
      },
    ],
    messages: {
      doublePrefix:
        'Fuselage `{{prop}}` takes the BARE token name — the transform adds the `{{prefix}}` prefix itself. ' +
        "Use {{prop}}='{{bare}}', not '{{value}}'.",
      unknownToken:
        "Unknown Fuselage color token '{{value}}' for `{{prop}}=` — not in the installed palette. " +
        'Resolve valid names via resolve.mjs semantic.',
    },
  },

  create(context) {
    const options = context.options[0] || {};
    const palette = Array.isArray(options.palette) ? options.palette : null;

    // NO-OP guard: if palette is absent or empty, disable entirely
    if (!palette || palette.length === 0) {
      return {};
    }

    const { colorValid, bgValid, borderColorValid } = buildSets(palette);

    const TARGET_PROPS = new Set(['color', 'bg', 'backgroundColor', 'borderColor']);

    return {
      JSXAttribute(node) {
        if (!node.value) return;

        const attrName =
          node.name.type === 'JSXIdentifier' ? node.name.name : '';
        if (!TARGET_PROPS.has(attrName)) return;

        const val = node.value;

        // Direct string literal: color="something"
        if (val.type === 'Literal' && typeof val.value === 'string') {
          checkValue(context, val, attrName, val.value, colorValid, bgValid, borderColorValid);
          return;
        }

        // JSXExpressionContainer: color={"something"} or color={condition ? "a" : "b"}
        if (val.type === 'JSXExpressionContainer') {
          const expr = val.expression;

          // String literal in braces: color={"something"}
          if (expr.type === 'Literal' && typeof expr.value === 'string') {
            checkValue(context, expr, attrName, expr.value, colorValid, bgValid, borderColorValid);
            return;
          }

          // Conditional expression with string literal branches: color={x ? "a" : "b"}
          if (expr.type === 'ConditionalExpression') {
            const { consequent, alternate } = expr;
            if (consequent.type === 'Literal' && typeof consequent.value === 'string') {
              checkValue(context, consequent, attrName, consequent.value, colorValid, bgValid, borderColorValid);
            }
            if (alternate.type === 'Literal' && typeof alternate.value === 'string') {
              checkValue(context, alternate, attrName, alternate.value, colorValid, bgValid, borderColorValid);
            }
          }
          // Non-literal expressions (variables, function calls, etc.) — skip
        }
      },
    };
  },
};
