/**
 * Applies a figma-spec.json to a Figma file. Single source of truth for the
 * apply step — both the plugin (`plugin/code.js`, generated) and the MCP path
 * (`src/emit-apply.mjs`) run this exact code.
 *
 * Two rules make this deterministic, and both exist because breaking them
 * produced real bugs:
 *
 * 1. Every write is preceded by a read-and-compare, and only happens when the
 *    value actually differs. `applySpec` therefore reports a `changes` count,
 *    and running it twice must report 0 the second time. Without this, code that
 *    folds current state into the target (`Math.max(target, node.width)`) looks
 *    fine and silently makes the result depend on history.
 * 2. Nothing here decides anything. Every value comes from the spec. If the
 *    output is wrong, the extractor is wrong.
 *
 * Runs inside the Figma plugin sandbox: plain JS, no imports, no Node globals.
 */

export function applySpec(figma, spec) {
  const q = (x) => Math.round(x * 255);

  const parseColor = (str) => {
    if (!str) return null;
    const m = String(str).match(/rgba?\(([^)]+)\)/);
    if (m) {
      const p = m[1].split(',').map((x) => parseFloat(x.trim()));
      return {
        r: p[0] / 255,
        g: p[1] / 255,
        b: p[2] / 255,
        a: p.length > 3 ? p[3] : 1,
      };
    }
    const h = String(str).replace('#', '');
    if (!/^[0-9a-fA-F]{6,8}$/.test(h)) return null;
    const n = parseInt(h.slice(0, 6), 16);
    return {
      r: ((n >> 16) & 255) / 255,
      g: ((n >> 8) & 255) / 255,
      b: (n & 255) / 255,
      a: h.length === 8 ? parseInt(h.slice(6, 8), 16) / 255 : 1,
    };
  };

  const sameColor = (a, b) =>
    !!a &&
    !!b &&
    q(a.r) === q(b.r) &&
    q(a.g) === q(b.g) &&
    q(a.b) === q(b.b) &&
    Math.abs((a.a === undefined ? 1 : a.a) - (b.a === undefined ? 1 : b.a)) <
      0.01;

  const weightToStyle = (w) =>
    w >= 800
      ? 'Extra Bold'
      : w >= 700
        ? 'Bold'
        : w >= 600
          ? 'Semi Bold'
          : w >= 500
            ? 'Medium'
            : 'Regular';

  /** `--rcx-color-button-background-primary-default` -> `button-background-primary-default` */
  const cssVarToFigmaName = (cssVar) => {
    for (const p of ['--rcx-color-', '--rcx-']) {
      if (cssVar.startsWith(p)) return cssVar.slice(p.length);
    }
    return cssVar.replace(/^--/, '');
  };

  const report = {
    changes: 0,
    changed: [],
    components: [],
    resolution: { byName: 0, byValue: 0, unresolved: [] },
  };

  const note = (what) => {
    report.changes += 1;
    if (report.changed.length < 40) report.changed.push(what);
  };

  /** The read-compare-write primitive. Returns true when it wrote. */
  const set = (node, key, value, where) => {
    if (node[key] === value) return false;
    node[key] = value;
    note(`${where}.${key}`);
    return true;
  };

  return (async () => {
    const collections =
      await figma.variables.getLocalVariableCollectionsAsync();
    const allVars = await figma.variables.getLocalVariablesAsync();
    const byName = new Map(allVars.map((v) => [v.name, v]));

    const colorByValue = [];
    const floatByValue = [];
    for (const v of allVars) {
      const col = collections.find((c) => c.id === v.variableCollectionId);
      if (!col) continue;
      const raw = v.valuesByMode[col.modes[0].modeId];
      if (!raw || raw.type === 'VARIABLE_ALIAS') continue;
      if (v.resolvedType === 'COLOR') {
        colorByValue.push({ v, color: raw, col: col.name });
      }
      if (v.resolvedType === 'FLOAT') {
        floatByValue.push({ v, value: raw, col: col.name });
      }
    }
    // Primitives win value-matching ties: a component token that happens to
    // share a value is a coincidence, a primitive with that value is the source.
    const orderedColors = colorByValue
      .slice()
      .sort(
        (a, b) =>
          (a.col === 'Primitives' ? -1 : 0) - (b.col === 'Primitives' ? -1 : 0),
      );

    const resolveColor = (cssVar, measured, where) => {
      if (cssVar) {
        const hit = byName.get(cssVarToFigmaName(cssVar));
        if (hit) {
          report.resolution.byName += 1;
          return hit;
        }
      }
      const target = parseColor(measured);
      const hit =
        target && orderedColors.find((c) => sameColor(c.color, target));
      if (hit) {
        report.resolution.byValue += 1;
        return hit.v;
      }
      report.resolution.unresolved.push(`${where}: ${measured}`);
      return null;
    };

    const resolveFloat = (cssVar, measured, where) => {
      if (cssVar) {
        const hit = byName.get(cssVarToFigmaName(cssVar));
        if (hit) {
          report.resolution.byName += 1;
          return hit;
        }
      }
      const c = floatByValue.filter((f) => f.value === measured);
      const hit = c.find((x) => x.col === 'Layout') || c[0];
      if (hit) {
        report.resolution.byValue += 1;
        return hit.v;
      }
      report.resolution.unresolved.push(`${where}: ${measured}`);
      return null;
    };

    /**
     * Paints carry BOTH the measured colour and its alpha, then the variable on
     * top. `setBoundVariableForPaint` leaves the literal alone and Figma renders
     * that literal whenever it fails to resolve the alias, so seeding black
     * renders solid black with a correct-looking binding; dropping the alpha
     * turns `border: 1px solid transparent` into a black outline.
     */
    const desiredPaint = (variable, measured) => {
      const c = measured || { r: 0, g: 0, b: 0, a: 1 };
      const base = {
        type: 'SOLID',
        color: { r: c.r, g: c.g, b: c.b },
        opacity: c.a === undefined ? 1 : c.a,
      };
      return variable
        ? figma.variables.setBoundVariableForPaint(base, 'color', variable)
        : base;
    };

    const samePaintList = (current, desired) => {
      if (!current || current.length !== desired.length) return false;
      for (let i = 0; i < desired.length; i++) {
        const a = current[i];
        const b = desired[i];
        if (!a || a.type !== b.type) return false;
        if (!sameColor({ ...a.color, a: 1 }, { ...b.color, a: 1 }))
          return false;
        const ao = a.opacity === undefined ? 1 : a.opacity;
        const bo = b.opacity === undefined ? 1 : b.opacity;
        if (Math.abs(ao - bo) > 0.01) return false;
        const av = a.boundVariables?.color?.id || null;
        const bv = b.boundVariables?.color?.id || null;
        if (av !== bv) return false;
      }
      return true;
    };

    const setPaints = (node, key, desired, where) => {
      if (samePaintList(node[key], desired)) return;
      node[key] = desired;
      note(`${where}.${key}`);
    };

    const setBound = (node, field, variable, where) => {
      const current = node.boundVariables?.[field]?.id || null;
      const target = variable ? variable.id : null;
      if (current === target) return;
      if (variable) node.setBoundVariable(field, variable);
      note(`${where}.${field}`);
    };

    async function applyVariant(comp, v, where) {
      const L = v.layout;
      set(comp, 'name', v.key, where);
      set(
        comp,
        'layoutMode',
        L.direction === 'VERTICAL' ? 'VERTICAL' : 'HORIZONTAL',
        where,
      );
      set(comp, 'primaryAxisAlignItems', 'CENTER', where);
      set(comp, 'counterAxisAlignItems', 'CENTER', where);
      set(comp, 'paddingTop', L.paddingTop, where);
      set(comp, 'paddingRight', L.paddingRight, where);
      set(comp, 'paddingBottom', L.paddingBottom, where);
      set(comp, 'paddingLeft', L.paddingLeft, where);
      if (L.gap) set(comp, 'itemSpacing', L.gap, where);
      set(comp, 'minWidth', L.minWidth || null, where);

      let label = comp.findOne((n) => n.type === 'TEXT');
      if (v.text && v.text.content) {
        const style = weightToStyle(v.text.fontWeight);
        await figma.loadFontAsync({ family: 'Inter', style });
        if (!label) {
          label = figma.createText();
          label.name = spec.textChild || 'label';
          comp.appendChild(label);
          note(`${where}.label created`);
        } else if (label.fontName && label.fontName.family) {
          await figma.loadFontAsync(label.fontName);
        }
        if (
          label.fontName.family !== 'Inter' ||
          label.fontName.style !== style
        ) {
          label.fontName = { family: 'Inter', style };
          note(`${where}.label.fontName`);
        }
        set(label, 'fontSize', v.text.fontSize, `${where}.label`);
        const lh = label.lineHeight;
        if (!lh || lh.unit !== 'PIXELS' || lh.value !== v.text.lineHeight) {
          label.lineHeight = { unit: 'PIXELS', value: v.text.lineHeight };
          note(`${where}.label.lineHeight`);
        }
        set(label, 'characters', v.text.content, `${where}.label`);
        set(label, 'layoutSizingHorizontal', 'HUG', `${where}.label`);
        set(label, 'layoutSizingVertical', 'HUG', `${where}.label`);
      } else if (label) {
        label.remove();
        label = null;
        note(`${where}.label removed`);
      }

      // Never fold comp.width in: that makes the result depend on prior state
      // and a variant can never shrink back down on a re-sync.
      const targetW = L.fluidWidth
        ? L.minWidth || 320
        : L.width || L.minWidth || 1;
      const h = L.height || 0;
      if (h > 0) {
        const w = Math.max(targetW, 1);
        if (
          Math.round(comp.width) !== Math.round(w) ||
          Math.round(comp.height) !== Math.round(h)
        ) {
          comp.resize(w, h);
          note(`${where}.size`);
        }
      }

      // Sizing modes go AFTER resize, never before: resize() resets them to
      // FIXED, so setting them first means the next sync reads FIXED, writes
      // AUTO, resizes, and resets again — the apply never converges. The
      // idempotency contract is what surfaced this.
      //
      // AUTO only makes sense when there is a child to hug. A glyph-only
      // component like FramedIcon has no text node, so hugging would collapse it
      // to its padding; its width comes from the spec instead.
      set(comp, 'primaryAxisSizingMode', label ? 'AUTO' : 'FIXED', where);
      set(comp, 'counterAxisSizingMode', 'FIXED', where);

      const cFill = parseColor(v.values.fill);
      const fv = resolveColor(v.bind.fill, v.values.fill, `${where} fill`);
      setPaints(comp, 'fills', [desiredPaint(fv, cFill)], where);

      if (v.values.strokeWeight > 0) {
        const cStroke = parseColor(v.values.stroke);
        const sv = resolveColor(
          v.bind.stroke,
          v.values.stroke,
          `${where} stroke`,
        );
        setPaints(comp, 'strokes', [desiredPaint(sv, cStroke)], where);
        set(comp, 'strokeAlign', 'INSIDE', where);
        set(comp, 'strokeWeight', v.values.strokeWeight, where);
        const swv = resolveFloat(
          v.bind.strokeWeight,
          v.values.strokeWeight,
          `${where} strokeWeight`,
        );
        for (const f of [
          'strokeTopWeight',
          'strokeBottomWeight',
          'strokeLeftWeight',
          'strokeRightWeight',
        ]) {
          setBound(comp, f, swv, where);
        }
      } else if (comp.strokes && comp.strokes.length) {
        comp.strokes = [];
        note(`${where}.strokes cleared`);
      }

      if (label) {
        const cText = parseColor(v.values.textFill);
        const tv = resolveColor(
          v.bind.textFill,
          v.values.textFill,
          `${where} textFill`,
        );
        setPaints(label, 'fills', [desiredPaint(tv, cText)], `${where}.label`);
      }

      set(comp, 'cornerRadius', v.values.radius || 0, where);
      if (v.values.radius > 0) {
        const rv = resolveFloat(
          v.bind.radius,
          v.values.radius,
          `${where} radius`,
        );
        for (const f of [
          'topLeftRadius',
          'topRightRadius',
          'bottomLeftRadius',
          'bottomRightRadius',
        ]) {
          setBound(comp, f, rv, where);
        }
      }
    }

    for (const component of spec.components) {
      let page = figma.root.children.find((p) => p.name === component.name);
      if (!page) {
        page = figma.createPage();
        page.name = component.name;
        note(`page ${component.name} created`);
      }
      await figma.setCurrentPageAsync(page);

      let set_ = page.findOne(
        (n) => n.type === 'COMPONENT_SET' && n.name === component.name,
      );
      const existing = new Map();
      if (set_) for (const c of set_.children) existing.set(c.name, c);

      let created = 0;
      let updated = 0;
      const comps = [];
      for (const v of component.variants) {
        let comp = existing.get(v.key);
        if (comp) {
          updated += 1;
          existing.delete(v.key);
        } else {
          comp = figma.createComponent();
          created += 1;
          note(`${component.name}/${v.key} created`);
          if (set_) set_.appendChild(comp);
          else page.appendChild(comp);
        }
        await applyVariant(comp, v, `${component.name}/${v.key}`);
        comps.push(comp);
      }
      const orphaned = [...existing.keys()];

      if (!set_) {
        set_ = figma.combineAsVariants(comps, page);
        set_.name = component.name;
        note(`${component.name} set created`);
      }
      const description =
        'Generated by @rocket.chat/figma-sync from Fuselage Storybook (' +
        component.storyId +
        ').\nGeometry and colours are measured from the rendered component, not ' +
        'hand-authored. Re-running the sync overwrites them.';
      set(set_, 'description', description, component.name);

      // Variants stack at 0,0 after combineAsVariants, so the grid is explicit.
      const axisNames = Object.keys(component.axes);
      const cols = component.axes[axisNames[axisNames.length - 1]] || [''];
      const colW =
        Math.max.apply(
          null,
          component.variants.map(
            (v) => v.layout.width || v.layout.minWidth || 320,
          ),
        ) + 48;
      const rowH =
        Math.max.apply(
          null,
          component.variants.map((v) => v.layout.height || 40),
        ) + 40;
      set(set_, 'layoutMode', 'NONE', component.name);
      const rows = [];
      for (const child of set_.children) {
        const parts = child.name.split(', ');
        const colLabel = parts[parts.length - 1].split('=')[1];
        const rowLabel = parts.slice(0, -1).join(', ') || 'row';
        if (!rows.includes(rowLabel)) rows.push(rowLabel);
        const x = 40 + Math.max(0, cols.indexOf(colLabel)) * colW;
        const y = 40 + rows.indexOf(rowLabel) * rowH;
        set(child, 'x', x, `${component.name}/${child.name}`);
        set(child, 'y', y, `${component.name}/${child.name}`);
      }
      const setW = 80 + cols.length * colW;
      const setH = 80 + rows.length * rowH;
      if (
        Math.round(set_.width) !== Math.round(setW) ||
        Math.round(set_.height) !== Math.round(setH)
      ) {
        set_.resize(setW, setH);
        note(`${component.name} set size`);
      }
      set(set_, 'x', 0, component.name);
      set(set_, 'y', 0, component.name);

      report.components.push({
        name: component.name,
        created,
        updated,
        orphaned,
        variants: set_.children.length,
      });
    }

    return report;
  })();
}
