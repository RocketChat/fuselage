import type { ComponentPropsWithoutRef } from 'react';
import React from 'react';

import { FieldContext } from './Field';
import WithErrorWrapper from '../../helpers/WithErrorWrapper';
import Box from '../Box';
import { Label } from '../Label';

type FieldLabelProps = ComponentPropsWithoutRef<typeof Label>;

export const FieldLabel = (props: FieldLabelProps) => {
  const component = <Box is={Label} rcx-field__label {...props} />;

  if (process.env.NODE_ENV === 'development') {
    return (
      <WithErrorWrapper
        context={FieldContext}
        parentComponent='Field'
        componentName={FieldLabel.name}
      >
        {component}
      </WithErrorWrapper>
    );
  }

  return component;
};
