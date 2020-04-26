import { css } from '@rocket.chat/css-in-js';
import mem from 'mem';

import { createLogicalProperties, cssSupports } from '../helpers';
import { getColorValue } from './colors';

export const [
  borderBlockProperty,
  borderBlockStartProperty,
  borderBlockEndProperty,
  borderInlineProperty,
  borderInlineStartProperty,
  borderInlineEndProperty,
] = createLogicalProperties({
  blockPropertyName: 'border-block',
  blockStartPropertyName: 'border-block-start',
  blockStartFallbackPropertyName: 'border-top',
  blockEndPropertyName: 'border-block-end',
  blockEndFallbackPropertyName: 'border-bottom',
  inlinePropertyName: 'border-inline',
  inlineStartPropertyName: 'border-inline-start',
  inlineStartFallbackPropertyName: 'border-left',
  inlineEndPropertyName: 'border-inline-end',
  inlineEndFallbackPropertyName: 'border-right',
});

export const [
  borderBlockWidthProperty,
  borderBlockStartWidthProperty,
  borderBlockEndWidthProperty,
  borderInlineWidthProperty,
  borderInlineStartWidthProperty,
  borderInlineEndWidthProperty,
] = createLogicalProperties({
  blockPropertyName: 'border-block-width',
  blockStartPropertyName: 'border-block-start-width',
  blockStartFallbackPropertyName: 'border-top-width',
  blockEndPropertyName: 'border-block-end-width',
  blockEndFallbackPropertyName: 'border-bottom-width',
  inlinePropertyName: 'border-inline-width',
  inlineStartPropertyName: 'border-inline-start-width',
  inlineStartFallbackPropertyName: 'border-left-width',
  inlineEndPropertyName: 'border-inline-end-width',
  inlineEndFallbackPropertyName: 'border-right-width',
});

export const [
  borderBlockStyleProperty,
  borderBlockStartStyleProperty,
  borderBlockEndStyleProperty,
  borderInlineStyleProperty,
  borderInlineStartStyleProperty,
  borderInlineEndStyleProperty,
] = createLogicalProperties({
  blockPropertyName: 'border-block-style',
  blockStartPropertyName: 'border-block-start-style',
  blockStartFallbackPropertyName: 'border-top-style',
  blockEndPropertyName: 'border-block-end-style',
  blockEndFallbackPropertyName: 'border-bottom-style',
  inlinePropertyName: 'border-inline-style',
  inlineStartPropertyName: 'border-inline-start-style',
  inlineStartFallbackPropertyName: 'border-left-style',
  inlineEndPropertyName: 'border-inline-end-style',
  inlineEndFallbackPropertyName: 'border-right-style',
});

export const [
  borderBlockColorProperty,
  borderBlockStartColorProperty,
  borderBlockEndColorProperty,
  borderInlineColorProperty,
  borderInlineStartColorProperty,
  borderInlineEndColorProperty,
] = createLogicalProperties({
  blockPropertyName: 'border-block-color',
  blockStartPropertyName: 'border-block-start-color',
  blockStartFallbackPropertyName: 'border-top-color',
  blockEndPropertyName: 'border-block-end-color',
  blockEndFallbackPropertyName: 'border-bottom-color',
  inlinePropertyName: 'border-inline-color',
  inlineStartPropertyName: 'border-inline-start-color',
  inlineStartFallbackPropertyName: 'border-left-color',
  inlineEndPropertyName: 'border-inline-end-color',
  inlineEndFallbackPropertyName: 'border-right-color',
});

export const getBorderWidthValue = mem((propValue) => {
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

  const matches = /^x(\d+)$/.exec(propValue);

  if (matches) {
    const value = parseInt(matches[1], 10);

    if (Number.isInteger(value) && (value === 1 || value === 2 || value === 4)) {
      return `${ value / 16 }rem`;
    }
  }
});

export const getBorderRadiusValue = mem((propValue) => {
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

  if (propValue === 'full') {
    return '9999px';
  }

  const matches = /^x(\d+)$/.exec(propValue);

  if (matches) {
    const value = parseInt(matches[1], 10);

    if (Number.isInteger(value) && (value === 2 || value === 4)) {
      return `${ value / 16 }rem`;
    }
  }
});

const borderStartStartRadiusProperty = (borderStartStartRadius) => {
  if (cssSupports('border-start-start-radius: inherit')) {
    return css`border-start-start-radius: ${ borderStartStartRadius } !important;`;
  }

  return css`border-top-left-radius: ${ borderStartStartRadius } !important;`;
};

const borderStartEndRadiusProperty = (borderStartEndRadius) => {
  if (cssSupports('border-start-end-radius: inherit')) {
    return css`border-start-end-radius: ${ borderStartEndRadius } !important;`;
  }

  return css`border-top-right-radius: ${ borderStartEndRadius } !important;`;
};

const borderEndStartRadiusProperty = (borderEndStartRadius) => {
  if (cssSupports('border-end-start-radius: inherit')) {
    return css`border-end-start-radius: ${ borderEndStartRadius } !important;`;
  }

  return css`border-bottom-left-radius: ${ borderEndStartRadius } !important;`;
};

const borderEndEndRadiusProperty = (borderEndEndRadius) => {
  if (cssSupports('border-end-end-radius: inherit')) {
    return css`border-end-end-radius: ${ borderEndEndRadius } !important;`;
  }

  return css`border-bottom-right-radius: ${ borderEndEndRadius } !important;`;
};

// eslint-disable-next-line complexity
export const mapBorderProps = ({
  className,
  border,
  borderBlock,
  borderBlockStart,
  borderBlockEnd,
  borderInline,
  borderInlineStart,
  borderInlineEnd,
  borderWidth,
  borderBlockWidth,
  borderBlockStartWidth,
  borderBlockEndWidth,
  borderInlineWidth,
  borderInlineStartWidth,
  borderInlineEndWidth,
  borderStyle,
  borderBlockStyle,
  borderBlockStartStyle,
  borderBlockEndStyle,
  borderInlineStyle,
  borderInlineStartStyle,
  borderInlineEndStyle,
  borderColor,
  borderBlockColor,
  borderBlockStartColor,
  borderBlockEndColor,
  borderInlineColor,
  borderInlineStartColor,
  borderInlineEndColor,
  borderRadius,
  borderStartStartRadius,
  borderStartEndRadius,
  borderEndStartRadius,
  borderEndEndRadius,
  ...props
}) => ({
  className: [
    ...className,
    border !== undefined
      && css`border: ${ border } !important;`,
    borderBlock !== undefined
      && borderBlockProperty(borderBlock),
    borderBlockStart !== undefined
      && borderBlockStartProperty(borderBlockStart),
    borderBlockEnd !== undefined
      && borderBlockEndProperty(borderBlockEnd),
    borderInline !== undefined
      && borderInlineProperty(borderInline),
    borderInlineStart !== undefined
      && borderInlineStartProperty(borderInlineStart),
    borderInlineEnd !== undefined
      && borderInlineEndProperty(borderInlineEnd),
    borderWidth !== undefined
      && css`border-width: ${ getBorderWidthValue(borderWidth) || borderWidth } !important;`,
    borderBlockWidth !== undefined
      && borderBlockWidthProperty(getBorderWidthValue(borderBlockWidth) || borderBlockWidth),
    borderBlockStartWidth !== undefined
      && borderBlockStartWidthProperty(getBorderWidthValue(borderBlockStartWidth) || borderBlockStartWidth),
    borderBlockEndWidth !== undefined
      && borderBlockEndWidthProperty(getBorderWidthValue(borderBlockEndWidth) || borderBlockEndWidth),
    borderInlineWidth !== undefined
      && borderInlineWidthProperty(getBorderWidthValue(borderInlineWidth) || borderInlineWidth),
    borderInlineStartWidth !== undefined
      && borderInlineStartWidthProperty(getBorderWidthValue(borderInlineStartWidth) || borderInlineStartWidth),
    borderInlineEndWidth !== undefined
      && borderInlineEndWidthProperty(getBorderWidthValue(borderInlineEndWidth) || borderInlineEndWidth),
    borderStyle !== undefined
      && css`border-style: ${ borderStyle } !important;`,
    borderBlockStyle !== undefined
      && borderBlockStyleProperty(borderBlockStyle),
    borderBlockStartStyle !== undefined
      && borderBlockStartStyleProperty(borderBlockStartStyle),
    borderBlockEndStyle !== undefined
      && borderBlockEndStyleProperty(borderBlockEndStyle),
    borderInlineStyle !== undefined
      && borderInlineStyleProperty(borderInlineStyle),
    borderInlineStartStyle !== undefined
      && borderInlineStartStyleProperty(borderInlineStartStyle),
    borderInlineEndStyle !== undefined
      && borderInlineEndStyleProperty(borderInlineEndStyle),
    borderColor !== undefined
      && css`border-color ${ getColorValue(borderColor) || borderColor } !important;`,
    borderBlockColor !== undefined
      && borderBlockColorProperty(getColorValue(borderBlockColor) || borderBlockColor),
    borderBlockStartColor !== undefined
      && borderBlockStartColorProperty(getColorValue(borderBlockStartColor) || borderBlockStartColor),
    borderBlockEndColor !== undefined
      && borderBlockEndColorProperty(getColorValue(borderBlockEndColor) || borderBlockEndColor),
    borderInlineColor !== undefined
      && borderInlineColorProperty(getColorValue(borderInlineColor) || borderInlineColor),
    borderInlineStartColor !== undefined
      && borderInlineStartColorProperty(getColorValue(borderInlineStartColor) || borderInlineStartColor),
    borderInlineEndColor !== undefined
      && borderInlineEndColorProperty(getColorValue(borderInlineEndColor) || borderInlineEndColor),
    borderRadius !== undefined
      && css`border-radius: ${ getBorderRadiusValue(borderRadius) || borderRadius } !important;`,
    borderStartStartRadius !== undefined
      && borderStartStartRadiusProperty(getBorderRadiusValue(borderStartStartRadius) || borderStartStartRadius),
    borderStartEndRadius !== undefined
      && borderStartEndRadiusProperty(getBorderRadiusValue(borderStartEndRadius) || borderStartEndRadius),
    borderEndStartRadius !== undefined
      && borderEndStartRadiusProperty(getBorderRadiusValue(borderEndStartRadius) || borderEndStartRadius),
    borderEndEndRadius !== undefined
      && borderEndEndRadiusProperty(getBorderRadiusValue(borderEndEndRadius) || borderEndEndRadius),
  ],
  ...props,
});
