import { ComponentProps, ForwardRefExoticComponent } from 'react';

import { Box } from '../Box';

type ProgressBarProps = ComponentProps<typeof Box> & {
  percentage?: number;
  error?: string;
};
export const ProgressBar: ForwardRefExoticComponent<ProgressBarProps>;
