import WithErrorWrapper from '../../helpers/WithErrorWrapper';
import { Box, type BoxProps } from '../Box';

import { FieldContext } from './Field';

export type FieldErrorProps = BoxProps;

const FieldError = (props: FieldErrorProps) => {
  const component = (
    <Box
      is='span'
      rcx-field__error
      fontScale='c1'
      marginBlock='x2'
      color='font-danger'
      {...props}
    />
  );

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
