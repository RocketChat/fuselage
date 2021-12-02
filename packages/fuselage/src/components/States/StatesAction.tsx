import React, { FC, ComponentProps } from 'react';

import { Button } from '..';

const StatesAction: FC<ComponentProps<typeof Button>> = ({ ...props }) => (
  <Button primary {...props} />
);

export default StatesAction;
