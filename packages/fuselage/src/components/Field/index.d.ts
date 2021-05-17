import { ComponentProps } from 'react';

import { Box } from '../Box';

type FieldProps = ComponentProps<typeof Box>;
type FieldRowProps = ComponentProps<typeof Box>;
type FieldLabelProps = ComponentProps<typeof Box>;
type FieldDescriptionProps = ComponentProps<typeof Box>;
type FieldHintProps = ComponentProps<typeof Box>;
type FieldErrorProps = ComponentProps<typeof Box>;

export const Field: ForwardRefExoticComponent<FieldProps> & {
  Row: ForwardRefExoticComponent<FieldRowProps>;
  Label: ForwardRefExoticComponent<FieldLabelProps>;
  Description: ForwardRefExoticComponent<FieldDescriptionProps>;
  Hint: ForwardRefExoticComponent<FieldHintProps>;
  Error: ForwardRefExoticComponent<FieldErrorProps>;
};
