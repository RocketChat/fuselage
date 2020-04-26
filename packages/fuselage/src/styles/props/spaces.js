import { css } from '@rocket.chat/css-in-js';
import mem from 'mem';

import { createPropType } from './createPropType';
import { createLogicalProperties } from './createLogicalProperties';

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

const [
  marginBlockProperty,
  marginBlockStartProperty,
  marginBlockEndProperty,
  marginInlineProperty,
  marginInlineStartProperty,
  marginInlineEndProperty,
] = createLogicalProperties({
  blockPropertyName: 'margin-block',
  blockStartPropertyName: 'margin-block-start',
  blockStartFallbackPropertyName: 'margin-top',
  blockEndPropertyName: 'margin-block-end',
  blockEndFallbackPropertyName: 'margin-bottom',
  inlinePropertyName: 'margin-inline',
  inlineStartPropertyName: 'margin-inline-start',
  inlineStartFallbackPropertyName: 'margin-left',
  inlineEndPropertyName: 'margin-inline-end',
  inlineEndFallbackPropertyName: 'margin-right',
});

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

const [
  paddingBlockProperty,
  paddingBlockStartProperty,
  paddingBlockEndProperty,
  paddingInlineProperty,
  paddingInlineStartProperty,
  paddingInlineEndProperty,
] = createLogicalProperties({
  blockPropertyName: 'padding-block',
  blockStartPropertyName: 'padding-block-start',
  blockStartFallbackPropertyName: 'padding-top',
  blockEndPropertyName: 'padding-block-end',
  blockEndFallbackPropertyName: 'padding-bottom',
  inlinePropertyName: 'padding-inline',
  inlineStartPropertyName: 'padding-inline-start',
  inlineStartFallbackPropertyName: 'padding-left',
  inlineEndPropertyName: 'padding-inline-end',
  inlineEndFallbackPropertyName: 'padding-right',
});

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
