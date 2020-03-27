import { css } from '@rocket.chat/css-in-js';
import React from 'react';

import { sizePropType, getSizeValue } from '../../../propTypes/sizes';
import { PropsProvider } from '../PropsContext';
import { useCss } from '../useCss';

export function Size({
  children,
  length,
  minLength,
  maxLength,
  width,
  minWidth,
  maxWidth,
  height,
  minHeight,
  maxHeight,
}) {
  const sizeClassName = useCss([
    length && css`
      width: ${ getSizeValue(length) };
      height: ${ getSizeValue(length) };
    `,
    minLength && css`
      min-width: ${ getSizeValue(minLength) };
      min-height: ${ getSizeValue(minLength) };
    `,
    maxLength && css`
      max-width: ${ getSizeValue(maxLength) };
      max-height: ${ getSizeValue(maxLength) };
    `,
    width && css`width: ${ getSizeValue(width) };`,
    minWidth && css`min-width: ${ getSizeValue(minWidth) };`,
    maxWidth && css`max-width: ${ getSizeValue(maxWidth) };`,
    height && css`height: ${ getSizeValue(height) };`,
    minHeight && css`min-height: ${ getSizeValue(minHeight) };`,
    maxHeight && css`max-height: ${ getSizeValue(maxHeight) };`,
  ], [
    length,
    minLength,
    maxLength,
    width,
    minWidth,
    maxWidth,
    height,
    minHeight,
    maxHeight,
  ]);

  return <PropsProvider children={children} fn={({ className, ...props }) => ({
    className: [className, sizeClassName].filter(Boolean).join(' '),
    ...props,
  })} memoized />;
}

Size.propTypes = {
  length: sizePropType,
  minLength: sizePropType,
  maxLength: sizePropType,
  width: sizePropType,
  minWidth: sizePropType,
  maxWidth: sizePropType,
  height: sizePropType,
  minHeight: sizePropType,
  maxHeight: sizePropType,
};
