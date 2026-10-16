import { useToggle } from '@rocket.chat/fuselage-hooks';

import { IconButton } from '../Button';
import { InputBox, type InputBoxProps } from '../InputBox';

export type PasswordInputProps = Omit<InputBoxProps<HTMLInputElement>, 'type'>;

function PasswordInput(props: PasswordInputProps) {
  const [hidden, toggle] = useToggle(true);
  const handleAddonClick = () => {
    toggle();
  };

  return (
    <InputBox
      type={hidden ? 'password' : 'text'}
      endAddon={
        <IconButton
          icon={hidden ? 'eye-off' : 'eye'}
          small
          aria-label={hidden ? 'Show password' : 'Hide password'}
          onClick={handleAddonClick}
        />
      }
      {...props}
    />
  );
}

export default PasswordInput;
