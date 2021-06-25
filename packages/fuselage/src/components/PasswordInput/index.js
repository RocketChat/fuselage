import { useToggle } from '@rocket.chat/fuselage-hooks';
import React, { forwardRef } from 'react';

import { Icon } from '../Icon';
import { InputBox } from '../InputBox';

// TODO: fix a11y issues

export const PasswordInput = forwardRef(function PasswordInput(props, ref) {
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
