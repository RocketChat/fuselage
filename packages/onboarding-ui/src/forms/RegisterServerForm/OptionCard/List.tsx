import { Box, Margins } from '@rocket.chat/fuselage';
import type {
  ReactElement,
  ReactNode,
  ComponentProps,
  CSSProperties,
} from 'react';

const List = ({
  children,
  listStyle,
  spacing = 'x6',
  color = 'default',
}: {
  children: ReactNode;
  spacing?: ComponentProps<typeof Margins>['block'];
  listStyle?: CSSProperties['listStyle'];
  color?: ComponentProps<typeof Box>['color'];
}): ReactElement => (
  <Box is='ul' style={{ listStyle: listStyle || 'none' }} color={color}>
    <Margins block={spacing}>{children}</Margins>
  </Box>
);

export default List;
