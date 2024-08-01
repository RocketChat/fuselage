import type { ComponentProps, ReactNode } from 'react';

import Box from '../Box';
import { Icon } from '../Icon';

type CalloutProps = Omit<ComponentProps<typeof Box>, 'type' | 'name'> & {
  type?: 'info' | 'success' | 'warning' | 'danger';
  title?: ReactNode;
  children?: ReactNode;
  icon?: ComponentProps<typeof Icon>['name'];
};

export const Callout = ({
  type,
  title,
  children,
  icon,
  className,
  ...props
}: CalloutProps) => {
  const defaultIcon =
    (type === 'info' && 'info-circled') ||
    (type === 'success' && 'checkmark-circled') ||
    (type === 'warning' && 'warning') ||
    (type === 'danger' && 'ban') ||
    'info-circled';

  return (
    <Box
      is='section'
      className={['rcx-callout', type && `rcx-callout--${type}`, className]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      <Icon
        className='rcx-callout__icon'
        name={icon || defaultIcon}
        size='x20'
      />
      <Box rcx-callout__wrapper>
        {title && <Box rcx-callout__title>{title}</Box>}
        {children && <Box rcx-callout__content>{children}</Box>}
      </Box>
    </Box>
  );
};
