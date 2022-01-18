import React, { ComponentPropsWithoutRef, FC } from 'react';

import { Box } from '../Box';

type FieldRowProps = ComponentPropsWithoutRef<typeof Box>;

export const FieldRow: FC<FieldRowProps> = function FieldRow(props) {
  return <Box is='span' rcx-field__row {...props} />;
};
