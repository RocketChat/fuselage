import type { ComponentProps, Ref } from 'react';
import React, { forwardRef } from 'react';

import { IconButton } from '../../Button';

type MessageToolboxItemProps = ComponentProps<typeof IconButton>;

export const MessageToolboxItem = forwardRef(function Item(
  props: MessageToolboxItemProps,
  ref: Ref<HTMLButtonElement>
) {
  return <IconButton secondary ref={ref} small {...props} />;
});
