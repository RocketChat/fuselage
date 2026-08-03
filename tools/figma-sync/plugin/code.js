/* eslint-disable no-undef */
/**
 * Fuselage Sync — applies a figma-spec.json produced by tools/figma-sync/src/extract.mjs.
 *
 * This plugin deliberately contains no design decisions. Every value it writes
 * comes from the spec; every binding it makes is a variable name the extractor
 * read out of the CSS. If something looks wrong here, fix the extractor.
 *
 * Updates existing variant sets in place rather than recreating them, so
 * instances placed in other files keep pointing at the same components.
 */

figma.showUI(__html__, { width: 420, height: 520 });

const CSS_PREFIXES = ['--rcx-color-', '--rcx-'];

/** `--rcx-color-button-background-primary-default` -> `button-background-primary-default` */
const cssVarToFigmaName = (cssVar) => {
  for (const p of CSS_PREFIXES)
    if (cssVar.startsWith(p)) return cssVar.slice(p.length);
  return cssVar.replace(/^--/, '');
};

const parseColor = (str) => {
  if (!str) return null;
  const m = str.match(/rgba?\(([^)]+)\)/);
  if (m) {
    const parts = m[1].split(',').map((s) => parseFloat(s.trim()));
    return {
      r: parts[0] / 255,
      g: parts[1] / 255,
      b: parts[2] / 255,
      a: parts.length > 3 ? parts[3] : 1,
    };
  }
  const h = str.replace('#', '');
  if (!/^[0-9a-fA-F]{6,8}$/.test(h)) return null;
  const n = parseInt(h.slice(0, 6), 16);
  return {
    r: ((n >> 16) & 255) / 255,
    g: ((n >> 8) & 255) / 255,
    b: (n & 255) / 255,
    a: h.length === 8 ? parseInt(h.slice(6, 8), 16) / 255 : 1,
  };
};

const sameColor = (a, b) => {
  if (!a || !b) return false;
  const q = (x) => Math.round(x * 255);
  return (
    q(a.r) === q(b.r) &&
    q(a.g) === q(b.g) &&
    q(a.b) === q(b.b) &&
    Math.abs(a.a - b.a) < 0.02
  );
};

async function buildVariableIndex() {
  const collections = await figma.variables.getLocalVariableCollectionsAsync();
  const vars = await figma.variables.getLocalVariablesAsync();
  const byName = new Map();
  const colorByValue = [];
  const floatByValue = [];

  for (const v of vars) {
    byName.set(v.name, v);
    const col = collections.find((c) => c.id === v.variableCollectionId);
    if (!col) continue;
    const modeId = col.modes[0].modeId;
    const raw = v.valuesByMode[modeId];
    if (!raw || raw.type === 'VARIABLE_ALIAS') continue; // only concrete values are matchable
    if (v.resolvedType === 'COLOR')
      colorByValue.push({ v, color: raw, collection: col.name });
    if (v.resolvedType === 'FLOAT')
      floatByValue.push({ v, value: raw, collection: col.name });
  }
  return { byName, colorByValue, floatByValue, collections };
}

/** Prefer the name the CSS gave us; fall back to a variable with the same value. */
function resolveColorVar(index, cssVar, measuredValue, log) {
  if (cssVar) {
    const name = cssVarToFigmaName(cssVar);
    const hit = index.byName.get(name);
    if (hit) return { v: hit, how: 'name' };
    log.push(`  ! no variable named "${name}" (from ${cssVar})`);
  }
  const target = parseColor(measuredValue);
  if (!target) return null;
  // Primitives first: a component token that happens to share a value is a
  // coincidence, a primitive with that value is the real source.
  const ordered = index.colorByValue
    .slice()
    .sort(
      (a, b) =>
        (a.collection === 'Primitives' ? -1 : 0) -
        (b.collection === 'Primitives' ? -1 : 0),
    );
  const match = ordered.find((c) => sameColor(c.color, target));
  return match ? { v: match.v, how: 'value' } : null;
}

function resolveFloatVar(index, cssVar, measuredValue, preferCollection) {
  if (cssVar) {
    const hit = index.byName.get(cssVarToFigmaName(cssVar));
    if (hit) return { v: hit, how: 'name' };
  }
  const candidates = index.floatByValue.filter(
    (f) => f.value === measuredValue,
  );
  const preferred =
    candidates.find((c) => c.collection === preferCollection) || candidates[0];
  return preferred ? { v: preferred.v, how: 'value' } : null;
}

/**
 * Seed the paint with the measured colour, THEN bind the variable on top.
 *
 * Do not start from black. `setBoundVariableForPaint` leaves the literal colour
 * untouched, and Figma renders that literal whenever it does not resolve the
 * alias — which it does not, reliably, for components created in an earlier
 * session. Starting from black therefore renders solid black buttons while the
 * panel still shows a correct binding. Seeding the real colour makes the two
 * agree: the binding is what designers edit, the literal is a correct fallback.
 */
const bindPaint = (node, prop, variable, measured) => {
  const rgb = measured || { r: 0, g: 0, b: 0, a: 1 };
  // Alpha lives on the paint, not inside `color`. Dropping it turns Fuselage's
  // `border: 1px solid transparent` into a solid black outline.
  const base = {
    type: 'SOLID',
    color: { r: rgb.r, g: rgb.g, b: rgb.b },
    opacity: rgb.a === undefined ? 1 : rgb.a,
  };
  const bound = figma.variables.setBoundVariableForPaint(
    base,
    'color',
    variable,
  );
  node[prop] = [bound];
};

async function applyVariant(comp, variant, spec, index, log) {
  const L = variant.layout;
  comp.name = variant.key;
  comp.layoutMode = L.direction === 'VERTICAL' ? 'VERTICAL' : 'HORIZONTAL';
  comp.primaryAxisAlignItems = 'CENTER';
  comp.counterAxisAlignItems = 'CENTER';
  comp.primaryAxisSizingMode = 'AUTO';
  comp.counterAxisSizingMode = 'FIXED';
  comp.paddingTop = L.paddingTop;
  comp.paddingBottom = L.paddingBottom;
  comp.paddingLeft = L.paddingLeft;
  comp.paddingRight = L.paddingRight;
  if (L.gap) comp.itemSpacing = L.gap;
  if (L.minWidth) comp.minWidth = L.minWidth;

  // Text child
  let label = comp.findOne((n) => n.type === 'TEXT');
  if (variant.text && variant.text.content) {
    if (!label) {
      label = figma.createText();
      label.name = spec.textChild || 'label';
      comp.appendChild(label);
    }
    const style = weightToStyle(variant.text.fontWeight);
    await figma.loadFontAsync({ family: 'Inter', style });
    label.fontName = { family: 'Inter', style };
    label.fontSize = variant.text.fontSize;
    label.lineHeight = { unit: 'PIXELS', value: variant.text.lineHeight };
    label.characters = variant.text.content;
    label.layoutSizingHorizontal = 'HUG';
    label.layoutSizingVertical = 'HUG';
  } else if (label) {
    label.remove();
    label = null;
  }

  // Do not fold comp.width into this: on a re-sync that makes the result depend
  // on the previous state and a variant can never shrink back down. Width is
  // mostly governed by primaryAxisSizingMode='AUTO' plus minWidth anyway.
  const height = L.height || 0;
  const width = L.fluidWidth ? L.minWidth || 240 : L.width || L.minWidth || 1;
  if (height) comp.resize(Math.max(width, 1), height);

  // Colors
  const fill = resolveColorVar(
    index,
    variant.bind.fill,
    variant.values.fill,
    log,
  );
  if (fill) bindPaint(comp, 'fills', fill.v, parseColor(variant.values.fill));
  else
    comp.fills = parseColor(variant.values.fill)
      ? [
          {
            type: 'SOLID',
            color: parseColor(variant.values.fill),
            opacity: parseColor(variant.values.fill).a,
          },
        ]
      : [];

  if (variant.values.strokeWeight > 0) {
    const stroke = resolveColorVar(
      index,
      variant.bind.stroke,
      variant.values.stroke,
      log,
    );
    if (stroke)
      bindPaint(comp, 'strokes', stroke.v, parseColor(variant.values.stroke));
    comp.strokeAlign = 'INSIDE';
    const sw = resolveFloatVar(
      index,
      variant.bind.strokeWeight,
      variant.values.strokeWeight,
      'Layout',
    );
    comp.strokeWeight = variant.values.strokeWeight;
    if (sw) comp.setBoundVariable('strokeWeight', sw.v);
  } else {
    comp.strokes = [];
  }

  if (label) {
    const tf = resolveColorVar(
      index,
      variant.bind.textFill,
      variant.values.textFill,
      log,
    );
    if (tf)
      bindPaint(label, 'fills', tf.v, parseColor(variant.values.textFill));
  }

  const r = resolveFloatVar(
    index,
    variant.bind.radius,
    variant.values.radius,
    'Layout',
  );
  comp.cornerRadius = variant.values.radius;
  if (r) {
    for (const corner of [
      'topLeftRadius',
      'topRightRadius',
      'bottomLeftRadius',
      'bottomRightRadius',
    ]) {
      comp.setBoundVariable(corner, r.v);
    }
  }

  return {
    fill: fill ? fill.how : 'literal',
    stroke: variant.values.strokeWeight > 0 ? 'set' : 'none',
    radius: r ? r.how : 'literal',
  };
}

const weightToStyle = (w) => {
  if (w >= 800) return 'Extra Bold';
  if (w >= 700) return 'Bold';
  if (w >= 600) return 'Semi Bold';
  if (w >= 500) return 'Medium';
  return 'Regular';
};

async function syncComponent(spec, index, log) {
  let page = figma.root.children.find((p) => p.name === spec.name);
  if (!page) {
    page = figma.createPage();
    page.name = spec.name;
  }
  await figma.setCurrentPageAsync(page);

  const existingSet = page.findOne(
    (n) => n.type === 'COMPONENT_SET' && n.name === spec.name,
  );
  const stats = { created: 0, updated: 0, orphaned: [] };
  const byKey = new Map();

  if (existingSet) {
    for (const child of existingSet.children) byKey.set(child.name, child);
  }

  const comps = [];
  for (const variant of spec.variants) {
    let comp = byKey.get(variant.key);
    if (comp) {
      stats.updated += 1;
      byKey.delete(variant.key);
    } else {
      comp = figma.createComponent();
      stats.created += 1;
      if (!existingSet) page.appendChild(comp);
      else existingSet.appendChild(comp);
    }
    await applyVariant(comp, variant, spec, index, log);
    comps.push(comp);
  }

  // Keys present in Figma but no longer in the spec — report, never delete.
  stats.orphaned = [...byKey.keys()];

  let set = existingSet;
  if (!set) {
    set = figma.combineAsVariants(comps, page);
    set.name = spec.name;
  }
  set.description =
    `Generated by @rocket.chat/figma-sync from Fuselage's Storybook.\n` +
    `Story: ${spec.storyId}\nDo not hand-edit: the next sync overwrites geometry and fills.`;

  // Variants stack at 0,0 after combineAsVariants — lay out an explicit grid.
  const axisNames = Object.keys(spec.axes);
  const cols = spec.axes[axisNames[axisNames.length - 1]] || [''];
  const colW =
    Math.max(
      ...spec.variants.map((v) => v.layout.width || v.layout.minWidth || 240),
    ) + 40;
  const rowH =
    Math.max(...spec.variants.map((v) => v.layout.height || 40)) + 36;
  set.layoutMode = 'NONE';
  const rowKeys = [];
  for (const child of set.children) {
    const parts = child.name.split(', ');
    const colLabel = parts[parts.length - 1].split('=')[1];
    const rowLabel = parts.slice(0, -1).join(', ');
    if (!rowKeys.includes(rowLabel)) rowKeys.push(rowLabel);
    const col = Math.max(0, cols.indexOf(colLabel));
    const row = rowKeys.indexOf(rowLabel);
    child.x = 32 + col * colW;
    child.y = 32 + row * rowH;
  }
  set.resize(64 + cols.length * colW, 64 + rowKeys.length * rowH);
  set.x = 0;
  set.y = 0;

  return { ...stats, setId: set.id, variants: set.children.length };
}

figma.ui.onmessage = async (msg) => {
  if (msg.type !== 'sync') return;
  const log = [];
  try {
    let spec;
    if (msg.url) {
      const res = await fetch(msg.url);
      if (!res.ok) throw new Error(`fetch ${msg.url} -> HTTP ${res.status}`);
      spec = await res.json();
    } else if (msg.json) {
      spec = JSON.parse(msg.json);
    } else {
      throw new Error('provide a spec URL or paste the JSON');
    }

    const index = await buildVariableIndex();
    log.push(
      `variables available: ${index.byName.size} in ${index.collections.length} collections`,
    );
    if (index.byName.size === 0) {
      throw new Error(
        'this file has no variables — publish the token collections before syncing components',
      );
    }

    const results = [];
    for (const component of spec.components) {
      const r = await syncComponent(component, index, log);
      results.push(
        `${component.name}: ${r.created} created, ${r.updated} updated, ${r.variants} variants` +
          (r.orphaned.length
            ? `, ${r.orphaned.length} orphaned (left alone)`
            : ''),
      );
      if (r.orphaned.length)
        log.push(`  orphaned in ${component.name}: ${r.orphaned.join(' | ')}`);
    }

    figma.ui.postMessage({ type: 'done', results, log });
  } catch (e) {
    figma.ui.postMessage({ type: 'error', message: e.message, log });
  }
};
