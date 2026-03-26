import type { AllHTMLAttributes, RefObject } from 'react';
import { forwardRef } from 'react';
import { useButton, type AriaButtonProps } from 'react-aria';

import { styled } from 'tamagui';

import { RcxInteractive } from '../../primitives';

// .rcx-select extends %rcx-input-box which extends %input
// Layout: inline-flex row, centered, with border/padding from input primitive
const SelectTriggerFrame = styled(RcxInteractive, {
  name: 'SelectTrigger',
  role: 'button',

  display: 'inline-flex',
  flexDirection: 'row',
  flexWrap: 'nowrap',
  alignItems: 'center',
  flexGrow: 1,
  justifyContent: 'space-between',

  minWidth: 144,
  minHeight: 40,

  paddingBlock: 8,
  paddingInline: 15, // 16 - 1px border

  // %input styles
  borderWidth: 1,
  borderStyle: 'solid',
  borderColor: '$strokeLight',
  borderRadius: '$x4',
  backgroundColor: '$surfaceLight',
  boxShadow: 'none',

  hoverStyle: {
    borderColor: '$strokeLight',
  },
  focusVisibleStyle: {
    borderColor: '$strokeHighlight',
    boxShadow: '0 0 0 2px var(--shadowHighlight)',
  },
  disabledStyle: {
    borderColor: '$strokeLight',
    backgroundColor: '$surfaceDisabled',
    cursor: 'not-allowed',
    pointerEvents: 'none',
  },

  variants: {
    invalid: {
      true: {
        borderColor: '$strokeError',
        hoverStyle: {
          borderColor: '$strokeError',
        },
        focusVisibleStyle: {
          borderColor: '$strokeError',
          boxShadow: '0 0 0 2px var(--shadowDanger)',
        },
      },
    },
    focused: {
      true: {
        borderColor: '$strokeHighlight',
        boxShadow: '0 0 0 2px var(--shadowHighlight)',
      },
    },
    small: {
      true: {
        alignItems: 'center',
        minWidth: 112,
        maxHeight: 28,
        paddingBlock: 4,
        paddingInline: 7, // 8 - 1px border
      },
    },
  } as const,
});

type SelectTriggerProps = {
  small?: boolean;
  error?: string;
  focus?: boolean;
} & AriaButtonProps &
  AllHTMLAttributes<HTMLButtonElement>;

export const SelectTrigger = forwardRef<HTMLButtonElement, SelectTriggerProps>(
  ({ small, error, isDisabled, focus, id, ...props }, ref) => {
    const { buttonProps } = useButton(
      props,
      ref as RefObject<HTMLButtonElement | null>,
    );

    return (
      <SelectTriggerFrame
        {...(buttonProps as any)}
        id={id}
        ref={ref}
        invalid={!!error || undefined}
        disabled={isDisabled || undefined}
        focused={focus || undefined}
        small={small || undefined}
      >
        {props.children}
      </SelectTriggerFrame>
    );
  },
);
