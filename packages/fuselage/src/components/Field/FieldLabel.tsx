import { forwardRef } from 'react';

import WithErrorWrapper from '../../helpers/WithErrorWrapper';
import type { LabelProps } from '../Label';
import { Label } from '../Label';

import { FieldContext } from './Field';

export type FieldLabelProps = LabelProps & {
  [key: string]: any;
};

const FieldLabel = forwardRef<HTMLElement, FieldLabelProps>(
  function FieldLabel(props, ref) {
    const component = (
      <Label
        alignSelf='flex-start'
        marginBlock='$x2'
        marginInlineEnd='$x8'
        {...props}
        ref={ref}
      />
    );

    if (process.env['NODE_ENV'] === 'development') {
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
