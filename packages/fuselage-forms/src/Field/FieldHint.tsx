import { FieldHint as FieldHintComponent } from '@rocket.chat/fuselage';
import type { ReactNode, ComponentProps } from 'react';

import { useFieldDescriptorId } from './FieldContext';

const FieldHint = ({
  children,
  ...props
}: { children: ReactNode } & ComponentProps<typeof FieldHintComponent>) => {
  const id = useFieldDescriptorId('hint');

  return (
    <FieldHintComponent {...props} id={id}>
      {children}
    </FieldHintComponent>
  );
};

export default FieldHint;
