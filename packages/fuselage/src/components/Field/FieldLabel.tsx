import React, { ComponentPropsWithoutRef, FC } from 'react';

import { Box } from '../Box';
import { Label } from '../Label';

type FieldLabelProps = ComponentPropsWithoutRef<typeof Box>;

export const FieldLabel: FC<FieldLabelProps> = function FieldLabel(props) {
  return <Box is={Label} rcx-field__label {...props} />;
};
