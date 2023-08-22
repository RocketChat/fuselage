import type { ComponentPropsWithoutRef } from 'react';
import React from 'react';

import WithErrorWrapper from '../../helpers/WithErrorWrapper';
import Box from '../Box';
import { FieldContext } from './Field';

type FieldLinkProps = ComponentPropsWithoutRef<typeof Box>;

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
