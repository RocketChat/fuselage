import { css } from '@rocket.chat/css-in-js';

import { getMarginValue } from '../../propTypes/margins';
import { getPaddingValue } from '../../propTypes/paddings';
import { useCss } from './useCss';

const marginBlock = (() => {
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

const marginBlockStart = (() => {
  if (window.CSS && window.CSS.supports('margin-block-start: auto')) {
    return (value) => css`margin-block-start: ${ value } !important;`;
  }

  return (value) => css`margin-top: ${ value } !important;`;
})();

const marginBlockEnd = (() => {
  if (window.CSS && window.CSS.supports('margin-block-end: auto')) {
    return (value) => css`margin-block-end: ${ value } !important;`;
  }

  return (value) => css`margin-bottom: ${ value } !important;`;
})();

const marginInline = (() => {
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

const marginInlineStart = (() => {
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

const marginInlineEnd = (() => {
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

const paddingBlock = (() => {
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

const paddingBlockStart = (() => {
  if (window.CSS && window.CSS.supports('padding-block-start: auto')) {
    return (value) => css`padding-block-start: ${ value } !important;`;
  }

  return (value) => css`padding-top: ${ value } !important;`;
})();

const paddingBlockEnd = (() => {
  if (window.CSS && window.CSS.supports('padding-block-end: auto')) {
    return (value) => css`padding-block-end: ${ value } !important;`;
  }

  return (value) => css`padding-bottom: ${ value } !important;`;
})();

const paddingInline = (() => {
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

const paddingInlineStart = (() => {
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

const paddingInlineEnd = (() => {
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
  mi,
  mis,
  mie,
  mb,
  mbs,
  mbe,
  p,
  pi,
  pis,
  pie,
  pb,
  pbs,
  pbe,
  ...props
}) => {
  const spacesClassName = useCss([
    m !== undefined && css`margin: ${ getMarginValue(m) } !important;`,
    mb !== undefined && marginBlock(getMarginValue(mb)),
    mbs !== undefined && marginBlockStart(getMarginValue(mbs)),
    mbe !== undefined && marginBlockEnd(getMarginValue(mbe)),
    mi !== undefined && marginInline(getMarginValue(mi)),
    mis !== undefined && marginInlineStart(getMarginValue(mis)),
    mie !== undefined && marginInlineEnd(getMarginValue(mie)),
    p !== undefined && css`padding: ${ getPaddingValue(p) } !important;`,
    pb !== undefined && paddingBlock(getPaddingValue(pb)),
    pbs !== undefined && paddingBlockStart(getPaddingValue(pbs)),
    pbe !== undefined && paddingBlockEnd(getPaddingValue(pbe)),
    pi !== undefined && paddingInline(getPaddingValue(pi)),
    pis !== undefined && paddingInlineStart(getPaddingValue(pis)),
    pie !== undefined && paddingInlineEnd(getPaddingValue(pie)),
  ], [
    m, mb, mbs, mbe, mi, mis, mie,
    p, pi, pis, pie, pb, pbs, pbe,
  ]);

  return {
    className: [
      ...className,
      spacesClassName,
    ],
    ...props,
  };
};
