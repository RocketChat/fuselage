import type { ComponentPropsWithoutRef } from 'react';

import WithErrorWrapper from '../../helpers/WithErrorWrapper.js';
import Box from '../Box/index.js';

import { FieldContext } from './Field.js';

export type FieldLinkProps = ComponentPropsWithoutRef<typeof Box>;

const FieldLink = (props: FieldLinkProps) => {
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

export default FieldLink;
