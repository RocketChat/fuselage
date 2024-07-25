import React from 'react';

import WithErrorWrapper from '../../helpers/WithErrorWrapper';
import type { BoxProps } from '../Box';
import Box from '../Box';
import { FieldContext } from './Field';

type FieldDescriptionProps = BoxProps;

export const FieldDescription = (props: FieldDescriptionProps) => {
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
