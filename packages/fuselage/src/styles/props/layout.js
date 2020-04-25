import { css } from '@rocket.chat/css-in-js';
import mem from 'mem';

import { createPropType } from './createPropType';

export const getSizeValue = mem((propValue) => {
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
    return '100%';
  }

  if (propValue === 'sw') {
    return '100vw';
  }

  if (propValue === 'sh') {
    return '100vh';
  }

  const matches = /^x(\d+)$/.exec(propValue);

  if (matches) {
    const value = parseInt(matches[1], 10);

    if (Number.isInteger(value) && (value % 4 === 0 || value === 1 || value === 2)) {
      return `${ value / 16 }rem`;
    }
  }
});

export const mapLayoutProps = ({
  className,
  w,
  width = w,
  minWidth,
  maxWidth,
  h,
  height = h,
  minHeight,
  maxHeight,
  size,
  minSize,
  maxSize,
  htmlSize,
  display,
  verticalAlign,
  overflow,
  overflowX,
  overflowY,
  ...props
}) => ({
  className: [
    ...className,
    width !== undefined
      && css`width: ${ getSizeValue(width) || width } !important;`,
    minWidth !== undefined
      && css`min-width: ${ getSizeValue(minWidth) || minWidth } !important;`,
    maxWidth !== undefined
      && css`max-width: ${ getSizeValue(maxWidth) || maxWidth } !important;`,
    height !== undefined
      && css`height: ${ getSizeValue(height) || height } !important;`,
    minHeight !== undefined
      && css`min-height: ${ getSizeValue(minHeight) || minHeight } !important;`,
    maxHeight !== undefined
      && css`max-height: ${ getSizeValue(maxHeight) || maxHeight } !important;`,
    size !== undefined
      && css`
      width: ${ getSizeValue(size) || size } !important;
      height: ${ getSizeValue(size) || size } !important;
    `,
    minSize !== undefined
      && css`
      min-width: ${ getSizeValue(minSize) || minSize } !important;
      min-height: ${ getSizeValue(minSize) || minSize } !important;
    `,
    maxSize !== undefined
      && css`
      max-width: ${ getSizeValue(maxSize) || maxSize } !important;
      max-height: ${ getSizeValue(maxSize) || maxSize } !important;
    `,
    display !== undefined
      && css`display: ${ display } !important;`,
    verticalAlign !== undefined
      && css`vertical-align: ${ verticalAlign } !important;`,
    overflow !== undefined
      && css`overflow: ${ overflow } !important;`,
    overflowX !== undefined
      && css`overflow-x: ${ overflowX } !important;`,
    overflowY !== undefined
      && css`overflow-y: ${ overflowY } !important;`,
  ],
  size: htmlSize,
  ...props,
});

export const sizePropType = createPropType(getSizeValue);
