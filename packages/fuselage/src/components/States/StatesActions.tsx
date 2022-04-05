import type { ComponentProps } from 'react';
import React from 'react';

import { ButtonGroup } from '../ButtonGroup';

type StatesActionsProps = ComponentProps<typeof ButtonGroup>;

const StatesActions = ({ children, ...props }: StatesActionsProps) => (
  <ButtonGroup {...props}> {children} </ButtonGroup>
);

export default StatesActions;
