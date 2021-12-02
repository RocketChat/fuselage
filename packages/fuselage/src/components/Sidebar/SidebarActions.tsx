import React, { ComponentProps, FC } from 'react';

import { ActionButton } from '..';
import { ButtonGroup } from '../ButtonGroup';

export const SidebarActions: FC<ComponentProps<typeof ButtonGroup>> = (
  props
) => <ButtonGroup mb='neg-x2' medium {...props} />;

export const SidebarAction: FC<ComponentProps<typeof ActionButton>> = (
  props
) => <ActionButton small {...props} />;
