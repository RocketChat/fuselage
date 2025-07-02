import { FieldLabel as FieldLabelComponent } from '@rocket.chat/fuselage';
import type { ComponentProps } from 'react';

import { useFieldLabel } from '../FieldContext';

const ReferencedLabel = ({
  children,
  ...props
}: ComponentProps<typeof FieldLabelComponent>) => {
  const [labelRef, id] = useFieldLabel();

  return (
    <FieldLabelComponent {...props} ref={labelRef} htmlFor={id}>
      {children}
    </FieldLabelComponent>
  );
};

export default ReferencedLabel;
