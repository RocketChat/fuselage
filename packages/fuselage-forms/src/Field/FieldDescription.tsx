import { FieldDescription as FieldDescriptionComponent } from '@rocket.chat/fuselage';
import type { ReactNode, ComponentProps } from 'react';

import { useFieldDescriptorId } from './FieldContext';

const FieldDescription = ({
  children,
  ...props
}: { children: ReactNode } & ComponentProps<
  typeof FieldDescriptionComponent
>) => {
  const id = useFieldDescriptorId('description');

  return (
    <FieldDescriptionComponent {...props} id={id}>
      {children}
    </FieldDescriptionComponent>
  );
};

export default FieldDescription;
