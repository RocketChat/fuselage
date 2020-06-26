import { css } from '@rocket.chat/css-in-js';

import { createPropType } from '../../helpers/createPropType';
import { memoize } from '../../helpers/memoize';

export const getMarginValue = memoize((propValue) => {
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

export const getPaddingValue = memoize((propValue) => {
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
      && css`margin-block: ${ getMarginValue(marginBlock) || marginBlock } !important;`,
    marginBlockStart !== undefined
      && css`margin-block-start: ${ getMarginValue(marginBlockStart) || marginBlockStart } !important;`,
    marginBlockEnd !== undefined
      && css`margin-block-end: ${ getMarginValue(marginBlockEnd) || marginBlockEnd } !important;`,
    marginInline !== undefined
      && css`margin-inline: ${ getMarginValue(marginInline) || marginInline } !important;`,
    marginInlineStart !== undefined
      && css`margin-inline-start: ${ getMarginValue(marginInlineStart) || marginInlineStart } !important;`,
    marginInlineEnd !== undefined
      && css`margin-inline-end: ${ getMarginValue(marginInlineEnd) || marginInlineEnd } !important;`,
    padding !== undefined
      && css`padding: ${ getPaddingValue(padding) || padding } !important;`,
    paddingBlock !== undefined
      && css`padding-block: ${ getPaddingValue(paddingBlock) || paddingBlock } !important;`,
    paddingBlockStart !== undefined
      && css`padding-block-start: ${ getPaddingValue(paddingBlockStart) || paddingBlockStart } !important;`,
    paddingBlockEnd !== undefined
      && css`padding-block-end: ${ getPaddingValue(paddingBlockEnd) || paddingBlockEnd } !important;`,
    paddingInline !== undefined
      && css`padding-inline: ${ getPaddingValue(paddingInline) || paddingInline } !important;`,
    paddingInlineStart !== undefined
      && css`padding-inline-start: ${ getPaddingValue(paddingInlineStart) || paddingInlineStart } !important;`,
    paddingInlineEnd !== undefined
      && css`padding-inline-end: ${ getPaddingValue(paddingInlineEnd) || paddingInlineEnd } !important;`,
  ],
  ...props,
});
