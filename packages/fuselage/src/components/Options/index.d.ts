import {
  ComponentProps,
  ElementType,
  FC,
  ForwardRefExoticComponent,
} from 'react';

import { Avatar } from '../Avatar';
import { Box } from '../Box';
import { OptionProps } from './Option/Option';

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

export const CheckOption: FC<OptionProps>;

export { useCursor } from './useCursor';
