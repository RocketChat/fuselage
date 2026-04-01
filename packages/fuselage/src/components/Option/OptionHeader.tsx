import type { ReactNode } from 'react';
import { styled } from '@tamagui/core';

import { RcxText } from '../../primitives';

// .rcx-option__header
const StyledOptionHeader = styled(RcxText, {
  name: 'OptionHeader',

  display: 'block',

  paddingBlock: '$x8',
  paddingInline: '$x16',

  textTransform: 'uppercase',

  color: '$fontDefault',

  fontFamily: '$body',
  fontSize: '$micro',
  lineHeight: '$micro',
  letterSpacing: '$micro',
  // SCSS: font-weight: 400 (overrides micro's 700)
  fontWeight: '400',
});

export type OptionHeaderProps = {
  children: ReactNode;
};

const OptionHeader = ({ children }: OptionHeaderProps) => (
  <StyledOptionHeader>{children}</StyledOptionHeader>
);

export default OptionHeader;
