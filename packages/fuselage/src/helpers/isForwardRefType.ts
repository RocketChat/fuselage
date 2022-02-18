import type { ForwardRefExoticComponent } from 'react';

export const isForwardRefType = <P = any>(
  type: any
): type is ForwardRefExoticComponent<P> =>
  type.$$typeof === Symbol.for('react.forward_ref');
