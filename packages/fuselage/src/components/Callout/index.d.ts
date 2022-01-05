import { ComponentProps, ForwardRefExoticComponent } from 'react';

import { Box } from '../Box';

type CalloutProps = Omit<ComponentProps<typeof Box>, 'type'> & {
  type?: 'info' | 'success' | 'warning' | 'danger';
};
export const Callout: ForwardRefExoticComponent<CalloutProps>;
