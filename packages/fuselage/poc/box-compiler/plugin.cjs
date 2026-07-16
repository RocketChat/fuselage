/**
 * PoC Babel plugin: build-time atomic extraction for <Box>.
 *
 * For every <Box> whose styling props are static literals, resolve them to
 * atomic class names at build time, strip the props, and add a plain
 * `className`. The matching CSS rules are pushed into an out-of-band sheet.
 * Non-literal props (expressions) are left untouched and handled at runtime.
 *
 * Resolution is injected via options so the plugin reuses Fuselage's real
 * runtime logic (no token duplication):
 *   options.styleProps : string[]  — recognised styling prop names
 *   options.resolve    : (props) => { className, css }[]
 *   options.sheet      : Map<className, css>  — collected rules (deduped)
 */
module.exports = function boxAtomicPlugin({ types: t }) {
  const staticValue = (node) => {
    if (node === null) return true; // boolean shorthand: <Box invisible />
    if (t.isStringLiteral(node)) return node.value;
    if (t.isJSXExpressionContainer(node)) {
      const { expression: e } = node;
      if (
        t.isStringLiteral(e) ||
        t.isNumericLiteral(e) ||
        t.isBooleanLiteral(e)
      )
        return e.value;
    }
    return undefined; // dynamic — leave for runtime
  };

  return {
    name: 'fuselage-box-atomic',
    visitor: {
      JSXOpeningElement(path, state) {
        const { styleProps, resolve, sheet } = state.opts;
        const propSet = new Set(styleProps);

        if (!t.isJSXIdentifier(path.node.name, { name: 'Box' })) return;

        const collected = {};
        const toRemove = [];

        for (const attr of path.node.attributes) {
          if (!t.isJSXAttribute(attr) || !t.isJSXIdentifier(attr.name))
            continue;
          if (!propSet.has(attr.name.name)) continue;

          const value = staticValue(attr.value);
          if (value === undefined) continue; // dynamic prop stays

          collected[attr.name.name] = value;
          toRemove.push(attr);
        }

        if (toRemove.length === 0) return;

        const resolved = resolve(collected);
        if (resolved.length === 0) return;

        const classNames = resolved.map((r) => r.className);
        for (const { className, css } of resolved) {
          if (!sheet.has(className)) sheet.set(className, css);
        }

        path.node.attributes = path.node.attributes.filter(
          (a) => !toRemove.includes(a),
        );

        const classString = classNames.join(' ');
        const existing = path.node.attributes.find(
          (a) =>
            t.isJSXAttribute(a) &&
            t.isJSXIdentifier(a.name, { name: 'className' }),
        );

        if (!existing) {
          path.node.attributes.push(
            t.jsxAttribute(
              t.jsxIdentifier('className'),
              t.stringLiteral(classString),
            ),
          );
          return;
        }

        if (t.isStringLiteral(existing.value)) {
          existing.value = t.stringLiteral(
            `${classString} ${existing.value.value}`,
          );
          return;
        }

        // className is an expression: prepend our static classes
        if (t.isJSXExpressionContainer(existing.value)) {
          existing.value = t.jsxExpressionContainer(
            t.binaryExpression(
              '+',
              t.stringLiteral(`${classString} `),
              existing.value.expression,
            ),
          );
        }
      },
    },
  };
};
