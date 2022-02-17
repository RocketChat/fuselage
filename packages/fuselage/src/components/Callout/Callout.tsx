import type { ComponentProps, ReactNode } from 'react';
import React from 'react';

import { Box } from '../Box';
import { Icon } from '../Icon';

type CalloutProps = Omit<ComponentProps<typeof Box>, 'type' | 'name'> & {
  type?: 'info' | 'success' | 'warning' | 'danger';
  title?: ReactNode;
  children?: ReactNode;
};

export const Callout = ({
  children,
  title,
  type = 'info',
  ...props
}: CalloutProps) => {
  const iconName: 'info-circled' | 'checkmark-circled' | 'warning' | 'ban' =
    (type === 'info' && 'info-circled') ||
    (type === 'success' && 'checkmark-circled') ||
    (type === 'warning' && 'warning') ||
    (type === 'danger' && 'ban') ||
    'info-circled';

  return (
    <Box is='section' rcx-callout rcx-callout--type={type} {...props}>
      <Icon name={iconName} size='x20' />
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
