import type { ComponentProps, ReactNode } from 'react';
import React from 'react';

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
  ...props
}: CalloutProps) => {
  const defaultIcon =
    (type === 'info' && 'info-circled') ||
    (type === 'success' && 'checkmark-circled') ||
    (type === 'warning' && 'warning') ||
    (type === 'danger' && 'ban') ||
    'info-circled';

  return (
    <Box is='section' rcx-callout rcx-callout--type={type} {...props}>
      <Icon name={icon || defaultIcon} size='x20' />
      <Box rcx-callout__wrapper>
        {title && (
          <Box is='h1' rcx-callout__title>
            {title}
          </Box>
        )}
        {children && <Box rcx-callout__children>{children}</Box>}
      </Box>
    </Box>
  );
};
