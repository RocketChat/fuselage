import { css } from '@rocket.chat/css-in-js';

export type RcxPropTypes = {
  [propName in string]?: boolean | number | string;
};

export const isRcxProp = (propName: string): boolean =>
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
  _props: P,
  classNames: (string | ReturnType<typeof css>)[]
): void => {
  if (!value) {
    return;
  }

  const newClassName =
    value === true ? rcxClassName : `${rcxClassName}-${value}`;
  classNames.push(newClassName);
};
