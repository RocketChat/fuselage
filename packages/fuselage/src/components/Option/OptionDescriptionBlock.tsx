import type { ReactNode } from 'react';
import { styled } from 'tamagui';

import { RcxText } from '../../primitives';

// .rcx-option__description-block
const StyledOptionDescriptionBlock = styled(RcxText, {
  name: 'OptionDescriptionBlock',

  display: 'block',

  padding: '$x4',

  whiteSpace: 'normal',

  color: '$fontSecondaryInfo',

  fontFamily: '$body',
  fontSize: '$p2',
  fontWeight: '$p2',
  lineHeight: '$p2',
  letterSpacing: '$p2',
});

export type OptionDescriptionBlockProps = {
  children?: ReactNode;
};

const OptionDescriptionBlock = (props: OptionDescriptionBlockProps) => (
  <StyledOptionDescriptionBlock {...props} />
);

export default OptionDescriptionBlock;
