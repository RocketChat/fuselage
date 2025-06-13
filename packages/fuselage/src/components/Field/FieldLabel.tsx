import { forwardRef, type ComponentPropsWithoutRef } from 'react';

import WithErrorWrapper from '../../helpers/WithErrorWrapper';
import { Label } from '../Label';

import { FieldContext, useFieldFieldType, useFieldLabel } from './Field';

type FieldLabelProps = ComponentPropsWithoutRef<typeof Label>;

const hasSetId = (props: FieldLabelProps) => {
  if ('id' in props) {
    return true;
  }

  if ('htmlFor' in props) {
    return true;
  }

  return false;
};

export const FieldLabel = (props: FieldLabelProps) => {
  const fieldType = useFieldFieldType();

  // Keep this for backwards compatibility
  if (hasSetId(props)) {
    return <FieldLabelBase {...props} />;
  }
  if (fieldType === 'wrappedByLabel') {
    return <HiddenLabel {...props} />;
  }
  if (fieldType === 'referencedByInput') {
    return <ReferencedLabel {...props} />;
  }
  // referencedByLabel
  return <LabelFor {...props} />;
};

const ReferencedLabel = (props: FieldLabelProps) => {
  const [labelRef, id] = useFieldLabel();

  return <FieldLabelBase {...props} ref={labelRef} htmlFor={id} />;
};

const LabelFor = (props: FieldLabelProps) => {
  const [labelRef, id] = useFieldLabel();
  return <FieldLabelBase {...props} ref={labelRef} id={id} is='span' />;
};

const HiddenLabel = (props: FieldLabelProps) => {
  const [labelRef] = useFieldLabel();

  return <FieldLabelBase {...props} ref={labelRef} is='span' />;
};

const FieldLabelBase = forwardRef((props: FieldLabelProps, ref) => {
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
});
