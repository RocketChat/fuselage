import type { ComponentPropsWithoutRef } from 'react';
import React from 'react';

import { FieldContext } from './Field';
import WithErrorWrapper from '../../helpers/WithErrorWrapper';
import Box from '../Box';

type FieldDescriptionProps = ComponentPropsWithoutRef<typeof Box>;

export const FieldDescription = (props: FieldDescriptionProps) => {
  const component = <Box is='span' rcx-field__description {...props} />;

  if (process.env.NODE_ENV === 'development') {
    return (
      <WithErrorWrapper
        context={FieldContext}
        parentComponent='Field'
        componentName={FieldDescription.name}
      >
        {component}
      </WithErrorWrapper>
    );
  }

  return component;
};
