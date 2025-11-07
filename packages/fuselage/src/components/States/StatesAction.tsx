import type { ComponentProps } from 'react';

import { Button } from '../index.js';

type StatesActionProps = ComponentProps<typeof Button>;

const StatesAction = ({ primary = true, ...props }: StatesActionProps) => (
  <Button {...props} primary={primary} />
);

export default StatesAction;
