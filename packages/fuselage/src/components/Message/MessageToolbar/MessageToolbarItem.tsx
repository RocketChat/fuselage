import { forwardRef } from 'react';

import { IconButton } from '../../Button';
import type { IconButtonProps } from '../../Button/IconButton';

export type MessageToolbarItemProps = IconButtonProps;

const MessageToolbarItem = forwardRef<
  HTMLButtonElement,
  MessageToolbarItemProps
>(function MessageToolbarItem(props, ref) {
  return <IconButton ref={ref} small {...props} />;
});

export default MessageToolbarItem;
