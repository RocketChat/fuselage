import { useToggle } from '@rocket.chat/fuselage-hooks';
import type { Ref } from 'react';
import { forwardRef } from 'react';

import { Icon } from '../Icon';
import { InputBox, type InputBoxProps } from '../InputBox';

// TODO: fix a11y issues

type PasswordInputProps = Omit<InputBoxProps, 'type'>;

const PasswordInput = forwardRef(function PasswordInput(
  props: PasswordInputProps,
  ref: Ref<HTMLInputElement>,
) {
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
});

export default PasswordInput;
