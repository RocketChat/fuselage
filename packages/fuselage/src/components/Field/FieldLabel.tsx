import type { ComponentPropsWithoutRef } from 'react';
import { forwardRef } from 'react';

import WithErrorWrapper from '../../helpers/WithErrorWrapper';
import { Label } from '../Label';

import { FieldContext } from './Field';

export type FieldLabelProps = ComponentPropsWithoutRef<typeof Label>;

const FieldLabel = forwardRef<HTMLElement, FieldLabelProps>(
  function FieldLabel(props, ref) {
    const component = <Label rcx-field__label {...props} ref={ref} />;
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
  },
);

export default FieldLabel;
