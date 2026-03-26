import type { HTMLAttributes } from 'react';
import { styled } from 'tamagui';

import { RcxText } from '../../primitives';

// .rcx-option__content — extends %column + text-ellipsis
const StyledOptionContent = styled(RcxText, {
  name: 'OptionContent',

  display: 'block',

  flexGrow: 1,
  flexShrink: 1,
  flexBasis: '100%',

  marginInline: '$x4',

  textAlign: 'start',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',

  color: 'inherit',

  fontFamily: '$body',
  fontSize: '$p2',
  fontWeight: '$p2',
  lineHeight: '$p2',
  letterSpacing: '$p2',
});

export type OptionContentProps = HTMLAttributes<HTMLDivElement>;

const OptionContent = (props: OptionContentProps) => (
  <StyledOptionContent {...(props as any)} />
);

export default OptionContent;
