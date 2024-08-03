import type { ReactNode } from 'react';

type OptionInputProps = {
  children?: ReactNode;
};

const OptionInput = (props: OptionInputProps) => (
  <div className='rcx-option__input' {...props} />
);

export default OptionInput;
