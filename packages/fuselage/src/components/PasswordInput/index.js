import React, { forwardRef, useState } from 'react';

import { Icon } from '../Icon';
import { InputBox } from '../InputBox';

export const PasswordInput = forwardRef(function PasswordInput(props, ref) {
  const [hidden, setHidden] = useState(true);
  const handleToggle = () => {
    setHidden(!hidden);
  };
  return (
    <InputBox
      type={hidden ? 'password' : 'text'}
      addon={
        <Icon
          name={hidden ? 'eye' : 'eye-off'}
          size='x20'
          onClick={handleToggle}
        />
      }
      ref={ref}
      {...props}
    />
  );
});
