import type { ReactNode } from 'react';
import { createContext } from 'react';

import { styled } from '@tamagui/core';

import { RcxView } from '../../primitives';

export const FieldContext = createContext(false);

const FieldFrame = styled(RcxView, {
  name: 'Field',

  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'nowrap',
  alignItems: 'stretch',
  flexShrink: 0,

  width: '100%',
});

export type FieldProps = {
  children?: ReactNode;
  [key: string]: any;
};

/**
 * A `Field` is a wrapper representing an entry in a form.
 */
function Field(props: FieldProps) {
  return (
    <FieldContext.Provider value={true}>
      <FieldFrame {...props} />
    </FieldContext.Provider>
  );
}

export default Field;
