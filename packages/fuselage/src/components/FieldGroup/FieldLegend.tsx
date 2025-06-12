import type { ReactNode, ComponentPropsWithoutRef } from 'react';
import { VisuallyHidden } from '@react-aria/visually-hidden';

type FieldLegendProps = {
  children: ReactNode;
} & ComponentPropsWithoutRef<'legend'>;

export const FieldLegend = ({ children, ...props }: FieldLegendProps) => (
  <VisuallyHidden>
    <legend className="rcx-field-legend" {...props}>
      {children}
    </legend>
  </VisuallyHidden>
);
