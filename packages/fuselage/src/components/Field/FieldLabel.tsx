import type { ComponentPropsWithoutRef } from 'react';
import React from 'react';

import { Box } from '../Box';
import { Label } from '../Label';

type FieldLabelProps = ComponentPropsWithoutRef<typeof Box>;

export const FieldLabel = (props: FieldLabelProps) => (
  <Box is={Label} rcx-field__label {...props} />
);
