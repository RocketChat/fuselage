import { useToggle } from '@rocket.chat/fuselage-hooks';
import type { ComponentProps, Ref } from 'react';
import { forwardRef } from 'react';

import { Icon } from '../Icon';
import { InputBox } from '../InputBox';

// TODO: fix a11y issues

type PasswordInputProps = Omit<ComponentProps<typeof InputBox>, 'type'>;

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
          <Icon
            name={hidden ? 'eye-off' : 'eye'}
            size={20}
            onClick={handleAddonClick}
          />
        }
        ref={ref}
        {...props}
      />
    );
  }
);

PasswordInput.displayName = 'PasswordInput';

export { PasswordInput };
export default PasswordInput;
