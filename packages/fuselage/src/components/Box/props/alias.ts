/* eslint-disable prettier/prettier */
import { css } from '@rocket.chat/css-in-js';
import { AllHTMLAttributes } from 'react';

import { consumeCssPropertyProp, CssPropertyPropTypes } from './css';

const preAliases = {
  bg: 'backgroundColor',
  w: 'width',
  h: 'height',
  m: 'margin',
  mb: 'marginBlock',
  mbs: 'marginBlockStart',
  mbe: 'marginBlockEnd',
  mi: 'marginInline',
  mis: 'marginInlineStart',
  mie: 'marginInlineEnd',
  p: 'padding',
  pb: 'paddingBlock',
  pbs: 'paddingBlockStart',
  pbe: 'paddingBlockEnd',
  pi: 'paddingInline',
  pis: 'paddingInlineStart',
  pie: 'paddingInlineEnd',
} as const;

const postAliases = {
  htmlSize: 'size',
} as const;

export type PreAliasTypes = {
  [propName in keyof typeof preAliases]?: CssPropertyPropTypes[typeof preAliases[propName]];
};

export type PostAliasTypes = {
  -readonly [propName in keyof typeof postAliases]?: AllHTMLAttributes<HTMLOrSVGElement>[typeof postAliases[propName]];
};

export const isPreAlias = (propName: string): propName is keyof PreAliasTypes =>
  typeof preAliases[propName] !== 'undefined';

export const consumePreAlias = <
  P extends {
    className?:
      | string
      | ReturnType<typeof css>
      | (string | ReturnType<typeof css>)[];
  }
>(
  alias: keyof PreAliasTypes,
  value: PreAliasTypes[keyof PreAliasTypes],
  props: P
): void => {
  const effectivePropName = preAliases[alias];

  if (typeof props[effectivePropName] !== 'undefined') {
    return;
  }

  consumeCssPropertyProp(effectivePropName, value, props);
};

export const isPostAlias = (
  propName: string
): propName is keyof PostAliasTypes =>
  typeof postAliases[propName] !== 'undefined';

export const consumePostAlias = <
  P extends {
    className?:
      | string
      | ReturnType<typeof css>
      | (string | ReturnType<typeof css>)[];
  }
>(
  alias: keyof PostAliasTypes,
  value: PostAliasTypes[keyof PostAliasTypes],
  props: P
): void => {
  const effectivePropName = postAliases[alias];

  if (typeof props[effectivePropName] !== 'undefined') {
    return;
  }

  props[effectivePropName] = value;
};
