import WithErrorWrapper from '../../helpers/WithErrorWrapper';
import { Box, type BoxProps } from '../Box';

import { FieldContext } from './Field';

export type FieldHintProps = BoxProps;

const FieldHint = (props: FieldHintProps) => {
  const component = (
    <Box
      is='span'
      rcx-field__hint
      fontScale='c1'
      marginBlock='x2'
      color='font-secondary-info'
      {...props}
    />
  );

  if (process.env['NODE_ENV'] === 'development') {
    return (
      <WithErrorWrapper
        context={FieldContext}
        parentComponent='Field'
        componentName={FieldHint.name}
      >
        {component}
      </WithErrorWrapper>
    );
  }

  return component;
};

export default FieldHint;
