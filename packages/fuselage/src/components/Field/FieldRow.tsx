import type { ComponentPropsWithoutRef } from 'react';
import React, { useContext } from 'react';

import Box from '../Box';
import { FieldContext } from './Field';

type FieldRowProps = ComponentPropsWithoutRef<typeof Box>;

export const FieldRow = (props: FieldRowProps) => {
  const isInsideField = useContext(FieldContext);
  if (process.env.NODE_ENV === 'development' && !isInsideField) {
    console.error(
      `${FieldRow.name} should be used as children of Field Component`
    );
  }

  return <Box is='span' rcx-field__row {...props} />;
};
