import { css } from '@rocket.chat/css-in-js';
import React from 'react';

import { useCss } from '../useCss';
import { PropsProvider } from '../PropsContext';
import { marginPropType, getMarginValue } from '../../../propTypes/margins';

const isMarginBlockSupported = window.CSS && window.CSS.supports('margin-block: auto');
const isMarginBlockStartSupported = window.CSS && window.CSS.supports('margin-block-start: auto');
const isMarginBlockEndSupported = window.CSS && window.CSS.supports('margin-block-end: auto');
const isMarginInlineSupported = window.CSS && window.CSS.supports('margin-inline: auto');
const isMarginInlineStartSupported = window.CSS && window.CSS.supports('margin-inline-start: auto');
const isMarginInlineEndSupported = window.CSS && window.CSS.supports('margin-inline-end: auto');

const marginBlock = (() => {
  if (isMarginBlockSupported) {
    return (value) => css`margin-block: ${ value } !important;`;
  }

  if (isMarginBlockStartSupported && isMarginBlockEndSupported) {
    return (value) => css`
      margin-block-start: ${ value } !important;
      margin-block-end: ${ value } !important;
    `;
  }

  return (value) => css`
    margin-top: ${ value } !important;
    margin-bottom: ${ value } !important;
  `;
})();

const marginBlockStart = (() => {
  if (isMarginBlockStartSupported) {
    return (value) => css`margin-block-start: ${ value } !important;`;
  }

  return (value) => css`margin-top: ${ value } !important;`;
})();

const marginBlockEnd = (() => {
  if (isMarginBlockEndSupported) {
    return (value) => css`margin-block-end: ${ value } !important;`;
  }

  return (value) => css`margin-bottom: ${ value } !important;`;
})();

const marginInline = (() => {
  if (isMarginInlineSupported) {
    return (value) => css`margin-inline: ${ value } !important;`;
  }

  if (isMarginInlineStartSupported && isMarginInlineEndSupported) {
    return (value) => css`
      margin-inline-start: ${ value } !important;
      margin-inline-end: ${ value } !important;
    `;
  }

  return (value) => css`
    margin-left: ${ value } !important;
    margin-right: ${ value } !important;
  `;
})();

const marginInlineStart = (() => {
  if (isMarginInlineStartSupported) {
    return (value) => css`margin-inline-start: ${ value } !important;`;
  }

  return (value) => css`
    [dir=ltr] & {
      margin-left: ${ value } !important;
    }

    [dir=rtl] & {
      margin-right: ${ value } !important;
    }
  `;
})();

const marginInlineEnd = (() => {
  if (isMarginInlineEndSupported) {
    return (value) => css`margin-inline-end: ${ value } !important;`;
  }

  return (value) => css`
    [dir=ltr] & {
      margin-right: ${ value } !important;
    }

    [dir=rtl] & {
      margin-left: ${ value } !important;
    }
  `;
})();

export function Margins({
  children,
  all,
  block,
  blockStart,
  blockEnd,
  inline,
  inlineStart,
  inlineEnd,
}) {
  const marginsClassName = useCss([
    all && css`margin: ${ getMarginValue(all) } !important;`,
    block && marginBlock(getMarginValue(block)),
    blockStart && marginBlockStart(getMarginValue(blockStart)),
    blockEnd && marginBlockEnd(getMarginValue(blockEnd)),
    inline && marginInline(getMarginValue(inline)),
    inlineStart && marginInlineStart(getMarginValue(inlineStart)),
    inlineEnd && marginInlineEnd(getMarginValue(inlineEnd)),
  ], [
    all,
    block,
    blockStart,
    blockEnd,
    inline,
    inlineStart,
    inlineEnd,
  ]);

  return <PropsProvider children={children} fn={({ className, ...props }) => ({
    className: [className, marginsClassName].join(' '),
    ...props,
  })} memoized />;
}

Margins.propTypes = {
  all: marginPropType,
  block: marginPropType,
  blockStart: marginPropType,
  blockEnd: marginPropType,
  inline: marginPropType,
  inlineStart: marginPropType,
  inlineEnd: marginPropType,
};
