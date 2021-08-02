import { ActionButton, Box } from '@rocket.chat/fuselage';
import { ComponentProps, FC } from 'react';

type IconButtonProps = ComponentProps<typeof Box> & {
  icon: string;
  ghost?: boolean;
};

export const IconButton: FC<IconButtonProps> = (props) => (
  <ActionButton ghost {...props} />
);
