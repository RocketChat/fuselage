import React, { FC, ComponentProps } from 'react';

import { ButtonGroup } from '../ButtonGroup';

const StatesActions: FC<ComponentProps<typeof ButtonGroup>> = ({
  children,
  ...props
}) => <ButtonGroup {...props}> {children} </ButtonGroup>;

export default StatesActions;
