/**
 * PoC: build-time atomic extraction for <Box>.
 *
 * Proves a Babel plugin can turn static styling props into a plain className
 * plus an out-of-band CSS sheet, reusing Fuselage's real runtime resolver so
 * the emitted classes/rules are identical to the runtime atomic path.
 */
import { transformSync } from '@babel/core';
import { escapeName, transpile } from '@rocket.chat/css-in-js';

import {
  extractAtomicStylingProps,
  propDefs,
} from '../components/Box/stylingProps';
import { buildAtomicClassName } from '../hooks/useAtomicStyle';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const plugin = require('../../poc/box-compiler/plugin.cjs');

const resolve = (props: Record<string, unknown>) => {
  const [, styles] = extractAtomicStylingProps(props);
  return styles.map((cssFn) => {
    const content = cssFn();
    const className = buildAtomicClassName(content);
    return { className, css: transpile(`.${escapeName(className)}`, content) };
  });
};

const compile = (code: string) => {
  const sheet = new Map<string, string>();
  const out = transformSync(code, {
    configFile: false,
    babelrc: false,
    plugins: [
      '@babel/plugin-syntax-jsx',
      [plugin, { styleProps: Object.keys(propDefs), resolve, sheet }],
    ],
  });
  return { code: out?.code ?? '', css: [...sheet.values()].join('\n') };
};

describe('PoC build-time Box compiler', () => {
  it('extracts static styling props into a className and a CSS sheet', () => {
    const { code, css } = compile('<Box p="x8" display="flex" />;');

    expect(code).toMatch(/className="rcx-padding-\S+ rcx-display-flex-\S+"/);
    expect(code).not.toMatch(/\bp=/);
    expect(code).not.toMatch(/display=/);

    expect(css).toContain('padding:0.5rem!important');
    expect(css).toContain('display:flex!important');
  });

  it('leaves dynamic props to the runtime, extracts the static ones', () => {
    const { code } = compile('<Box p={spacing} display="flex" />;');

    expect(code).toContain('p={spacing}'); // dynamic → untouched
    expect(code).toMatch(/className="rcx-display-flex-\S+"/);
  });

  it('merges into an existing static className', () => {
    const { code } = compile('<Box p="x8" className="foo" />;');
    expect(code).toMatch(/className="rcx-padding-\S+ foo"/);
  });

  it('dedupes shared declarations across many Boxes into one rule', () => {
    const { css } = compile(
      '<><Box display="flex" p="x8" /><Box display="flex" p="x16" /></>;',
    );
    // display:flex emitted once; two paddings → 3 rules total
    expect(css.match(/display:flex!important/g)).toHaveLength(1);
    expect(css.match(/\{/g)).toHaveLength(3);
  });
});
