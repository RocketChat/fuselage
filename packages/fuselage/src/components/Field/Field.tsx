import type { ComponentPropsWithoutRef } from 'react';
import { createContext } from 'react';

import Box from '../Box';

export const FieldContext = createContext(false);

type FieldProps = ComponentPropsWithoutRef<typeof Box>;

/**
 * A `Field` is a wrapper representing an entry in a form.
 */
export function Field(props: FieldProps) {
  return (
    <FieldContext.Provider value={true}>
      <Box rcx-field {...props} />
    </FieldContext.Provider>
  );
}
