import { ComponentProps, ElementType, ForwardRefExoticComponent } from 'react';

import { Avatar } from '../Avatar';
import { Box } from '../Box';

type OptionsProps = Omit<ComponentProps<typeof Box>, 'onSelect'> & {
  multiple?: boolean;
  options: [unknown, string, boolean?][];
  cursor: number;
  renderItem?: ElementType;
  renderEmpty?: ElementType;
  onSelect: (option: [unknown, string]) => void;
};
export const Options: ForwardRefExoticComponent<OptionsProps> & {
  AvatarSize: ComponentProps<typeof Avatar>['size'];
};

export { useCursor } from './useCursor';
