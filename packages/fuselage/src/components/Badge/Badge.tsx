import type { ElementType, HTMLAttributes } from 'react';

import { prependClassName } from '../../helpers/prependClassName';

export type BadgeProps = {
  is?: ElementType<HTMLAttributes<HTMLSpanElement>>;
  variant?: 'secondary' | 'primary' | 'danger' | 'warning' | 'ghost';
  small?: boolean;
  disabled?: boolean;
  className?: string;
  children?: any;
  title?: any;
} & HTMLAttributes<HTMLSpanElement>;

/**
 * Communicates notification’s amount and types.
 */
function Badge({
  is: Tag = 'span',
  variant = 'secondary',
  small,
  className,
  disabled,
  ...props
}: BadgeProps) {
  const modifiers = [variant, small && 'small', disabled && 'disabled']
    .filter(Boolean)
    .map((modifier) => `rcx-badge--${modifier}`)
    .join(' ');

  return (
    <Tag
      className={prependClassName(
        className,
        `rcx-box rcx-box--full rcx-badge rcx-d-flex rcx-overflow-hidden rcx-justify-center rcx-text-center rcx-rounded-full rcx-font-micro rcx-pbs-2 rcx-pbe-2 rcx-pis-4 rcx-pie-4 ${modifiers}`,
      )}
      {...props}
    />
  );
}

export default Badge;
