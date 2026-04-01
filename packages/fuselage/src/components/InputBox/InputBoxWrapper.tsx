import { styled } from '@tamagui/core';

import { RcxView } from '../../primitives';

// InputBoxWrapper — the outer container that provides border/bg/focus states
// Original: .rcx-input-box__wrapper extends %rcx-input-box which extends %input
// It's a <label> in original (via Box is={Label}), but we use RcxView + role

const InputBoxWrapperFrame = styled(RcxView, {
  name: 'InputBoxWrapper',
  tag: 'label',

  position: 'relative',
  display: 'inline-flex',
  flexDirection: 'row',
  flexWrap: 'nowrap',
  alignItems: 'flex-start',
  flexGrow: 1,

  minWidth: 144,

  paddingBlock: 8,
  paddingInline: 15, // 16 - 1px border

  // word-break not supported as styled prop, applied via className rcx-box

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

  // Note: focus-within is needed to react to inner input focus.
  // Tamagui doesn't have focusWithinStyle, so we handle this via
  // the 'focus' className approach or JS state in the parent.

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

export type InputBoxWrapperProps = {
  invalid?: boolean;
  focused?: boolean;
  small?: boolean;
  disabled?: boolean;
  hidden?: boolean;
  invisible?: boolean;
  className?: string | (string | undefined | false | null)[];
  children?: React.ReactNode;
};

const InputBoxWrapper = ({
  className,
  disabled,
  ...props
}: InputBoxWrapperProps) => (
  <InputBoxWrapperFrame
    disabled={disabled || undefined}
    {...(props as any)}
  />
);

export default InputBoxWrapper;
