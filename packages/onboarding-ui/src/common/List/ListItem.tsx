import { Box, Icon } from '@rocket.chat/fuselage';
import type { ComponentProps, ReactElement, ReactNode } from 'react';

type FontScale = 'h1' | 's1' | 's2' | 'p1' | 'p2' | 'c1' | 'c2' | 'micro';
const ListItem = ({
  children,
  icon,
  iconColor = 'success',
  fontScale = 'c1',
}: {
  children: ReactNode;
  icon?: string;
  iconColor?: ComponentProps<typeof Icon>['color'];
  fontScale?: FontScale;
}): ReactElement => (
  <Box is='li' fontScale={fontScale} color='inherit'>
    {icon && <Icon name={icon} color={iconColor} size='x16' mie='x4' />}
    {children}
  </Box>
);

export default ListItem;
