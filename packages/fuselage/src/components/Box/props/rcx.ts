import { css } from '@rocket.chat/css-in-js';

import { prependClassName } from '../../../helpers/prependClassName';

export type RcxPropTypes = {
  [propName in string]?: boolean | number | string;
};

export const isRcxProp = (propName: string): propName is keyof RcxPropTypes =>
  propName.slice(0, 4) === 'rcx-';

export const consumeRcxProp = <
  P extends {
    className?:
      | string
      | ReturnType<typeof css>
      | (string | ReturnType<typeof css>)[];
  }
>(
  rcxClassName: keyof RcxPropTypes,
  value: RcxPropTypes[keyof RcxPropTypes],
  targetProps: P
): void => {
  if (!value) {
    return;
  }

  const newClassName =
    value === true ? rcxClassName : `${rcxClassName}-${value}`;
  targetProps.className = prependClassName(targetProps.className, newClassName);
};
