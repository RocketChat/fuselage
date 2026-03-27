import { createContext } from 'react';

import { Box, type BoxProps } from '../Box';

export const FieldContext = createContext(false);

export type FieldProps = BoxProps;

/**
 * A `Field` is a wrapper representing an entry in a form.
 */
function Field(props: FieldProps) {
  return (
    <FieldContext.Provider value={true}>
      <Box
        rcx-field
        display='flex'
        flexDirection='column'
        flexWrap='nowrap'
        alignItems='stretch'
        flexShrink={0}
        width='full'
        {...props}
      />
    </FieldContext.Provider>
  );
}

export default Field;
