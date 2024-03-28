import type { ComponentProps } from 'react';
import React from 'react';

import { ButtonGroup } from '../ButtonGroup';

export const NavBarGroup = (props: ComponentProps<typeof ButtonGroup>) => (
  <ButtonGroup className='rcx-navbar--group' {...props} />
);
