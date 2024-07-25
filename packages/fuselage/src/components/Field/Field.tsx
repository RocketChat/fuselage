import React, { createContext } from 'react';

import type { BoxProps } from '../Box';
import Box from '../Box';

export const FieldContext = createContext(false);

type FieldProps = BoxProps;

export function Field(props: FieldProps) {
  return (
    <FieldContext.Provider value={true}>
      <Box rcx-field {...props} />
    </FieldContext.Provider>
  );
}
