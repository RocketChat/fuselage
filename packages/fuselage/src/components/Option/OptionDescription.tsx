import type { ReactNode } from 'react';
import { styled } from '@tamagui/core';

import { RcxText } from '../../primitives';

// .rcx-option__description — extends %column + inline display
const StyledOptionDescription = styled(RcxText, {
  name: 'OptionDescription',

  display: 'inline',

  flexGrow: 0,
  flexShrink: 0,
  flexBasis: 'auto',

  marginInline: '$x4',

  color: '$fontSecondaryInfo',

  fontFamily: '$body',
  fontSize: '$p2',
  fontWeight: '$p2',
  lineHeight: '$p2',
  letterSpacing: '$p2',
});

export type OptionDescriptionProps = {
  children?: ReactNode;
};

const OptionDescription = (props: OptionDescriptionProps) => (
  <StyledOptionDescription {...props} />
);

export default OptionDescription;
