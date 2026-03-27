import WithErrorWrapper from '../../helpers/WithErrorWrapper';
import { Box, type BoxProps } from '../Box';

import { FieldContext } from './Field';

export type FieldDescriptionProps = BoxProps;

const FieldDescription = (props: FieldDescriptionProps) => {
  const component = (
    <Box
      is='span'
      rcx-field__description
      fontScale='p2'
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
        componentName={FieldDescription.name}
      >
        {component}
      </WithErrorWrapper>
    );
  }

  return component;
};

export default FieldDescription;
