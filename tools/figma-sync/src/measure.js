/**
 * Runs inside the page via page.evaluate — must stay self-contained, no imports
 * or closure references.
 *
 * The interesting part is token resolution. Fuselage stacks three layers:
 *
 *   var(--rcx-button-primary-background-color,        <- override hook, never declared
 *     var(--rcx-color-button-background-primary-default,  <- component token, DECLARED
 *       var(--rcx-color-blue-500, #156FF5)))              <- primitive, never declared
 *
 * getComputedStyle only ever gives you `#156FF5`, which is why a naive
 * extractor has to guess a variable by hex and gets it wrong whenever two
 * tokens share a value. Reading the authored declaration out of the CSSOM and
 * walking the var() chain to the first *declared* custom property yields the
 * binding the code actually means.
 */
export function measureElement(rootSelector) {
  const root = document.querySelector('#storybook-root');
  const el = rootSelector
    ? root.querySelector(rootSelector)
    : root.firstElementChild;
  if (!el)
    return {
      error: 'element not found',
      rootHtml: root ? root.innerHTML.slice(0, 200) : null,
    };

  // computed: the longhand to read the resolved value from.
  // authored: every CSS property that could carry the value. Fuselage writes the
  // shorthands (border-color / border-width / border-radius) on .rcx-button--*,
  // while the .rcx-box--full reset writes the longhand border-top-color earlier
  // in the sheet. So neither longhand nor shorthand can be preferred a priori —
  // whichever was declared LAST wins, which is what the cascade does.
  const COLOR_PROPS = {
    fill: { computed: 'background-color', authored: ['background-color'] },
    stroke: {
      computed: 'border-top-color',
      authored: ['border-top-color', 'border-color'],
    },
    textFill: { computed: 'color', authored: ['color'] },
  };
  const NUM_PROPS = {
    strokeWeight: {
      computed: 'border-top-width',
      authored: ['border-top-width', 'border-width'],
    },
    radius: {
      computed: 'border-top-left-radius',
      authored: ['border-top-left-radius', 'border-radius'],
    },
  };

  /** Authored (pre-resolution) declarations for `el`, base state only. */
  const authored = (node) => {
    const wanted = [
      ...Object.values(COLOR_PROPS),
      ...Object.values(NUM_PROPS),
    ].flatMap((p) => p.authored);
    const found = {};
    let order = 0;
    const visit = (rules) => {
      for (const r of rules) {
        // Descend into @media / @supports / @layer.
        if (!r.selectorText && r.cssRules) {
          visit(r.cssRules);
          continue;
        }
        if (!r.selectorText) continue;
        const matches = r.selectorText.split(',').some((sel) => {
          const s = sel.trim();
          // Skip interaction states — we only describe the base variant here.
          if (
            /:(hover|active|focus|focus-visible|focus-within|disabled)\b/.test(
              s,
            )
          )
            return false;
          try {
            return node.matches(s);
          } catch {
            return false;
          }
        });
        if (!matches) continue;
        // Document order, last declaration wins. Specificity is ignored: the
        // computed value is captured alongside and is the tiebreak/sanity check.
        order += 1;
        for (const p of wanted) {
          const v = r.style.getPropertyValue(p);
          if (v) found[p] = { value: v.trim(), order };
        }
      }
    };
    for (const sheet of document.styleSheets) {
      let rules;
      try {
        rules = sheet.cssRules;
      } catch {
        continue;
      } // cross-origin
      visit(rules);
    }
    return found;
  };

  /** First custom property in the var() chain that is actually declared. */
  const firstDeclaredVar = (authoredValue, node) => {
    if (!authoredValue) return null;
    const cs = getComputedStyle(node);
    const names = [...authoredValue.matchAll(/var\(\s*(--[\w-]+)/g)].map(
      (m) => m[1],
    );
    for (const n of names) {
      if (cs.getPropertyValue(n).trim()) return n;
    }
    return null;
  };

  const decls = authored(el);
  const cs = getComputedStyle(el);

  const bind = {};
  const values = {};
  const unbindable = [];

  /** Of the candidate properties, the one declared latest in the cascade. */
  const lastAuthored = (candidates) => {
    let best = null;
    for (const p of candidates) {
      const d = decls[p];
      if (d && (!best || d.order > best.order)) best = d;
    }
    return best ? best.value : null;
  };

  for (const [key, prop] of Object.entries(COLOR_PROPS)) {
    values[key] = cs.getPropertyValue(prop.computed).trim();
    const cssVar = firstDeclaredVar(lastAuthored(prop.authored), el);
    if (cssVar) bind[key] = cssVar;
    else unbindable.push(key);
  }
  for (const [key, prop] of Object.entries(NUM_PROPS)) {
    values[key] = parseFloat(cs.getPropertyValue(prop.computed)) || 0;
    const cssVar = firstDeclaredVar(lastAuthored(prop.authored), el);
    if (cssVar) bind[key] = cssVar;
    else unbindable.push(key);
  }

  const num = (p) => parseFloat(cs.getPropertyValue(p)) || 0;
  // A gradient or image background is invisible to a background-color read, so
  // the element measures as transparent and the emitted component is blank.
  // Recorded so the extractor can refuse instead of shipping an empty variant.
  const backgroundImage = cs.getPropertyValue('background-image').trim();
  const textNode =
    [...el.querySelectorAll('*')].find(
      (n) =>
        n.childNodes.length &&
        [...n.childNodes].some((c) => c.nodeType === 3 && c.textContent.trim()),
    ) || el;
  const tcs = getComputedStyle(textNode);

  return {
    tag: el.tagName,
    // On SVG elements className is an SVGAnimatedString, which stringifies to
    // "[object SVGAnimatedString]".
    classes: el.getAttribute('class') || '',
    layout: {
      width: Math.round(el.getBoundingClientRect().width),
      height: Math.round(el.getBoundingClientRect().height),
      // Recorded so the caller can tell "block element filling the canvas" from
      // "element that is genuinely this wide". A per-component flag gets this
      // wrong for components with both orientations, e.g. a vertical Divider.
      containerWidth: Math.round(
        (
          el.parentElement || document.querySelector('#storybook-root')
        ).getBoundingClientRect().width,
      ),
      minWidth: num('min-width'),
      paddingTop: num('padding-top'),
      paddingRight: num('padding-right'),
      paddingBottom: num('padding-bottom'),
      paddingLeft: num('padding-left'),
      gap: num('column-gap') || num('gap') || 0,
      direction:
        cs.display.includes('flex') && cs.flexDirection.startsWith('column')
          ? 'VERTICAL'
          : 'HORIZONTAL',
      display: cs.display,
    },
    text: {
      content: (textNode.textContent || '').trim().slice(0, 60),
      fontFamily: tcs.fontFamily.split(',')[0].replace(/["']/g, '').trim(),
      fontSize: parseFloat(tcs.fontSize),
      fontWeight: parseInt(tcs.fontWeight, 10),
      lineHeight: parseFloat(tcs.lineHeight) || parseFloat(tcs.fontSize),
      align: tcs.textAlign,
    },
    bind,
    values,
    unbindable,
    unsupported:
      backgroundImage && backgroundImage !== 'none'
        ? `background-image: ${backgroundImage.slice(0, 60)}`
        : null,
  };
}
