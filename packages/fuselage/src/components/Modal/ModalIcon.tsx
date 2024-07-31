import type { IconName } from '@rocket.chat/icons';

import type { BoxProps } from '../Box';
import Box from '../Box';
import { Icon } from '../Icon';

export type ModalIconProps = BoxProps & {
  name: IconName;
};

export const ModalIcon = ({
  size = 'x20',
  name,
  alignItems = 'center',
  ...props
}: ModalIconProps) => (
  <Box {...props} display='flex' alignItems={alignItems}>
    <Icon mb={4} name={name} size={size} />
  </Box>
);
