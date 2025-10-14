import type { ComponentPropsWithoutRef } from 'react';

import WithErrorWrapper from '../../helpers/WithErrorWrapper';
import Box from '../Box';

import { FieldContext } from './Field';

export type FieldRowProps = ComponentPropsWithoutRef<typeof Box>;

const FieldRow = (props: FieldRowProps) => {
  const component = <Box is='span' rcx-field__row {...props} />;

  if (process.env.NODE_ENV === 'development') {
    return (
      <WithErrorWrapper
        context={FieldContext}
        parentComponent='Field'
        componentName={FieldRow.name}
      >
        {component}
      </WithErrorWrapper>
    );
  }

  return component;
};

export default FieldRow;
