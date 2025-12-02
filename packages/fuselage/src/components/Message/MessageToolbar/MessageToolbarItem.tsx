import { forwardRef } from 'react';

import { IconButton } from '../../Button';
import type { IconButtonProps } from '../../Button/IconButton';

type MessageToolbarItemProps = IconButtonProps;

export const MessageToolbarItem = forwardRef<
  HTMLButtonElement,
  MessageToolbarItemProps
>(function MessageToolbarItem(props, ref) {
  return <IconButton ref={ref} small {...props} />;
});
