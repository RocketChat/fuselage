import type { ComponentPropsWithoutRef } from 'react';

import WithErrorWrapper from '../../helpers/WithErrorWrapper.js';
import Box from '../Box/index.js';

import { FieldContext } from './Field.js';

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
