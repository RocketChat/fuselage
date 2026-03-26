import type { ReactNode } from 'react';
import { styled } from 'tamagui';

import { RcxView } from '../../primitives';

// .rcx-option__input
const StyledOptionInput = styled(RcxView, {
  name: 'OptionInput',

  display: 'flex',

  justifyContent: 'flex-end',
  alignItems: 'center',

  minWidth: '$x20',
  minHeight: '$x20',
  marginInlineStart: '$x16',
  marginInlineEnd: -12,
});

export type OptionInputProps = {
  children?: ReactNode;
};

const OptionInput = (props: OptionInputProps) => (
  <StyledOptionInput {...props} />
);

export default OptionInput;
