import { css } from '@rocket.chat/css-in-js';
import mem from 'mem';

import { createPropType } from './createPropType';
import { cssSupports } from './cssSupports';

export const getMarginValue = mem((propValue) => {
  if (propValue === undefined || propValue === null) {
    return;
  }

  if (typeof propValue === 'number') {
    return `${ propValue }px`;
  }

  if (typeof propValue !== 'string') {
    return;
  }

  if (propValue === 'none') {
    return '0px';
  }

  const matches = /^(neg-)?x(\d+)$/.exec(String(propValue));

  if (matches) {
    const value = (matches[1] === 'neg-' ? -1 : 1) * parseInt(matches[2], 10);

    if (Number.isInteger(value) && (Math.abs(value) % 4 === 0 || Math.abs(value) === 1 || Math.abs(value) === 2)) {
      return `${ value / 16 }rem`;
    }
  }
});

export const marginPropType = createPropType(getMarginValue);

export const getPaddingValue = mem((propValue) => {
  if (propValue === undefined || propValue === null) {
    return;
  }

  if (typeof propValue === 'number') {
    return `${ propValue }px`;
  }

  if (typeof propValue !== 'string') {
    return;
  }

  if (propValue === 'none') {
    return '0px';
  }

  const matches = /^x(\d+)$/.exec(String(propValue));

  if (matches) {
    const value = parseInt(matches[1], 10);

    if (Number.isInteger(value) && (value % 4 === 0 || value === 1 || value === 2)) {
      return `${ value / 16 }rem`;
    }
  }
});

export const paddingPropType = createPropType(getPaddingValue);

const marginBlockProperty = (marginBlock) => {
  if (cssSupports('margin-block: auto')) {
    return css`margin-block: ${ marginBlock } !important;`;
  }

  if (cssSupports('margin-block-start: auto') && cssSupports('margin-block-end: auto')) {
    return css`
      margin-block-start: ${ marginBlock } !important;
      margin-block-end: ${ marginBlock } !important;
    `;
  }

  return css`
    margin-top: ${ marginBlock } !important;
    margin-bottom: ${ marginBlock } !important;
  `;
};

const marginBlockStartProperty = (marginBlockStart) => {
  if (cssSupports('margin-block-start: auto')) {
    return css`margin-block-start: ${ marginBlockStart } !important;`;
  }

  return css`margin-top: ${ marginBlockStart } !important;`;
};

const marginBlockEndProperty = (marginBlockEnd) => {
  if (cssSupports('margin-block-end: auto')) {
    return css`margin-block-end: ${ marginBlockEnd } !important;`;
  }

  return css`margin-bottom: ${ marginBlockEnd } !important;`;
};

const marginInlineProperty = (marginInline) => {
  if (cssSupports('margin-inline: auto')) {
    return css`margin-inline: ${ marginInline } !important;`;
  }

  if (cssSupports('margin-inline-start: auto') && cssSupports('margin-inline-end: auto')) {
    return css`
      margin-inline-start: ${ marginInline } !important;
      margin-inline-end: ${ marginInline } !important;
    `;
  }

  return css`
    margin-left: ${ marginInline } !important;
    margin-right: ${ marginInline } !important;
  `;
};

const marginInlineStartProperty = (marginInlineStart) => {
  if (cssSupports('margin-inline-start: auto')) {
    return css`margin-inline-start: ${ marginInlineStart } !important;`;
  }

  return css`
    *:not([dir=rtl]) & {
      margin-left: ${ marginInlineStart } !important;
    }

    [dir=rtl] & {
      margin-right: ${ marginInlineStart } !important;
    }
  `;
};

const marginInlineEndProperty = (marginInlineEnd) => {
  if (cssSupports('margin-inline-end: auto')) {
    return css`margin-inline-end: ${ marginInlineEnd } !important;`;
  }

  return css`
    *:not([dir=rtl]) & {
      margin-right: ${ marginInlineEnd } !important;
    }

    [dir=rtl] & {
      margin-left: ${ marginInlineEnd } !important;
    }
  `;
};

const paddingBlockProperty = (paddingBlock) => {
  if (cssSupports('padding-block: auto')) {
    return css`padding-block: ${ paddingBlock } !important;`;
  }

  if (cssSupports('padding-block-start: auto') && cssSupports('padding-block-end: auto')) {
    return css`
      padding-block-start: ${ paddingBlock } !important;
      padding-block-end: ${ paddingBlock } !important;
    `;
  }

  return css`
    padding-top: ${ paddingBlock } !important;
    padding-bottom: ${ paddingBlock } !important;
  `;
};

const paddingBlockStartProperty = (paddingBlockStart) => {
  if (cssSupports('padding-block-start: auto')) {
    return css`padding-block-start: ${ paddingBlockStart } !important;`;
  }

  return css`padding-top: ${ paddingBlockStart } !important;`;
};

const paddingBlockEndProperty = (paddingBlockEnd) => {
  if (cssSupports('padding-block-end: auto')) {
    return css`padding-block-end: ${ paddingBlockEnd } !important;`;
  }

  return css`padding-bottom: ${ paddingBlockEnd } !important;`;
};

const paddingInlineProperty = (paddingInline) => {
  if (cssSupports('padding-inline: auto')) {
    return css`padding-inline: ${ paddingInline } !important;`;
  }

  if (cssSupports('padding-inline-start: auto') && cssSupports('padding-inline-end: auto')) {
    return css`
      padding-inline-start: ${ paddingInline } !important;
      padding-inline-end: ${ paddingInline } !important;
    `;
  }

  return css`
    padding-left: ${ paddingInline } !important;
    padding-right: ${ paddingInline } !important;
  `;
};

const paddingInlineStartProperty = (paddingInlineStart) => {
  if (cssSupports('padding-inline-start: auto')) {
    return css`padding-inline-start: ${ paddingInlineStart } !important;`;
  }

  return css`
    *:not([dir=rtl]) & {
      padding-left: ${ paddingInlineStart } !important;
    }

    [dir=rtl] & {
      padding-right: ${ paddingInlineStart } !important;
    }
  `;
};

const paddingInlineEndProperty = (paddingInlineEnd) => {
  if (cssSupports('padding-inline-end: auto')) {
    return css`padding-inline-end: ${ paddingInlineEnd } !important;`;
  }

  return css`
    *:not([dir=rtl]) & {
      padding-right: ${ paddingInlineEnd } !important;
    }

    [dir=rtl] & {
      padding-left: ${ paddingInlineEnd } !important;
    }
  `;
};

export const mapSpaceProps = ({
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
}) => ({
  className: [
    ...className,
    margin !== undefined
      && css`margin: ${ getMarginValue(margin) || margin } !important;`,
    marginBlock !== undefined
      && marginBlockProperty(getMarginValue(marginBlock) || marginBlock),
    marginBlockStart !== undefined
      && marginBlockStartProperty(getMarginValue(marginBlockStart) || marginBlockStart),
    marginBlockEnd !== undefined
      && marginBlockEndProperty(getMarginValue(marginBlockEnd) || marginBlockEnd),
    marginInline !== undefined
      && marginInlineProperty(getMarginValue(marginInline) || marginInline),
    marginInlineStart !== undefined
      && marginInlineStartProperty(getMarginValue(marginInlineStart) || marginInlineStart),
    marginInlineEnd !== undefined
      && marginInlineEndProperty(getMarginValue(marginInlineEnd) || marginInlineEnd),
    padding !== undefined
      && css`padding: ${ getPaddingValue(padding) || padding } !important;`,
    paddingBlock !== undefined
      && paddingBlockProperty(getPaddingValue(paddingBlock) || paddingBlock),
    paddingBlockStart !== undefined
      && paddingBlockStartProperty(getPaddingValue(paddingBlockStart) || paddingBlockStart),
    paddingBlockEnd !== undefined
      && paddingBlockEndProperty(getPaddingValue(paddingBlockEnd) || paddingBlockEnd),
    paddingInline !== undefined
      && paddingInlineProperty(getPaddingValue(paddingInline) || paddingInline),
    paddingInlineStart !== undefined
      && paddingInlineStartProperty(getPaddingValue(paddingInlineStart) || paddingInlineStart),
    paddingInlineEnd !== undefined
      && paddingInlineEndProperty(getPaddingValue(paddingInlineEnd) || paddingInlineEnd),
  ],
  ...props,
});
