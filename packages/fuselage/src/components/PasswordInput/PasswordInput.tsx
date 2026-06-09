import { useToggle } from '@rocket.chat/fuselage-hooks';
import type { KeyboardEvent } from 'react';
import { forwardRef } from 'react';

import { Icon } from '../Icon';
import { InputBox, type InputBoxProps } from '../InputBox';

export type PasswordInputProps = Omit<InputBoxProps, 'type'>;

const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  function PasswordInput({ disabled, ...props }, ref) {
    const [hidden, toggle] = useToggle(true);
    const handleAddonClick = () => {
      if (disabled) {
        return;
      }

      toggle();
    };
    const handleAddonKeyDown = (event: KeyboardEvent<HTMLElement>) => {
      if (event.key !== 'Enter' && event.key !== ' ') {
        return;
      }

      event.preventDefault();
      handleAddonClick();
    };

    return (
      <InputBox
        type={hidden ? 'password' : 'text'}
        addon={
          <Icon
            aria-label={hidden ? 'Show password' : 'Hide password'}
            aria-hidden={false}
            aria-disabled={disabled || undefined}
            aria-pressed={!hidden}
            name={hidden ? 'eye-off' : 'eye'}
            role='button'
            size={20}
            tabIndex={disabled ? -1 : 0}
            onClick={handleAddonClick}
            onKeyDown={handleAddonKeyDown}
          />
        }
        disabled={disabled}
        ref={ref}
        {...props}
      />
    );
  },
);

export default PasswordInput;
