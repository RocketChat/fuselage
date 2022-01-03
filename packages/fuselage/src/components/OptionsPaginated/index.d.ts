import { ComponentProps, ElementType, ForwardRefExoticComponent } from 'react';

import { Avatar } from '../Avatar';
import { Box } from '../Box';

type OptionsPaginatedProps = Omit<ComponentProps<typeof Box>, 'onSelect'> & {
  multiple?: boolean;
  options: [unknown, string, ?boolean][];
  cursor: number;
  renderItem?: ElementType;
  renderEmpty?: ElementType;
  onSelect: (option: [unknown, string]) => void;
};
export const OptionsPaginated: ForwardRefExoticComponent<OptionsPaginatedProps> & {
  AvatarSize: ComponentProps<typeof Avatar>['size'];
};

export const CheckOption: ForwardRefExoticComponent<OptionsPaginatedProps>;
