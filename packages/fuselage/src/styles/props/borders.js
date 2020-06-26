import { css } from '@rocket.chat/css-in-js';

import { memoize } from '../../helpers/memoize';
import { getColorValue } from './colors';

export const getBorderWidthValue = memoize((propValue) => {
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

export const getBorderRadiusValue = memoize((propValue) => {
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
      && css`border-block: ${ borderBlock } !important;`,
    borderBlockStart !== undefined
      && css`border-block-start: ${ borderBlockStart } !important;`,
    borderBlockEnd !== undefined
      && css`border-block-end: ${ borderBlockEnd } !important;`,
    borderInline !== undefined
      && css`border-inline: ${ borderInline } !important;`,
    borderInlineStart !== undefined
      && css`border-inline-start: ${ borderInlineStart } !important;`,
    borderInlineEnd !== undefined
      && css`border-inline-end: ${ borderInlineEnd } !important;`,
    borderWidth !== undefined
      && css`border-width: ${ getBorderWidthValue(borderWidth) || borderWidth } !important;`,
    borderBlockWidth !== undefined
      && css`border-block-width: ${ getBorderWidthValue(borderBlockWidth) || borderBlockWidth } !important;`,
    borderBlockStartWidth !== undefined
      && css`border-block-start-width: ${ getBorderWidthValue(borderBlockStartWidth) || borderBlockStartWidth } !important;`,
    borderBlockEndWidth !== undefined
      && css`border-block-end-width: ${ getBorderWidthValue(borderBlockEndWidth) || borderBlockEndWidth } !important;`,
    borderInlineWidth !== undefined
      && css`border-inline-width: ${ getBorderWidthValue(borderInlineWidth) || borderInlineWidth } !important;`,
    borderInlineStartWidth !== undefined
      && css`border-inline-start-width: ${ getBorderWidthValue(borderInlineStartWidth) || borderInlineStartWidth } !important;`,
    borderInlineEndWidth !== undefined
      && css`border-inline-end-width: ${ getBorderWidthValue(borderInlineEndWidth) || borderInlineEndWidth } !important;`,
    borderStyle !== undefined
      && css`border-style: ${ borderStyle } !important;`,
    borderBlockStyle !== undefined
      && css`border-block-style: ${ borderBlockStyle } !important;`,
    borderBlockStartStyle !== undefined
      && css`border-block-start-style: ${ borderBlockStartStyle } !important;`,
    borderBlockEndStyle !== undefined
      && css`border-block-end-style: ${ borderBlockEndStyle } !important;`,
    borderInlineStyle !== undefined
      && css`border-inline-style: ${ borderInlineStyle } !important;`,
    borderInlineStartStyle !== undefined
      && css`border-inline-start-style: ${ borderInlineStartStyle } !important;`,
    borderInlineEndStyle !== undefined
      && css`border-inline-end-style: ${ borderInlineEndStyle } !important;`,
    borderColor !== undefined
      && css`border-color ${ getColorValue(borderColor) || borderColor } !important;`,
    borderBlockColor !== undefined
      && css`border-block-color: ${ getColorValue(borderBlockColor) || borderBlockColor } !important;`,
    borderBlockStartColor !== undefined
      && css`border-block-start-color: ${ getColorValue(borderBlockStartColor) || borderBlockStartColor } !important;`,
    borderBlockEndColor !== undefined
      && css`border-block-end-color: ${ getColorValue(borderBlockEndColor) || borderBlockEndColor } !important;`,
    borderInlineColor !== undefined
      && css`border-inline-color: ${ getColorValue(borderInlineColor) || borderInlineColor } !important;`,
    borderInlineStartColor !== undefined
      && css`border-inline-start-color: ${ getColorValue(borderInlineStartColor) || borderInlineStartColor } !important;`,
    borderInlineEndColor !== undefined
      && css`border-inline-end-color: ${ getColorValue(borderInlineEndColor) || borderInlineEndColor } !important;`,
    borderRadius !== undefined
      && css`border-radius: ${ getBorderRadiusValue(borderRadius) || borderRadius } !important;`,
    borderStartStartRadius !== undefined
      && css`border-start-start-radius: ${ getBorderRadiusValue(borderStartStartRadius) || borderStartStartRadius } !important;`,
    borderStartEndRadius !== undefined
      && css`border-start-end-radius: ${ getBorderRadiusValue(borderStartEndRadius) || borderStartEndRadius } !important;`,
    borderEndStartRadius !== undefined
      && css`border-end-start-radius: ${ getBorderRadiusValue(borderEndStartRadius) || borderEndStartRadius } !important;`,
    borderEndEndRadius !== undefined
      && css`border-end-end-radius: ${ getBorderRadiusValue(borderEndEndRadius) || borderEndEndRadius } !important;`,
  ],
  ...props,
});
