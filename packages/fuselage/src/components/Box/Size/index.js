import React from 'react';

import { sizePropType } from '../../../propTypes/sizes';
import { PropsProvider } from '../PropsContext';

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
  return <PropsProvider children={children} fn={(props) => ({
    ...length !== undefined && { width: length, height: length },
    ...minLength !== undefined && { minWidth: minLength, minHeight: minLength },
    ...maxLength !== undefined && { maxWidth: maxLength, maxHeight: maxLength },
    ...width !== undefined && { width },
    ...minWidth !== undefined && { minWidth },
    ...maxWidth !== undefined && { maxWidth },
    ...height !== undefined && { height },
    ...minHeight !== undefined && { minHeight },
    ...maxHeight !== undefined && { maxHeight },
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
