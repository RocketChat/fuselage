import type { AllHTMLAttributes, ReactNode } from 'react';

import { prependClassName } from '../../helpers/prependClassName';
import Box from '../Box/Box';

type TagProps = {
  medium?: boolean;
  large?: boolean;
  variant?:
    | 'primary'
    | 'secondary'
    | 'danger'
    | 'warning'
    | 'secondary-danger'
    | 'featured';
  disabled?: boolean;
  icon?: ReactNode;
} & Omit<AllHTMLAttributes<HTMLSpanElement | HTMLAnchorElement>, 'is'>;

/**
 * Used for mentions
 */
export const Tag = ({
  large,
  medium,
  className,
  disabled,
  onClick,
  variant,
  children,
  icon,
  href,
  ...props
}: TagProps) => {
  const modifiers = [
    variant,
    medium && 'medium',
    large && 'large',
    disabled && 'disabled',
    onClick && 'clickable',
    href && 'clickable',
  ]
    .filter(Boolean)
    .map((modifier) => `rcx-tag--${modifier}`)
    .join(' ');

  return (
    <Box
      is={href ? 'a' : 'span'}
      className={prependClassName(className as string, `rcx-tag ${modifiers}`)}
      onClick={onClick}
      href={href}
      {...props}
    >
      {icon}
      <span className='rcx-tag__inner'>{children}</span>
    </Box>
  );
};
