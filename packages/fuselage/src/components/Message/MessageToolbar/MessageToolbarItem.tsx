import type { ForwardedRef } from 'react';
import { forwardRef } from 'react';

import type { IconButtonProps } from '../../Button';
import { IconButton } from '../../Button';

type MessageToolbarItemProps = IconButtonProps;

export const MessageToolbarItem = forwardRef(function MessageToolbarItem(
  props: MessageToolbarItemProps,
  ref: ForwardedRef<HTMLButtonElement>
) {
  return <IconButton ref={ref} small {...props} />;
});
