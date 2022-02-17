import type { ComponentProps } from 'react';
import React from 'react';

import { Button } from '..';

type StatesActionProps = ComponentProps<typeof Button>;

const StatesAction = ({ ...props }: StatesActionProps) => (
  <Button primary {...props} />
);

export default StatesAction;
