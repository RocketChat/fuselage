import type { ComponentPropsWithoutRef } from 'react';

import WithErrorWrapper from '../../helpers/WithErrorWrapper.js';
import Box from '../Box/index.js';

import { FieldContext } from './Field.js';

export type FieldHintProps = ComponentPropsWithoutRef<typeof Box>;

const FieldHint = (props: FieldHintProps) => {
  const component = <Box is='span' rcx-field__hint {...props} />;

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

export default FieldHint;
