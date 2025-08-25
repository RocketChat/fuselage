import { styled, Text, GetProps } from 'tamagui';
import { forwardRef } from 'react';

const StyledBadge = styled(Text, {
  name: 'Badge',
  
  display: 'flex',
  overflow: 'hidden',
  justifyContent: 'center',
  alignItems: 'center',
  
  width: 'fit-content',
  minWidth: 16,
  minHeight: 16,
  
  paddingHorizontal: 8,
  paddingVertical: 4,
  
  textAlign: 'center',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  wordBreak: 'keep-all',
  
  borderRadius: 9999,
  fontSize: 10,
  lineHeight: 12,
  fontWeight: '500',
  fontFamily: 'system-ui, -apple-system, sans-serif',

  variants: {
    variant: {
      primary: {
        color: '#FFFFFF',
        backgroundColor: '#156FF5',
      },
      secondary: {
        color: '#FFFFFF',
        backgroundColor: '#6C757D',
      },
      danger: {
        color: '#FFFFFF',
        backgroundColor: '#DC3545',
      },
      warning: {
        color: '#FFFFFF',
        backgroundColor: '#FFC107',
      },
      ghost: {
        color: '#FFFFFF',
        backgroundColor: '#495057',
      },
    },
    disabled: {
      true: {
        color: '#6C757D',
        backgroundColor: '#F8F9FA',
      },
    },
    small: {
      true: {
        minWidth: 8,
        minHeight: 8,
        paddingHorizontal: 2,
        fontSize: 8,
        lineHeight: 8,
      },
    },
  } as const,
  
  defaultVariants: {
    variant: 'secondary',
  },
});

export type BadgeProps = GetProps<typeof StyledBadge> & {
  is?: any;
  children?: any;
  title?: any;
  className?: string;
};

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  function Badge({ is: Tag = 'span', className, title, ...props }, ref) {
    return (
      <StyledBadge
        as={Tag}
        ref={ref}
        className={className}
        title={title}
        {...props}
      />
    );
  }
);
