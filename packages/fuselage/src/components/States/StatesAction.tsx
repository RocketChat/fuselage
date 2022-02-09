import React, { ComponentProps } from 'react';

import { Button } from '..';

type StatesActionProps = ComponentProps<typeof Button>;

const StatesAction = ({ ...props }: StatesActionProps) => (
  <Button primary {...props} />
);

export default StatesAction;
