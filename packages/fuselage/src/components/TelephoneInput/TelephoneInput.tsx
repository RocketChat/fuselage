import { InputBox, type InputBoxProps } from '../InputBox';

export type TelephoneInputProps = Omit<InputBoxProps<HTMLInputElement>, 'type'>;

/**
 * An input for telephone numbers.
 */
function TelephoneInput(props: TelephoneInputProps) {
  return <InputBox type='tel' {...props} />;
}

export default TelephoneInput;
