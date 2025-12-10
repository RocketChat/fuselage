import type { ReactNode, AllHTMLAttributes } from 'react';
import { VisuallyHidden } from '@react-aria/visually-hidden';

type FieldLegendProps = {
  children: ReactNode;
} & AllHTMLAttributes<HTMLLegendElement>;

export const FieldLegend = ({ children, ...props }: FieldLegendProps) => (
  <VisuallyHidden>
    <legend aria-hidden="true" {...props}>
      {children}
    </legend>
  </VisuallyHidden>
);
