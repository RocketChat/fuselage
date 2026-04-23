import { useToggle } from '@rocket.chat/fuselage-hooks';
import { forwardRef } from 'react';

import { IconButton } from '../Button';
import { InputBox, type InputBoxProps } from '../InputBox';



export type PasswordInputProps = Omit<InputBoxProps, 'type'>;

const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  function PasswordInput(props, ref) {
    const [hidden, toggle] = useToggle(true);
    const handleAddonClick = () => {
      toggle();
    };

    return (
      <InputBox
        type={hidden ? 'password' : 'text'}
        addon={
          <IconButton
            icon={hidden ? 'eye-off' : 'eye'}
            mini
            onClick={handleAddonClick}
            role="button"
            tabIndex={0}
            aria-label={hidden ? "Show password" : "Hide password"}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handleAddonClick(); } }}
          />
        }
        ref={ref}
        {...props}
      />
    );
  },
);

export default PasswordInput;
