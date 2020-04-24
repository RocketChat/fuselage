import { css } from '@rocket.chat/css-in-js';

import { getSizeValue } from '../propTypes/sizes';

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
  display,
  verticalAlign,
  overflow,
  overflowX,
  overflowY,
  ...props
}) => ({
  className: [
    ...className,
    width !== undefined && css`width: ${ getSizeValue(width) } !important;`,
    minWidth !== undefined && css`min-width: ${ getSizeValue(minWidth) } !important;`,
    maxWidth !== undefined && css`max-width: ${ getSizeValue(maxWidth) } !important;`,
    height !== undefined && css`height: ${ getSizeValue(height) } !important;`,
    minHeight !== undefined && css`min-height: ${ getSizeValue(minHeight) } !important;`,
    maxHeight !== undefined && css`max-height: ${ getSizeValue(maxHeight) } !important;`,
    display !== undefined && css`display: ${ display } !important;`,
    verticalAlign !== undefined && css`vertical-align: ${ verticalAlign } !important;`,
    overflow !== undefined && css`overflow: ${ overflow } !important;`,
    overflowX !== undefined && css`overflow-x: ${ overflowX } !important;`,
    overflowY !== undefined && css`overflow-y: ${ overflowY } !important;`,
  ],
  ...props,
});
