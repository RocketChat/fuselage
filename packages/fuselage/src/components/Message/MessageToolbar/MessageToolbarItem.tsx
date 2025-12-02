import type { Ref } from 'react';
import { forwardRef } from 'react';

import { IconButton } from '../../Button';
import type { IconButtonProps } from '../../Button/IconButton';

type MessageToolbarItemProps = IconButtonProps;

export const MessageToolbarItem = forwardRef(function MessageToolbarItem(
  props: MessageToolbarItemProps,
  ref: Ref<HTMLButtonElement>,
) {
  return <IconButton ref={ref} small {...props} />;
});
