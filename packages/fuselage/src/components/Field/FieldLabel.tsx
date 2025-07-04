import type { ComponentPropsWithoutRef } from 'react';

import WithErrorWrapper from '../../helpers/WithErrorWrapper';
import { Label } from '../Label';

import { FieldContext } from './Field';

type FieldLabelProps = ComponentPropsWithoutRef<typeof Label>;

export const FieldLabel = (props: FieldLabelProps) => {
  const component = <Label rcx-field__label {...props} />;

  if (process.env.NODE_ENV === 'development') {
    return (
      <WithErrorWrapper
        context={FieldContext}
        parentComponent='Field'
        componentName={FieldLabel.name}
      >
        {component}
      </WithErrorWrapper>
    );
  }

  return component;
};
