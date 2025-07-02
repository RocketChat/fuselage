import { FieldError as FieldErrorComponent } from '@rocket.chat/fuselage';
import type { ReactNode, ComponentProps } from 'react';

import { useFieldDescriptorId } from './FieldContext';

const FieldError = ({
  children,
  ...props
}: { children: ReactNode } & ComponentProps<typeof FieldErrorComponent>) => {
  const id = useFieldDescriptorId('error');

  return (
    <FieldErrorComponent {...props} id={id}>
      {children}
    </FieldErrorComponent>
  );
};

export default FieldError;
