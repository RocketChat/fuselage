import type { ElementType, ReactNode } from 'react';

import { prependClassName } from '../../helpers/prependClassName';

/** @public */
export type BadgeProps = {
  is?: ElementType;
  variant?: 'secondary' | 'primary' | 'danger' | 'warning' | 'ghost';
  small?: boolean;
  disabled?: boolean;
  className?: string;
  children?: ReactNode;
  title?: ReactNode;
};

/**
 * Communicates notification’s amount and types.
 *
 * @public
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
        `rcx-box rcx-box--full rcx-badge ${modifiers}`
      )}
      {...props}
    />
  );
}

export default Badge;
