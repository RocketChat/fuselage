import { useToggle } from '@rocket.chat/fuselage-hooks';
import type { AllHTMLAttributes, ComponentProps, ReactNode, Ref } from 'react';
import { forwardRef } from 'react';

import { Icon } from '../Icon/index.js';
import { InputBox } from '../InputBox/index.js';

// TODO: fix a11y issues
type PasswordInputProps = ComponentProps<typeof InputBox> & {
  indeterminate?: boolean;
  labelChildren?: ReactNode;
} & AllHTMLAttributes<HTMLInputElement>;

const PasswordInput = forwardRef(function PasswordInput(
  props: Omit<PasswordInputProps, 'type'>,
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
