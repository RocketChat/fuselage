import type { AllHTMLAttributes, ReactNode } from 'react';
import { forwardRef, useState } from 'react';
import { styled } from 'tamagui';

import { RcxView } from '../../primitives';

// --- Styled components ---

const RadioButtonWrapper = styled(RcxView, {
  name: 'RadioButton',
  tag: 'label',

  position: 'relative',
  display: 'inline-flex',
  flexDirection: 'row',
  verticalAlign: 'middle',
  cursor: 'pointer',

  variants: {
    isDisabled: {
      true: {
        cursor: 'not-allowed',
      },
    },
  } as const,
});

const RadioButtonFake = styled(RcxView, {
  name: 'RadioButtonFake',

  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',

  width: 20,
  height: 20,

  borderWidth: 1,
  borderStyle: 'solid',
  borderRadius: '$full',

  // Default unchecked (empty) state
  backgroundColor: '$surfaceLight',
  borderColor: '$strokeDark',
  color: '$fontWhite',

  variants: {
    state: {
      unchecked: {
        backgroundColor: '$surfaceLight',
        borderColor: '$strokeDark',
        color: '$fontWhite',
      },
      checked: {
        backgroundColor: '$buttonPrimaryBg',
        borderColor: '$buttonPrimaryBg',
        color: '$buttonPrimaryColor',
      },
    },

    isHovered: {
      true: {},
    },

    isActive: {
      true: {},
    },

    isFocused: {
      true: {},
    },

    isDisabled: {
      true: {},
    },
  } as const,

  compoundVariants: [
    // Unchecked + hovered
    {
      state: 'unchecked',
      isHovered: true,
      backgroundColor: '$surfaceLight',
      borderColor: '$strokeExtraDark',
      boxShadow: 'none',
    },
    // Unchecked + active
    {
      state: 'unchecked',
      isActive: true,
      backgroundColor: '$surfaceLight',
      borderColor: '$strokeExtraDark',
      boxShadow: 'none',
    },
    // Unchecked + focused
    {
      state: 'unchecked',
      isFocused: true,
      backgroundColor: '$surfaceLight',
      borderColor: '$strokeExtraDark',
      boxShadow: '0 0 0 2px var(--shadowHighlight)',
    },
    // Unchecked + disabled
    {
      state: 'unchecked',
      isDisabled: true,
      backgroundColor: '$buttonSecondaryDisabledBg',
      borderColor: '$strokeLight',
      color: '$fontWhite',
      cursor: 'not-allowed',
    },

    // Checked + hovered
    {
      state: 'checked',
      isHovered: true,
      backgroundColor: '$buttonPrimaryHoverBg',
      borderColor: '$buttonPrimaryHoverBg',
      boxShadow: 'none',
    },
    // Checked + active
    {
      state: 'checked',
      isActive: true,
      backgroundColor: '$buttonPrimaryPressBg',
      borderColor: '$buttonPrimaryPressBg',
      boxShadow: 'none',
    },
    // Checked + focused
    {
      state: 'checked',
      isFocused: true,
      backgroundColor: '$buttonPrimaryFocusBg',
      borderColor: '$strokeExtraDark',
      boxShadow: '0 0 0 2px var(--shadowHighlight)',
    },
    // Checked + disabled
    {
      state: 'checked',
      isDisabled: true,
      backgroundColor: '$buttonPrimaryDisabledBg',
      borderColor: '$buttonPrimaryDisabledBg',
      color: '$buttonPrimaryDisabledColor',
      cursor: 'not-allowed',
    },
  ],
});

// Radio dot: 0.3 * 20 = 6px circle
const RadioDot = styled(RcxView, {
  name: 'RadioDot',

  width: 6,
  height: 6,
  borderRadius: '$full',
  backgroundColor: 'currentColor',
});

// --- Types ---

export type RadioButtonProps = {
  labelChildren?: ReactNode;
  className?: string;
} & Omit<AllHTMLAttributes<HTMLInputElement>, 'is'>;

// --- Component ---

const RadioButton = forwardRef<HTMLInputElement, RadioButtonProps>(
  function RadioButton({ className, labelChildren, checked, disabled, ...props }, ref) {
    const [isFocused, setIsFocused] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [isActive, setIsActive] = useState(false);

    const state = checked ? 'checked' : 'unchecked';

    return (
      <RadioButtonWrapper
        className={className}
        isDisabled={disabled || undefined}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          setIsActive(false);
        }}
        onMouseDown={() => setIsActive(true)}
        onMouseUp={() => setIsActive(false)}
      >
        {labelChildren}
        <input
          type='radio'
          ref={ref}
          checked={checked}
          disabled={disabled}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          style={{
            position: 'absolute',
            width: 1,
            height: 1,
            padding: 0,
            margin: -1,
            overflow: 'hidden',
            clip: 'rect(0, 0, 0, 0)',
            whiteSpace: 'nowrap',
            borderWidth: 0,
          }}
          {...props}
        />
        <RadioButtonFake
          aria-hidden='true'
          state={state}
          isHovered={isHovered || undefined}
          isActive={isActive || undefined}
          isFocused={isFocused || undefined}
          isDisabled={disabled || undefined}
        >
          {state === 'checked' && <RadioDot />}
        </RadioButtonFake>
      </RadioButtonWrapper>
    );
  },
);

export default RadioButton;
