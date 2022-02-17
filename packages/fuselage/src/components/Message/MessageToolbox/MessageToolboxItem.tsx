import type { ComponentProps, Ref } from 'react';
import React, { forwardRef } from 'react';

import { ActionButton } from '../..';

type MessageToolboxItemProps = ComponentProps<typeof ActionButton>;

export const MessageToolboxItem = forwardRef(function Item(
  props: MessageToolboxItemProps,
  ref: Ref<HTMLButtonElement>
) {
  return <ActionButton ref={ref} {...{ ...props, small: true, ghost: true }} />;
});
