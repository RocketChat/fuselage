import React from 'react';

import WithErrorWrapper from '../../helpers/WithErrorWrapper';
import type { BoxProps } from '../Box';
import Box from '../Box';
import { FieldContext } from './Field';

type FieldLinkProps = BoxProps;

export const FieldLink = (props: FieldLinkProps) => {
  const component = <Box is='a' target='_blank' rcx-field__link {...props} />;

  if (process.env.NODE_ENV === 'development') {
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
