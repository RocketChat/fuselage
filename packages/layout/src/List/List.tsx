import { Margins } from '@rocket.chat/fuselage';
import colors from '@rocket.chat/fuselage-tokens/colors.json';
import type { ReactNode, ComponentProps, CSSProperties } from 'react';

import { ListComponent } from './List.styles';
import ListItem from './ListItem';

const List = ({
  children,
  listStyleType,
  icon,
  spacing = 'x6',
  color = colors.n900,
}: {
  children: ReactNode;
  spacing?: ComponentProps<typeof Margins>['block'];
  listStyleType?: CSSProperties['listStyleType'];
  color?: CSSProperties['color'];
  icon?: string;
}) => (
  <ListComponent icon={icon} listStyleType={listStyleType} color={color}>
    <Margins block={spacing}>{children}</Margins>
  </ListComponent>
);

List.Item = ListItem;

export default List;
