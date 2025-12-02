import type { ComponentProps } from 'react';

import type { BoxProps } from '../Box';
import Box from '../Box';
import { Icon } from '../Icon';

export type ModalIconProps = BoxProps & {
  name: ComponentProps<typeof Icon>['name'];
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
