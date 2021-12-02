import { Placements } from '@rocket.chat/fuselage-hooks';
import { ComponentProps, ForwardRefExoticComponent, ReactNode } from 'react';

import { Box } from '../Box';
import { ActionButton } from '../Button';
import Option from '../Options/Option';

type MenuProps = Omit<ComponentProps<typeof ActionButton>, 'icon'> & {
  icon?: string;
  options: {
    [id: string]: {
      label: ReactElement | string;
      action: () => void;
    };
  };
  optionWidth?: ComponentProps<typeof Box>['width'];
  placement?: Placements;
  renderItem?: (props: ComponentProps<typeof Option>) => ReactNode;
};
export const Menu: ForwardRefExoticComponent<MenuProps>;
