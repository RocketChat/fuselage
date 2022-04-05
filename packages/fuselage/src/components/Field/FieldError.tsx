import type { ComponentPropsWithoutRef } from 'react';
import React from 'react';

import Box from '../Box';

type FieldErrorProps = ComponentPropsWithoutRef<typeof Box>;

export const FieldError = (props: FieldErrorProps) => (
  <Box is='span' rcx-field__error {...props} />
);
