import type { ComponentPropsWithoutRef } from 'react';

import WithErrorWrapper from '../../helpers/WithErrorWrapper';
import Box from '../Box';

import { FieldContext } from './Field';

export type FieldErrorProps = ComponentPropsWithoutRef<typeof Box>;

const FieldError = (props: FieldErrorProps) => {
  const component = <Box is='span' rcx-field__error {...props} />;

  if (process.env['NODE_ENV'] === 'development') {
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

export default FieldError;
