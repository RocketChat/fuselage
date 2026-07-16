/**
 * Styling perf bench for Box. Renders many Boxes with LITERAL props (so the
 * build-time compiler can extract them on :6007) and measures, across a
 * detached root, the cost the styling path actually pays:
 *
 *   - mount ms   : first render + style resolution + insertRule (flushSync)
 *   - update ms  : re-render of the same tree (styling re-runs per Box)
 *   - rules      : rows in the shared rcx stylesheet (atomic plateaus)
 *   - classes/el : class tokens on one Box (1 for merged, N for atomic)
 *
 * Compare the same story in each mode:
 *   :6006 (no flag)                         → merged (per-combination)
 *   :6006 + localStorage fuselage-styling=atomic → atomic runtime
 *   :6007 (BOX_COMPILER=1)                  → build-time (props precompiled)
 *
 * Dev React is slower and double-renders under StrictMode; use it for RELATIVE
 * comparison, or `storybook build` for production-grade absolute numbers.
 */
import type { Meta } from '@storybook/react-webpack5';
import { useState } from 'react';
import { flushSync } from 'react-dom';
import { createRoot } from 'react-dom/client';

import Box from './Box';

export default {
  title: 'Layout/Box/Bench',
} satisfies Meta;

// A cell of varied, STATIC styling props (compilable at build time).
const Cell = () => (
  <Box
    display='flex'
    alignItems='center'
    justifyContent='center'
    padding='x8'
    margin='x4'
  >
    <Box marginInline='x4' fontScale='p2' color='default'>
      a
    </Box>
    <Box
      marginInline='x4'
      fontScale='c1'
      color='hint'
      backgroundColor='tint'
      borderRadius={4}
      paddingInline='x8'
    >
      b
    </Box>
    <Box marginInlineStart='x8' fontScale='micro' color='annotation'>
      c
    </Box>
  </Box>
);

const median = (xs: number[]) => {
  const s = [...xs].sort((a, b) => a - b);
  return s[Math.floor(s.length / 2)];
};

const ruleCount = () => {
  const el = document.getElementById('rcx-styles') as HTMLStyleElement | null;
  try {
    return el?.sheet?.cssRules.length ?? 0;
  } catch {
    return 0;
  }
};

const runOnce = (n: number) => {
  const host = document.createElement('div');
  document.body.appendChild(host);
  const root = createRoot(host);

  const t0 = performance.now();
  flushSync(() => {
    root.render(
      <>
        {Array.from({ length: n }, (_, i) => (
          <Cell key={i} />
        ))}
      </>,
    );
  });
  const t1 = performance.now();

  // update: force a re-render of the whole tree
  flushSync(() => {
    root.render(
      <div>
        {Array.from({ length: n }, (_, i) => (
          <Cell key={i} />
        ))}
      </div>,
    );
  });
  const t2 = performance.now();

  const sampleClasses =
    host.querySelector('[class]')?.getAttribute('class')?.split(' ').length ??
    0;

  root.unmount();
  host.remove();

  return { mount: t1 - t0, update: t2 - t1, sampleClasses };
};

export const Benchmark = () => {
  const [n, setN] = useState(500);
  const [iters, setIters] = useState(7);
  const [out, setOut] = useState<string>('');

  const run = () => {
    // warmup
    runOnce(Math.min(n, 100));
    const runs = Array.from({ length: iters }, () => runOnce(n));
    const rules = ruleCount();
    setOut(
      JSON.stringify(
        {
          boxes: n * 7, // 7 Box per Cell
          mountMs: +median(runs.map((r) => r.mount)).toFixed(1),
          updateMs: +median(runs.map((r) => r.update)).toFixed(1),
          rcxRules: rules,
          classesPerEl: runs[0].sampleClasses,
        },
        null,
        2,
      ),
    );
  };

  return (
    <div style={{ fontFamily: 'monospace', padding: 16 }}>
      <label>
        cells:{' '}
        <input
          type='number'
          value={n}
          onChange={(e) => setN(Number(e.target.value))}
        />
      </label>{' '}
      <label>
        iters:{' '}
        <input
          type='number'
          value={iters}
          onChange={(e) => setIters(Number(e.target.value))}
        />
      </label>{' '}
      <button type='button' onClick={run}>
        run
      </button>
      <pre>{out}</pre>
      <p>
        mode:{' '}
        {typeof localStorage !== 'undefined' &&
        localStorage.getItem('fuselage-styling') === 'atomic'
          ? 'atomic (runtime)'
          : 'merged / build-time (check port)'}
      </p>
    </div>
  );
};
