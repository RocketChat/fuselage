import type { ComponentPropsWithoutRef } from 'react';
import React from 'react';

import Box from '../Box';

type FieldRowProps = ComponentPropsWithoutRef<typeof Box>;

export const FieldRow = (props: FieldRowProps) => (
  <Box is='span' rcx-field__row {...props} />
);
