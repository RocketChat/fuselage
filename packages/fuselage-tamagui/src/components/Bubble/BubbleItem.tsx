import type { Keys as IconName } from '@rocket.chat/icons';
import type { ReactNode } from 'react';
import {
  GetProps,
  Text,
  View,
  createStyledContext,
  styled,
  withStaticProperties,
} from '@tamagui/web';

// Import Icon component - we'll need to create this or use existing one
// import { Icon } from '../Icon';

export const BubbleItemContext = createStyledContext({
  small: false,
  secondary: false,
});

export const BubbleItemFrame = styled(View, {
  name: 'BubbleItem',
  context: BubbleItemContext,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'row',
  textAlign: 'center',
  whiteSpace: 'nowrap',
  textDecoration: 'none',
  borderWidth: 1,
  borderStyle: 'solid',
  borderRadius: 4,
  cursor: 'pointer',
  userSelect: 'none',
  fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  fontWeight: '500',
  
  // Blue button styling (like Button primary but always blue)
  backgroundColor: '#156FF5',
  borderColor: '#156FF5',
  color: '#FFFFFF',

  variants: {
    small: {
      true: {
        height: 38,
        fontSize: 14,
        lineHeight: 16,
        paddingHorizontal: 8,
        minWidth: 56,
      },
    },
    secondary: {
      true: {
        backgroundColor: '#EBECEF',
        borderColor: '#E4E7EA',
        color: '#1F2329',
      },
      false: {
        // Blue button styling (like Button primary)
        backgroundColor: '#156FF5',
        borderColor: '#156FF5',
        color: '#FFFFFF',
      },
    },
    isGroupFirst: {
      true: {
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
      },
    },
    isGroupLast: {
      true: {
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
      },
    },
  },
});

export type BubbleItemProps = GetProps<typeof BubbleItemFrame> & {
  label?: ReactNode;
  secondary?: boolean;
  icon?: IconName;
  small?: boolean;
  isGroupFirst?: boolean;
  isGroupLast?: boolean;
};

export const BubbleItem = withStaticProperties(
  ({
    secondary = false,
    label,
    icon,
    small = false,
    isGroupFirst = false,
    isGroupLast = false,
    ...props
  }: BubbleItemProps) => (
    <BubbleItemFrame
      secondary={secondary}
      small={small}
      isGroupFirst={isGroupFirst}
      isGroupLast={isGroupLast}
      {...props}
    >
      {/* Arrow removed for now */}
      {label && (
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {label}
        </Text>
      )}
    </BubbleItemFrame>
  ),
  {
    Frame: BubbleItemFrame,
  }
);
