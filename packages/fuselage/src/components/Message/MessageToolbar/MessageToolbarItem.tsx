import type { Ref } from 'react';
import React, { forwardRef } from 'react';

import type { IconButtonProps } from '../../Button';
import { IconButton } from '../../Button';

type MessageToolbarItemProps = IconButtonProps;

export const MessageToolbarItem = forwardRef(function MessageToolbarItem(
  props: MessageToolbarItemProps,
  ref: Ref<HTMLButtonElement>
) {
  return <IconButton ref={ref} small {...props} />;
});
