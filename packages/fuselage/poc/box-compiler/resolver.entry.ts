import { escapeName, transpile } from '@rocket.chat/css-in-js';

import {
  extractAtomicStylingProps,
  propDefs,
} from '../../src/components/Box/stylingProps';
import { buildAtomicClassName } from '../../src/hooks/buildAtomicClassName';

export const styleProps = Object.keys(propDefs);

export const resolve = (props: Record<string, unknown>) => {
  const [, styles] = extractAtomicStylingProps(props);
  return styles.map((cssFn) => {
    const content = cssFn();
    const className = buildAtomicClassName(content);
    return { className, css: transpile(`.${escapeName(className)}`, content) };
  });
};
