import type { ComponentPropsWithoutRef } from 'react';

import WithErrorWrapper from '../../helpers/WithErrorWrapper';
import Box from '../Box';

import { FieldContext, useFieldDescriptorId } from './Field';

type FieldErrorProps = ComponentPropsWithoutRef<typeof Box>;

export const FieldError = (props: FieldErrorProps) => {
  const id = useFieldDescriptorId('error');
  const component = <Box is='span' rcx-field__error id={id} {...props} />;

  if (process.env.NODE_ENV === 'development') {
    return (
      <WithErrorWrapper
        context={FieldContext}
        parentComponent='Field'
        componentName={FieldError.name}
      >
        {component}
      </WithErrorWrapper>
    );
  }

  return component;
};
