import { createClassName } from '@rocket.chat/css-in-js';

import {
  extractStylingProps,
  extractAtomicStylingProps,
} from '../../src/components/Box/stylingProps';
import { buildAtomicClassName } from '../../src/hooks/buildAtomicClassName';

const POOLS: Record<string, unknown[]> = {
  p: ['x4', 'x8', 'x12', 'x16', 'x24'],
  m: ['x4', 'x8'],
  display: ['flex', 'block', 'inline-flex'],
  alignItems: ['center', 'flex-start', 'stretch'],
  justifyContent: ['center', 'space-between', 'flex-end'],
  fontScale: ['p1', 'p2', 'c1'],
  borderRadius: [2, 4, 8],
};

// Deterministic-ish corpus of N Boxes drawn from small value pools: many
// distinct COMBINATIONS, few distinct prop-value PAIRS.
const makeCorpus = (n: number) => {
  const keys = Object.keys(POOLS);
  const out: Record<string, unknown>[] = [];
  let seed = 1;
  const rnd = () => (seed = (seed * 1103515245 + 12345) & 0x7fffffff) / 0x7fffffff;
  for (let i = 0; i < n; i++) {
    const props: Record<string, unknown> = {};
    for (const k of keys) {
      if (rnd() < 0.7) props[k] = POOLS[k][Math.floor(rnd() * POOLS[k].length)];
    }
    out.push(props);
  }
  return out;
};

const timeit = (fn: () => void, iters: number) => {
  const t0 = performance.now();
  for (let i = 0; i < iters; i++) fn();
  return performance.now() - t0;
};

export const run = (n = 2000, iters = 40) => {
  const corpus = makeCorpus(n);

  const merged = () => {
    for (const p of corpus) {
      const [, styles] = extractStylingProps(p);
      if (styles) createClassName(styles());
    }
  };
  const atomic = () => {
    for (const p of corpus) {
      const [, styles] = extractAtomicStylingProps(p);
      for (const cssFn of styles) buildAtomicClassName(cssFn());
    }
  };
  const compiled = () => {
    // build-time: classNames precomputed; per render the runtime just carries
    // the string through (dropCompiledProps). Represented as a no-op pass.
    for (const p of corpus) void p;
  };

  // warmup
  merged();
  atomic();

  const mergedMs = timeit(merged, iters);
  const atomicMs = timeit(atomic, iters);
  const compiledMs = timeit(compiled, iters);

  // stylesheet growth: distinct rules each strategy inserts
  const mergedRules = new Set<string>();
  const atomicRules = new Set<string>();
  for (const p of corpus) {
    const [, s] = extractStylingProps(p);
    if (s) mergedRules.add(createClassName(s()));
    const [, arr] = extractAtomicStylingProps(p);
    for (const cssFn of arr) atomicRules.add(buildAtomicClassName(cssFn()));
  }

  return {
    boxes: n,
    iters,
    perRender_ms: {
      merged: +(mergedMs / iters).toFixed(2),
      atomicRuntime: +(atomicMs / iters).toFixed(2),
      buildTime: +(compiledMs / iters).toFixed(2),
    },
    stylesheetRules: {
      merged: mergedRules.size,
      atomic: atomicRules.size,
    },
  };
};
