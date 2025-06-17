import { FieldLabel as FieldLabelComponent } from '@rocket.chat/fuselage';
import type { ComponentProps } from 'react';

import { useFieldLabel } from '../FieldContext';

const HiddenLabel = ({
  children,
  ...props
}: ComponentProps<typeof FieldLabelComponent>) => {
  const [labelRef] = useFieldLabel();

  return (
    <FieldLabelComponent {...props} ref={labelRef} is='span'>
      {children}
    </FieldLabelComponent>
  );
};

export default HiddenLabel;
