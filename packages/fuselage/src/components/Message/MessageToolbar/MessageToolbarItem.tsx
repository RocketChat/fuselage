import type { ComponentProps, Ref } from 'react';
import { forwardRef } from 'react';

import { IconButton } from '../../Button';

type MessageToolbarItemProps = ComponentProps<typeof IconButton>;

export const MessageToolbarItem = forwardRef(function MessageToolbarItem(
  props: MessageToolbarItemProps,
  ref: Ref<HTMLButtonElement>
) {
  return <IconButton ref={ref} small {...props} />;
});
