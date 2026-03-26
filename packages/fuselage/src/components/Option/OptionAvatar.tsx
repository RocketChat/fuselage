import type { ReactNode } from 'react';
import { styled } from 'tamagui';

import { RcxView } from '../../primitives';

// .rcx-option__avatar — extends %column
const StyledOptionAvatar = styled(RcxView, {
  name: 'OptionAvatar',

  flexGrow: 0,
  flexShrink: 0,
  flexBasis: 'auto',

  marginInline: '$x4',
});

export type OptionAvatarProps = {
  children?: ReactNode;
};

const OptionAvatar = (props: OptionAvatarProps) => (
  <StyledOptionAvatar {...props} />
);

export default OptionAvatar;
