import type { ReactNode } from 'react';
import { styled } from 'tamagui';

import { RcxText } from '../../primitives';

// .rcx-option__title
const StyledOptionTitle = styled(RcxText, {
  name: 'OptionTitle',

  display: 'block',

  paddingBlockStart: '$x8',
  paddingBlockEnd: '$x4',
  paddingInlineStart: '$x12',
  paddingInlineEnd: '$x24',

  color: '$fontDefault',

  fontFamily: '$body',
  fontSize: '$c2',
  fontWeight: '$c2',
  lineHeight: '$c2',
  letterSpacing: '$c2',
});

export type OptionTitleProps = {
  children?: ReactNode;
};

const OptionTitle = (props: OptionTitleProps) => (
  <StyledOptionTitle {...props} />
);

export default OptionTitle;
