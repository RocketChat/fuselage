import type { Keys as IconName } from '@rocket.chat/icons';
import type { AllHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';

import { Box, type BoxProps } from '../Box';

import { BubbleButton } from './BubbleButton';
import { BubbleItem } from './BubbleItem';

export type BubbleProps = {
  secondary?: boolean;
  children: ReactNode;
  small?: boolean;
  elevation?: BoxProps['elevation'];
  onClick?: () => void;
  icon?: IconName;
  onDismiss?: () => void;
  contentProps?: Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'>;
  dismissProps?: Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'>;
} & Omit<AllHTMLAttributes<HTMLDivElement>, 'onClick' | 'is'>;

const Bubble = ({
  secondary,
  children,
  onClick,
  icon,
  onDismiss,
  small,
  elevation,
  contentProps,
  dismissProps,
  ...props
}: BubbleProps) => (
  <Box
    rcx-bubble
    rcx-bubble__group={!!onDismiss}
    rcx-bubble--small={small}
    rcx-bubble--elevation={elevation}
    {...props}
  >
    {onClick ? (
      <BubbleButton
        onClick={onClick}
        secondary={secondary}
        icon={icon}
        label={children}
        {...contentProps}
      />
    ) : (
      <BubbleItem
        secondary={secondary}
        icon={icon}
        label={children}
        {...contentProps}
      />
    )}
    {onDismiss && (
      <BubbleButton
        onClick={onDismiss}
        secondary={secondary}
        icon='cross-small'
        {...{ 'aria-label': `Dismiss ${children}`, ...dismissProps }}
      />
    )}
  </Box>
);

export default Bubble;
