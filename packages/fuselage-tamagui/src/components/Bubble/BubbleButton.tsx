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

export const BubbleButtonContext = createStyledContext({
  small: false,
  secondary: false,
});

export const BubbleButtonFrame = styled(View, {
  name: 'BubbleButton',
  context: BubbleButtonContext,
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
  
  hoverStyle: {
    backgroundColor: '#095AD2',
    borderColor: '#095AD2',
    cursor: 'pointer',
  },
  pressStyle: {
    backgroundColor: '#10529E',
    borderColor: '#10529E',
  },
  focusVisibleStyle: {
    backgroundColor: '#095AD2',
    borderColor: '#156FF5',
    outline: '2px solid #156FF5',
    outlineOffset: 2,
  },

  variants: {
        size: {
      tiny: {
        height: 34,
        paddingHorizontal: 8,
        minWidth: 24,
        fontSize: 12,
        lineHeight: 16,
      },
      mini: {
        height: 30,
        paddingHorizontal: 8,
        minWidth: 20,
        fontSize: 12,
        lineHeight: 16,
      },
      small: {
        height: 38,
        paddingHorizontal: 8,
        minWidth: 56,
        fontSize: 14,
        lineHeight: 16,
      },
      medium: {
        height: 42,
        paddingHorizontal: 12,
        minWidth: 64,
        fontSize: 14,
        lineHeight: 16,
      },
      large: {
        height: 58,
        paddingHorizontal: 24,
        minWidth: 96,
        fontSize: 18,
        lineHeight: 28,
      },
      $true: {
        height: 50,
        paddingHorizontal: 16,
        minWidth: 80,
        fontSize: 18,
        lineHeight: 28,
      },
    },
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
        hoverStyle: {
          backgroundColor: '#EEEFF1',
          borderColor: '#D7DBE0',
          cursor: 'pointer',
        },
        pressStyle: {
          backgroundColor: '#E4E7EA',
          borderColor: '#CBCED1',
        },
        focusVisibleStyle: {
          backgroundColor: '#EEEFF1',
          borderColor: '#156FF5',
          outline: '2px solid #156FF5',
          outlineOffset: 2,
        },
      },
      false: {
        // Blue button styling (like Button primary)
        backgroundColor: '#156FF5',
        borderColor: '#156FF5',
        color: '#FFFFFF',
        hoverStyle: {
          backgroundColor: '#095AD2',
          borderColor: '#095AD2',
          cursor: 'pointer',
        },
        pressStyle: {
          backgroundColor: '#10529E',
          borderColor: '#10529E',
        },
        focusVisibleStyle: {
          backgroundColor: '#095AD2',
          borderColor: '#156FF5',
          outline: '2px solid #156FF5',
          outlineOffset: 2,
        },
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

export type BubbleButtonProps = GetProps<typeof BubbleButtonFrame> & {
  onClick: () => void;
  label?: ReactNode;
  secondary?: boolean;
  icon?: IconName;
  small?: boolean;
  isGroupFirst?: boolean;
  isGroupLast?: boolean;
};

export const BubbleButton = withStaticProperties(
  ({
    secondary = false,
    label,
    onClick,
    icon,
    small = false,
    isGroupFirst = false,
    isGroupLast = false,
    ...props
  }: BubbleButtonProps) => (
    <BubbleButtonFrame
      secondary={secondary}
      small={small}
      isGroupFirst={isGroupFirst}
      isGroupLast={isGroupLast}
      onClick={onClick}
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
    </BubbleButtonFrame>
  ),
  {
    Frame: BubbleButtonFrame,
  }
);
