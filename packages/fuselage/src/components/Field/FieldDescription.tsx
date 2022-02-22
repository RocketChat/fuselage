import type { ComponentPropsWithoutRef } from 'react';
import React from 'react';

import { Box } from '../Box';

type FieldDescriptionProps = ComponentPropsWithoutRef<typeof Box>;

export const FieldDescription = (props: FieldDescriptionProps) => (
  <Box is='span' rcx-field__description {...props} />
);
