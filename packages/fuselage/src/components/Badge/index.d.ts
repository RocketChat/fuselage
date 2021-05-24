import { ElementType, ForwardRefExoticComponent } from 'react';

type BadgeProps = {
  is?: ElementType;
  variant?: 'primary' | 'danger' | 'warning';
  disabled?: boolean;
  className?: string;
  children?: any;
  title?: any;
};
export const Badge: ForwardRefExoticComponent<BadgeProps>;
