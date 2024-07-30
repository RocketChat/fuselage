import { useToggle } from '@rocket.chat/fuselage-hooks';
import type { ForwardedRef } from 'react';
import React, { forwardRef } from 'react';

import { Icon } from '../Icon';
import type { InputBoxProps } from '../InputBox';
import { InputBox } from '../InputBox';

// TODO: fix a11y issues

type PasswordInputProps = Omit<InputBoxProps, 'type'>;

const PasswordInput = forwardRef(function PasswordInput(
  props: PasswordInputProps,
  ref: ForwardedRef<HTMLInputElement>
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
