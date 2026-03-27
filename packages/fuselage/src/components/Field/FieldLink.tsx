import WithErrorWrapper from '../../helpers/WithErrorWrapper';
import { Box, type BoxProps } from '../Box';

import { FieldContext } from './Field';

export type FieldLinkProps = BoxProps;

const FieldLink = (props: FieldLinkProps) => {
  const component = (
    <Box
      is='a'
      target='_blank'
      rcx-field__link
      fontScale='c1'
      marginBlock='x2'
      color='font-info'
      {...props}
    />
  );

  if (process.env['NODE_ENV'] === 'development') {
    return (
      <WithErrorWrapper
        context={FieldContext}
        parentComponent='Field'
        componentName={FieldLink.name}
      >
        {component}
      </WithErrorWrapper>
    );
  }

  return component;
};

export default FieldLink;
