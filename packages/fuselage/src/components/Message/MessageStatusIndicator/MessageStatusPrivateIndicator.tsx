import type { ReactNode } from 'react';

import type { MessageStatusIndicatorItemProps } from './MessageStatusIndicatorItem';

export type MessageStatusPrivateIndicatorProps = {
  children?: ReactNode;
  variant?: MessageStatusIndicatorItemProps['variant'];
};

const variantColorMap: Record<string, string> = {
  success: 'var(--statusFontOnSuccess)',
  danger: 'var(--statusFontOnDanger)',
  warning: 'var(--statusFontOnWarning)',
  primary: 'var(--statusFontOnInfo)',
};

const MessageStatusPrivateIndicator = ({
  children,
  variant,
}: MessageStatusPrivateIndicatorProps) => (
  <span
    className='rcx-box'
    style={{
      color: variant ? variantColorMap[variant] : 'var(--fontSecondaryInfo)',
    }}
  >
    {children}
  </span>
);

export default MessageStatusPrivateIndicator;
