import { ComponentProps, ReactElement } from 'react';

import { Box } from '../Box';

type LabelProps = ComponentProps<typeof Box> & {
  disabled?: boolean;
  required?: boolean;
};
export const Label: (props: LabelProps) => ReactElement;
