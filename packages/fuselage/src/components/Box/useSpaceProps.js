import { css } from '@rocket.chat/css-in-js';

import { getMarginValue } from '../../propTypes/margins';
import { getPaddingValue } from '../../propTypes/paddings';
import { useCss } from './useCss';

const getMarginBlock = (() => {
  if (window.CSS && window.CSS.supports('margin-block: auto')) {
    return (value) => css`margin-block: ${ value } !important;`;
  }

  if (window.CSS && window.CSS.supports('margin-block-start: auto') && window.CSS.supports('margin-block-end: auto')) {
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

const getMarginBlockStart = (() => {
  if (window.CSS && window.CSS.supports('margin-block-start: auto')) {
    return (value) => css`margin-block-start: ${ value } !important;`;
  }

  return (value) => css`margin-top: ${ value } !important;`;
})();

const getMarginBlockEnd = (() => {
  if (window.CSS && window.CSS.supports('margin-block-end: auto')) {
    return (value) => css`margin-block-end: ${ value } !important;`;
  }

  return (value) => css`margin-bottom: ${ value } !important;`;
})();

const getMarginInline = (() => {
  if (window.CSS && window.CSS.supports('margin-inline: auto')) {
    return (value) => css`margin-inline: ${ value } !important;`;
  }

  if (window.CSS && window.CSS.supports('margin-inline-start: auto') && window.CSS.supports('margin-inline-end: auto')) {
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

const getMarginInlineStart = (() => {
  if (window.CSS && window.CSS.supports('margin-inline-start: auto')) {
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

const getMarginInlineEnd = (() => {
  if (window.CSS && window.CSS.supports('margin-inline-end: auto')) {
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

const getPaddingBlock = (() => {
  if (window.CSS && window.CSS.supports('padding-block: auto')) {
    return (value) => css`padding-block: ${ value } !important;`;
  }

  if (window.CSS && window.CSS.supports('padding-block-start: auto') && window.CSS.supports('padding-block-end: auto')) {
    return (value) => css`
      padding-block-start: ${ value } !important;
      padding-block-end: ${ value } !important;
    `;
  }

  return (value) => css`
    padding-top: ${ value } !important;
    padding-bottom: ${ value } !important;
  `;
})();

const getPaddingBlockStart = (() => {
  if (window.CSS && window.CSS.supports('padding-block-start: auto')) {
    return (value) => css`padding-block-start: ${ value } !important;`;
  }

  return (value) => css`padding-top: ${ value } !important;`;
})();

const getPaddingBlockEnd = (() => {
  if (window.CSS && window.CSS.supports('padding-block-end: auto')) {
    return (value) => css`padding-block-end: ${ value } !important;`;
  }

  return (value) => css`padding-bottom: ${ value } !important;`;
})();

const getPaddingInline = (() => {
  if (window.CSS && window.CSS.supports('padding-inline: auto')) {
    return (value) => css`padding-inline: ${ value } !important;`;
  }

  if (window.CSS && window.CSS.supports('padding-inline-start: auto') && window.CSS.supports('padding-inline-end: auto')) {
    return (value) => css`
      padding-inline-start: ${ value } !important;
      padding-inline-end: ${ value } !important;
    `;
  }

  return (value) => css`
    padding-left: ${ value } !important;
    padding-right: ${ value } !important;
  `;
})();

const getPaddingInlineStart = (() => {
  if (window.CSS && window.CSS.supports('padding-inline-start: auto')) {
    return (value) => css`padding-inline-start: ${ value } !important;`;
  }

  return (value) => css`
    [dir=ltr] & {
      padding-left: ${ value } !important;
    }

    [dir=rtl] & {
      padding-right: ${ value } !important;
    }
  `;
})();

const getPaddingInlineEnd = (() => {
  if (window.CSS && window.CSS.supports('padding-inline-end: auto')) {
    return (value) => css`padding-inline-end: ${ value } !important;`;
  }

  return (value) => css`
    [dir=ltr] & {
      padding-right: ${ value } !important;
    }

    [dir=rtl] & {
      padding-left: ${ value } !important;
    }
  `;
})();

export const useSpaceProps = ({
  className,
  m,
  margin = m,
  mi,
  marginInline = mi,
  mis,
  marginInlineStart = mis,
  mie,
  marginInlineEnd = mie,
  mb,
  marginBlock = mb,
  mbs,
  marginBlockStart = mbs,
  mbe,
  marginBlockEnd = mbe,
  p,
  padding = p,
  pi,
  paddingInline = pi,
  pis,
  paddingInlineStart = pis,
  pie,
  paddingInlineEnd = pie,
  pb,
  paddingBlock = pb,
  pbs,
  paddingBlockStart = pbs,
  pbe,
  paddingBlockEnd = pbe,
  ...props
}) => {
  const spacesClassName = useCss([
    margin !== undefined && css`margin: ${ getMarginValue(margin) } !important;`,
    marginBlock !== undefined && getMarginBlock(getMarginValue(marginBlock)),
    marginBlockStart !== undefined && getMarginBlockStart(getMarginValue(marginBlockStart)),
    marginBlockEnd !== undefined && getMarginBlockEnd(getMarginValue(marginBlockEnd)),
    marginInline !== undefined && getMarginInline(getMarginValue(marginInline)),
    marginInlineStart !== undefined && getMarginInlineStart(getMarginValue(marginInlineStart)),
    marginInlineEnd !== undefined && getMarginInlineEnd(getMarginValue(marginInlineEnd)),
    padding !== undefined && css`padding: ${ getPaddingValue(padding) } !important;`,
    paddingBlock !== undefined && getPaddingBlock(getPaddingValue(paddingBlock)),
    paddingBlockStart !== undefined && getPaddingBlockStart(getPaddingValue(paddingBlockStart)),
    paddingBlockEnd !== undefined && getPaddingBlockEnd(getPaddingValue(paddingBlockEnd)),
    paddingInline !== undefined && getPaddingInline(getPaddingValue(paddingInline)),
    paddingInlineStart !== undefined && getPaddingInlineStart(getPaddingValue(paddingInlineStart)),
    paddingInlineEnd !== undefined && getPaddingInlineEnd(getPaddingValue(paddingInlineEnd)),
  ], [
    margin,
    marginBlock,
    marginBlockStart,
    marginBlockEnd,
    marginInline,
    marginInlineStart,
    marginInlineEnd,
    padding,
    paddingInline,
    paddingInlineStart,
    paddingInlineEnd,
    paddingBlock,
    paddingBlockStart,
    paddingBlockEnd,
  ]);

  return {
    className: [
      ...className,
      spacesClassName,
    ],
    ...props,
  };
};
