import type { ComponentPropsWithoutRef } from 'react';
import React from 'react';

import { Box } from '../Box';

type FieldProps = ComponentPropsWithoutRef<typeof Box>;

export function Field(props: FieldProps) {
  return <Box rcx-field {...props} />;
}
