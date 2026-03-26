import type { AllHTMLAttributes, ReactNode } from 'react';
import { forwardRef, useState } from 'react';
import { styled } from 'tamagui';

import { RcxView } from '../../primitives';

// --- Styled components ---

const ToggleSwitchWrapper = styled(RcxView, {
  name: 'ToggleSwitch',
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

const ToggleSwitchFake = styled(RcxView, {
  name: 'ToggleSwitchFake',

  position: 'relative',

  width: 36, // 2 * 18
  height: 18, // 20 - 2*1 (border)

  borderWidth: 1,
  borderStyle: 'solid',
  borderRadius: '$full',

  // Default unchecked (off) state
  backgroundColor: '$strokeMedium',
  borderColor: '$strokeMedium',
  color: '$fontWhite',

  variants: {
    state: {
      unchecked: {
        backgroundColor: '$strokeMedium',
        borderColor: '$strokeMedium',
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
    // Unchecked (off) + hovered
    {
      state: 'unchecked',
      isHovered: true,
      backgroundColor: '$fontHint',
      borderColor: '$fontHint',
      boxShadow: 'none',
    },
    // Unchecked + active
    {
      state: 'unchecked',
      isActive: true,
      backgroundColor: '$strokeDark',
      borderColor: '$strokeDark',
      boxShadow: 'none',
    },
    // Unchecked + focused
    {
      state: 'unchecked',
      isFocused: true,
      backgroundColor: '$strokeMedium',
      borderColor: '$strokeExtraDark',
      boxShadow: '0 0 0 2px var(--shadowHighlight)',
    },
    // Unchecked + disabled
    {
      state: 'unchecked',
      isDisabled: true,
      backgroundColor: '$buttonSecondaryDisabledBg',
      borderColor: '$buttonSecondaryDisabledBg',
      color: '$buttonSecondaryDisabledColor',
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

// Toggle knob: 14px circle
const ToggleKnob = styled(RcxView, {
  name: 'ToggleKnob',

  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',

  width: 14, // 16 - 2*1 (border)
  height: 14,
  borderRadius: '$full',

  // Default: on-primary = white
  backgroundColor: '$fontPureWhite',

  variants: {
    state: {
      unchecked: {
        left: 1,
      },
      checked: {
        // calc(100% - 15px) = toggle width(36) - border(2) - knob(14) - offset(1) from right = inset 19px from left
        left: 'calc(100% - 15px)',
      },
    },

    isDisabled: {
      true: {},
    },
  } as const,

  compoundVariants: [
    // Disabled unchecked: knob uses on-secondary-disabled color
    {
      state: 'unchecked',
      isDisabled: true,
      backgroundColor: '$buttonSecondaryDisabledColor',
    },
    // Disabled checked: knob stays white (on-primary)
    {
      state: 'checked',
      isDisabled: true,
      backgroundColor: '$fontPureWhite',
    },
  ],
});

// --- Types ---

export type ToggleSwitchProps = {
  labelChildren?: ReactNode;
  className?: string;
} & Omit<AllHTMLAttributes<HTMLInputElement>, 'is'>;

// --- Component ---

const ToggleSwitch = forwardRef<HTMLInputElement, ToggleSwitchProps>(
  function ToggleSwitch({ className, labelChildren, checked, disabled, ...props }, ref) {
    const [isFocused, setIsFocused] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [isActive, setIsActive] = useState(false);

    const state = checked ? 'checked' : 'unchecked';

    return (
      <ToggleSwitchWrapper
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
          type='checkbox'
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
        <ToggleSwitchFake
          aria-hidden='true'
          state={state}
          isHovered={isHovered || undefined}
          isActive={isActive || undefined}
          isFocused={isFocused || undefined}
          isDisabled={disabled || undefined}
        >
          <ToggleKnob
            state={state}
            isDisabled={disabled || undefined}
          />
        </ToggleSwitchFake>
      </ToggleSwitchWrapper>
    );
  },
);

export default ToggleSwitch;
