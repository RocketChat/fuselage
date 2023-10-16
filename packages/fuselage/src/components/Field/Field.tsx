import type { ComponentPropsWithoutRef } from 'react';
import React, { createContext } from 'react';

import Box from '../Box';

export const FieldContext = createContext(false);

type FieldProps = ComponentPropsWithoutRef<typeof Box>;

export function Field(props: FieldProps) {
  return (
    <FieldContext.Provider value={true}>
      <Box rcx-field {...props} />
    </FieldContext.Provider>
  );
}
