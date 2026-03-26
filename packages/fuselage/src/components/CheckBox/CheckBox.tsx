import { useMergedRefs } from '@rocket.chat/fuselage-hooks';
import type { FormEvent, AllHTMLAttributes, ReactNode } from 'react';
import {
  forwardRef,
  useLayoutEffect,
  useRef,
  useCallback,
  useState,
} from 'react';
import { styled } from 'tamagui';

import { RcxView } from '../../primitives';

// --- Styled components ---

const CheckBoxWrapper = styled(RcxView, {
  name: 'CheckBox',
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

const CheckBoxFake = styled(RcxView, {
  name: 'CheckBoxFake',

  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',

  width: 20,
  height: 20,

  borderWidth: 1,
  borderStyle: 'solid',
  borderRadius: '$x2',

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
      indeterminate: {
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

    // Indeterminate + hovered
    {
      state: 'indeterminate',
      isHovered: true,
      backgroundColor: '$buttonPrimaryHoverBg',
      borderColor: '$buttonPrimaryHoverBg',
      boxShadow: 'none',
    },
    // Indeterminate + active
    {
      state: 'indeterminate',
      isActive: true,
      backgroundColor: '$buttonPrimaryPressBg',
      borderColor: '$buttonPrimaryPressBg',
      boxShadow: 'none',
    },
    // Indeterminate + focused
    {
      state: 'indeterminate',
      isFocused: true,
      backgroundColor: '$buttonPrimaryFocusBg',
      borderColor: '$strokeExtraDark',
      boxShadow: '0 0 0 2px var(--shadowHighlight)',
    },
    // Indeterminate + disabled
    {
      state: 'indeterminate',
      isDisabled: true,
      backgroundColor: '$buttonPrimaryDisabledBg',
      borderColor: '$buttonPrimaryDisabledBg',
      color: '$buttonPrimaryDisabledColor',
      cursor: 'not-allowed',
    },
  ],
});

// Indeterminate indicator: horizontal bar
const IndeterminateIndicator = styled(RcxView, {
  name: 'CheckBoxIndeterminate',

  position: 'absolute',
  width: 12, // 0.6 * 20
  height: 2,
  borderRadius: 1,
  backgroundColor: 'currentColor',
});

// Check mark: two bars forming an L shape rotated -45deg
// Using a wrapper div with transform, containing the two bars
const CheckMarkWrapper = styled(RcxView, {
  name: 'CheckMarkWrapper',

  position: 'absolute',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  // translate(-4px, 2px) rotate(-45deg)
  transform: 'translate(-4px, 2px) rotate(-45deg)',
});

// Long bar of the checkmark (horizontal)
const CheckMarkLong = styled(RcxView, {
  name: 'CheckMarkLong',

  width: 12, // 0.6 * 20
  height: 2,
  borderRadius: 1,
  backgroundColor: 'currentColor',
  // translate(6px, 2px) relative to the wrapper
  transform: 'translate(6px, 2px)',
});

// Short bar of the checkmark (vertical)
const CheckMarkShort = styled(RcxView, {
  name: 'CheckMarkShort',

  width: 2,
  height: 6, // 0.5 * 0.6 * 20
  borderRadius: 1,
  backgroundColor: 'currentColor',
});

// --- Types ---

export type CheckBoxProps = {
  indeterminate?: boolean;
  labelChildren?: ReactNode;
  className?: string;
} & Omit<AllHTMLAttributes<HTMLInputElement>, 'is'>;

// --- Component ---

const CheckBox = forwardRef<HTMLInputElement, CheckBoxProps>(
  function CheckBox(
    { indeterminate, onChange, className, labelChildren, checked, disabled, ...props },
    ref,
  ) {
    const innerRef = useRef<HTMLInputElement>(null);
    const mergedRef = useMergedRefs(ref, innerRef);

    const [isFocused, setIsFocused] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [isActive, setIsActive] = useState(false);

    useLayoutEffect(() => {
      if (innerRef && innerRef.current && indeterminate !== undefined) {
        innerRef.current.indeterminate = indeterminate;
      }
    }, [innerRef, indeterminate]);

    const handleChange = useCallback(
      (event: FormEvent<HTMLInputElement>) => {
        if (innerRef && innerRef.current && indeterminate !== undefined) {
          innerRef.current.indeterminate = indeterminate;
        }
        onChange?.call(innerRef.current, event);
      },
      [innerRef, indeterminate, onChange],
    );

    const state = indeterminate
      ? 'indeterminate'
      : checked
        ? 'checked'
        : 'unchecked';

    return (
      <CheckBoxWrapper
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
          ref={mergedRef}
          checked={checked}
          disabled={disabled}
          onChange={handleChange}
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
        <CheckBoxFake
          aria-hidden='true'
          state={state}
          isHovered={isHovered || undefined}
          isActive={isActive || undefined}
          isFocused={isFocused || undefined}
          isDisabled={disabled || undefined}
        >
          {state === 'indeterminate' && <IndeterminateIndicator />}
          {state === 'checked' && (
            <CheckMarkWrapper>
              <CheckMarkLong />
              <CheckMarkShort />
            </CheckMarkWrapper>
          )}
        </CheckBoxFake>
      </CheckBoxWrapper>
    );
  },
);

export default CheckBox;
