import type { ComponentPropsWithoutRef } from 'react';

import WithErrorWrapper from '../../helpers/WithErrorWrapper';
import Box from '../Box';

import { FieldContext } from './Field';

export type FieldDescriptionProps = ComponentPropsWithoutRef<typeof Box>;

const FieldDescription = (props: FieldDescriptionProps) => {
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

export default FieldDescription;
