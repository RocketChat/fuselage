import { FieldError as FieldErrorComponent } from '@rocket.chat/fuselage';
import type { ReactNode, ComponentProps } from 'react';

import { useFieldDescriptorId } from './FieldContext';

type FieldErrorProps = { children: ReactNode } & ComponentProps<
  typeof FieldErrorComponent
>;

const FieldError = ({ children, ...props }: FieldErrorProps) => {
  const id = useFieldDescriptorId('error');

  return (
    <FieldErrorComponent {...props} id={id}>
      {children}
    </FieldErrorComponent>
  );
};

export default FieldError;
