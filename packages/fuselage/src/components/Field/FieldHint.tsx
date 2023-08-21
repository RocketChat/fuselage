import type { ComponentPropsWithoutRef } from 'react';
import React, { useContext } from 'react';

import Box from '../Box';
import { FieldContext } from './Field';

type FieldHintProps = ComponentPropsWithoutRef<typeof Box>;

export const FieldHint = (props: FieldHintProps) => {
  const isInsideField = useContext(FieldContext);
  if (process.env.NODE_ENV === 'development' && !isInsideField) {
    console.error(
      `${FieldHint.name} should be used as children of Field Component`
    );
  }

  return <Box is='span' rcx-field__hint {...props} />;
};
