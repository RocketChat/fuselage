import type { HTMLAttributes } from 'react';
import { styled } from '@tamagui/core';

import { RcxView } from '../../primitives';

// .rcx-option__menu-wrapper
const StyledOptionMenu = styled(RcxView, {
  name: 'OptionMenu',

  className: 'rcx-box rcx-box--animated',

  flexShrink: 0,

  width: 0,
  height: '100%',

  opacity: 0,
});

export type OptionMenuProps = HTMLAttributes<HTMLDivElement>;

const OptionMenu = (props: OptionMenuProps) => (
  <StyledOptionMenu {...(props as any)} />
);

export default OptionMenu;
