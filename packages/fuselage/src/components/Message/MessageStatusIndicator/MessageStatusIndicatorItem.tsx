import type { AllHTMLAttributes } from 'react';

import { Icon, type IconProps } from '../../Icon';

export type MessageStatusIndicatorItemProps = {
  name: IconProps['name'];
  variant?: 'success' | 'danger' | 'warning' | 'primary';
} & Omit<AllHTMLAttributes<HTMLElement>, 'is'>;

const variantColorMap: Record<string, string> = {
  success: 'var(--statusFontOnSuccess)',
  danger: 'var(--statusFontOnDanger)',
  warning: 'var(--statusFontOnWarning)',
  primary: 'var(--statusFontOnInfo)',
};

const MessageStatusIndicatorItem = ({
  name,
  variant,
  ...props
}: MessageStatusIndicatorItemProps) => (
  <Icon
    name={name}
    size='x16'
    color={variant ? undefined : 'secondary-info'}
    style={variant ? { color: variantColorMap[variant] } : undefined}
    {...props}
  />
);

export default MessageStatusIndicatorItem;
