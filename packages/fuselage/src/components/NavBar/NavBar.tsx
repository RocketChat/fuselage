import type { HTMLAttributes } from 'react';
import { styled } from '@tamagui/core';

import { RcxView } from '../../primitives';

const NavBarFrame = styled(RcxView, {
  name: 'NavBar',
  tag: 'nav',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  paddingBlock: '$x8',
  paddingInline: '$x16',
  borderBottomWidth: 1,
  borderBottomStyle: 'solid',
  borderBottomColor: '$strokeLight',
  backgroundColor: '$surfaceSidebar',
});

export type NavBarProps = HTMLAttributes<HTMLElement>;

const NavBar = (props: NavBarProps) => <NavBarFrame {...(props as any)} />;

export default NavBar;
