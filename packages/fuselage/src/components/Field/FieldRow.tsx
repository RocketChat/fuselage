import type { ComponentPropsWithoutRef } from 'react';
import React from 'react';

import WithErrorWrapper from '../../helpers/WithErrorWrapper';
import Box from '../Box';
import { FieldContext } from './Field';

type FieldRowProps = ComponentPropsWithoutRef<typeof Box>;

export const FieldRow = (props: FieldRowProps) => {
  const component = <Box is='span' rcx-field__row {...props} />;

  if (process.env.NODE_ENV === 'development') {
    return (
      <WithErrorWrapper
        context={FieldContext}
        parentComponent='Field'
        componentName={FieldRow.name}
      >
        {component}
      </WithErrorWrapper>
    );
  }

  return component;
};
