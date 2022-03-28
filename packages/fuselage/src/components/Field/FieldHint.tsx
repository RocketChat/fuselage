import type { ComponentPropsWithoutRef } from 'react';
import React from 'react';

import Box from '../Box';

type FieldHintProps = ComponentPropsWithoutRef<typeof Box>;

export const FieldHint = (props: FieldHintProps) => (
  <Box is='span' rcx-field__hint {...props} />
);
