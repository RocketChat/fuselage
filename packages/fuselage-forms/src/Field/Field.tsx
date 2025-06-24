import { Field as FieldComponent } from '@rocket.chat/fuselage';
import { ComponentProps, ReactNode } from 'react';

import FieldProvider from './FieldProvider';

function Field({
  children,
  ...props
}: { children: ReactNode } & ComponentProps<typeof FieldComponent>) {
  return (
    <FieldProvider>
      <FieldComponent {...props}>{children}</FieldComponent>
    </FieldProvider>
  );
}

export default Field;
