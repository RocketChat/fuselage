import React, { forwardRef } from 'react';

import { InputBox } from '../InputBox';
import { Icon } from '../Icon';

export const PasswordInput = forwardRef(function PasswordInput(props, ref) {
  return <InputBox type='password' ref={ref} {...props} />;
});

export const PasswordInputToggle = forwardRef(function PasswordInput(props, ref) {
  const [hidden, setHidden] = useState(true);
  const handleToggle = () => {
    setHidden(!hidden);
  }
  return (
    <InputBox
      type={hidden ? 'password' : 'text'}
      addon={<Icon name={hidden ? 'eye' : 'eye-off'} size='x20' onClick={handleToggle} />}
      ref={ref}
      {...props}
    />
  );
});
