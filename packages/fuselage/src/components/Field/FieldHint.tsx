import type { ComponentPropsWithoutRef } from 'react';

import WithErrorWrapper from '../../helpers/WithErrorWrapper';
import Box from '../Box';

import { FieldContext, useFieldDescriptorId } from './Field';

type FieldHintProps = ComponentPropsWithoutRef<typeof Box>;

export const FieldHint = (props: FieldHintProps) => {
  const id = useFieldDescriptorId('hint');
  const component = <Box is='span' rcx-field__hint id={id} {...props} />;

  if (process.env.NODE_ENV === 'development') {
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
