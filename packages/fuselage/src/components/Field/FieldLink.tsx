import type { ComponentPropsWithoutRef } from 'react';
import React, { useContext } from 'react';

import Box from '../Box';
import { FieldContext } from './Field';

type FieldLinkProps = ComponentPropsWithoutRef<typeof Box>;

export const FieldLink = (props: FieldLinkProps) => {
  const isInsideField = useContext(FieldContext);
  if (process.env.NODE_ENV === 'development' && !isInsideField) {
    console.error(
      `${FieldLink.name} should be used as children of Field Component`
    );
  }

  return <Box is='a' target='_blank' rcx-field__link {...props} />;
};
