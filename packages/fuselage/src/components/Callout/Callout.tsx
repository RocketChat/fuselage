import { useResizeObserver } from '@rocket.chat/fuselage-hooks';
import type { ComponentProps, ReactElement, ReactNode } from 'react';

import Box from '../Box';
import { Icon } from '../Icon';

type CalloutProps = Omit<ComponentProps<typeof Box>, 'type' | 'name'> & {
  type?: 'info' | 'success' | 'warning' | 'danger';
  title?: ReactNode;
  children?: ReactNode;
  icon?: ComponentProps<typeof Icon>['name'];
  actions?: ReactElement;
};

const WRAPPER_LIMIT_SIZE = 420;

/**
 * The `Callout` is used to get the user's attention explaining something important in the content of the current page.
 */
export const Callout = ({
  type,
  title,
  children,
  icon,
  className,
  actions,
  ...props
}: CalloutProps) => {
  const { ref, borderBoxSize } = useResizeObserver();
  const isLarge =
    borderBoxSize.inlineSize && borderBoxSize.inlineSize >= WRAPPER_LIMIT_SIZE;

  const defaultIcon =
    (type === 'info' && 'info-circled') ||
    (type === 'success' && 'checkmark-circled') ||
    (type === 'warning' && 'warning') ||
    (type === 'danger' && 'ban') ||
    'info-circled';

  return (
    <Box
      ref={ref}
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
      <Box rcx-callout__wrapper rcx-callout__wrapper--large={isLarge}>
        <Box rcx-callout__wrapper-content>
          {title && <Box rcx-callout__title>{title}</Box>}
          {children && <Box rcx-callout__content>{children}</Box>}
        </Box>
        {actions && <Box rcx-callout__actions>{actions}</Box>}
      </Box>
    </Box>
  );
};
