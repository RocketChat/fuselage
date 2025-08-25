import type { ComponentProps, Ref } from 'react';
import { forwardRef } from 'react';
import { styled, XStack, YStack, Text } from 'tamagui';

const ToggleSwitchContainer = styled(YStack, {
  name: 'ToggleSwitchContainer',
  tag: 'label',
  cursor: 'pointer',
  userSelect: 'none',
  alignItems: 'center',
  justifyContent: 'center',
});

const ToggleSwitchInput = styled(YStack, {
  name: 'ToggleSwitchInput',
  tag: 'input',
  type: 'checkbox',
  position: 'absolute',
  opacity: 0,
  width: 1,
  height: 1,
  margin: -1,
  padding: 0,
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  border: 0,
});

const ToggleSwitchFake = styled(XStack, {
  name: 'ToggleSwitchFake',
  width: 44,
  height: 24,
  borderRadius: 12,
  backgroundColor: '#E4E7EA',
  position: 'relative',
  transition: 'background-color 0.2s ease',
  alignItems: 'center',
  paddingHorizontal: 2,

  variants: {
    checked: {
      true: {
        backgroundColor: '#156FF5',
      },
    },
    disabled: {
      true: {
        backgroundColor: '#F7F8FA',
        opacity: 0.5,
      },
    },
  } as const,
});

const ToggleSwitchThumb = styled(YStack, {
  name: 'ToggleSwitchThumb',
  width: 20,
  height: 20,
  borderRadius: 10,
  backgroundColor: '#FFFFFF',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.2s ease',

  variants: {
    checked: {
      true: {
        transform: 'translateX(20px)',
      },
    },
  } as const,
});

type ToggleSwitchProps = ComponentProps<typeof ToggleSwitchContainer> & {
  checked?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
};

export const ToggleSwitch = forwardRef<HTMLInputElement, ToggleSwitchProps>(
  function ToggleSwitch(
    { checked = false, disabled = false, onChange, ...props },
    ref,
  ) {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!disabled && onChange) {
        onChange(e.target.checked);
      }
    };

    return (
      <ToggleSwitchContainer {...props}>
        <ToggleSwitchInput
          ref={ref}
          type="checkbox"
          checked={checked}
          disabled={disabled}
          onChange={handleChange}
        />
        <ToggleSwitchFake checked={checked} disabled={disabled}>
          <ToggleSwitchThumb checked={checked} />
        </ToggleSwitchFake>
      </ToggleSwitchContainer>
    );
  },
);
