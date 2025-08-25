import type { Keys as IconName } from '@rocket.chat/icons';
import type { ReactNode } from 'react';
import {
  GetProps,
  View,
  createStyledContext,
  styled,
  withStaticProperties,
} from '@tamagui/web';

import { BubbleButton } from './BubbleButton';
import { BubbleItem } from './BubbleItem';

export const BubbleContext = createStyledContext({
  small: false,
  secondary: false,
});

export const BubbleFrame = styled(View, {
  name: 'Bubble',
  context: BubbleContext,
  display: 'flex',
  alignItems: 'center',
  overflow: 'hidden',

  variants: {
    small: {
      true: {
        // Small variant styling will be handled by child components
      },
    },
    hasDismiss: {
      true: {
        // Group styling for when dismiss button is present
      },
    },
  },
});

export type BubbleProps = GetProps<typeof BubbleFrame> & {
  secondary?: boolean;
  children: ReactNode;
  small?: boolean;
  onClick?: () => void;
  icon?: IconName;
  onDismiss?: () => void;
  contentProps?: Omit<GetProps<typeof BubbleButton>, 'onClick'>;
  dismissProps?: Omit<GetProps<typeof BubbleButton>, 'onClick'>;
};

export const Bubble = withStaticProperties(
  ({
    secondary = false,
    children,
    onClick,
    icon,
    onDismiss,
    small = false,
    contentProps,
    dismissProps,
    ...props
  }: BubbleProps) => (
    <BubbleFrame
      hasDismiss={!!onDismiss}
      small={small}
      {...props}
    >
      {onClick ? (
        <BubbleButton
          onClick={onClick}
          secondary={secondary}
          icon={icon}
          label={children}
          small={small}
          isGroupFirst={true}
          isGroupLast={!onDismiss}
          {...contentProps}
        />
      ) : (
        <BubbleItem
          secondary={secondary}
          icon={icon}
          label={children}
          small={small}
          isGroupFirst={true}
          isGroupLast={!onDismiss}
          {...contentProps}
        />
      )}
      {onDismiss && (
        <BubbleButton
          onClick={onDismiss}
          secondary={secondary}
          icon="cross-small"
          small={small}
          isGroupFirst={false}
          isGroupLast={true}
          aria-label={`Dismiss ${children}`}
          {...dismissProps}
        />
      )}
    </BubbleFrame>
  ),
  {
    Button: BubbleButton,
    Item: BubbleItem,
  }
);
