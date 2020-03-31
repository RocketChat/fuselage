import { css } from '@rocket.chat/css-in-js';

import { useCss } from './useCss';
import { getSizeValue } from '../../propTypes/sizes';

export const useLayoutProps = ({
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
}) => {
  const layoutClassName = useCss([
    width && css`width: ${ getSizeValue(width) } !important;`,
    minWidth && css`min-width: ${ getSizeValue(minWidth) } !important;`,
    maxWidth && css`max-width: ${ getSizeValue(maxWidth) } !important;`,
    height && css`height: ${ getSizeValue(height) } !important;`,
    minHeight && css`min-height: ${ getSizeValue(minHeight) } !important;`,
    maxHeight && css`max-height: ${ getSizeValue(maxHeight) } !important;`,
    display && css`display: ${ display } !important;`,
    verticalAlign && css`vertical-align: ${ verticalAlign } !important;`,
    overflow && css`overflow: ${ overflow } !important;`,
    overflowX && css`overflow-x: ${ overflowX } !important;`,
    overflowY && css`overflow-y: ${ overflowY } !important;`,
  ], [
    width,
    minWidth,
    maxWidth,
    height,
    minHeight,
    maxHeight,
    display,
    verticalAlign,
    overflow,
    overflowX,
    overflowY,
  ]);

  return {
    className: [
      ...className,
      layoutClassName,
    ],
    ...props,
  };
};
