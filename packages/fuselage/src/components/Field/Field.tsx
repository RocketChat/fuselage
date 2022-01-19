import React, { ComponentPropsWithoutRef } from 'react';

import { Box } from '../Box';

type FieldProps = ComponentPropsWithoutRef<typeof Box>;

export function Field(props: FieldProps) {
  return <Box rcx-field {...props} />;
}
