import type { IconName } from '@rocket.chat/icons';
import type { ReactNode } from 'react';
import React from 'react';

import type { BoxProps } from '../Box';
import Box from '../Box';
import { Icon } from '../Icon';

/** @public */
export type CalloutProps = Omit<BoxProps, 'type' | 'name'> & {
  type?: 'info' | 'success' | 'warning' | 'danger';
  title?: ReactNode;
  children?: ReactNode;
  icon?: IconName;
};

/**
 * The `Callout` is used to get the user's attention explaining something important in the content of the current page.
 *
 * @public
 */
const Callout = ({
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

export default Callout;
