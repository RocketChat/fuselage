import React, { ComponentProps, forwardRef } from 'react';

import { ActionButton } from '../..';

export const MessageToolboxItem = forwardRef<
  HTMLButtonElement,
  ComponentProps<typeof ActionButton>
>(function Item(props, ref) {
  return <ActionButton ref={ref} {...{ ...props, small: true, ghost: true }} />;
});
