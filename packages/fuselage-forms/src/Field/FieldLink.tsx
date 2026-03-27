import { FieldLink as FieldLinkComponent } from '@rocket.chat/fuselage';
import type { ReactNode, ComponentProps } from 'react';

import { useFieldReferencedByLabel } from './FieldContext';

type FieldLinkProps = { children: ReactNode } & ComponentProps<
  typeof FieldLinkComponent
>;

const FieldLink = ({ children, ...props }: FieldLinkProps) => {
  const labelProps = useFieldReferencedByLabel();
  return (
    <FieldLinkComponent {...props} {...labelProps}>
      {children}
    </FieldLinkComponent>
  );
};

export default FieldLink;
