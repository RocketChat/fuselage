import type { ReactNode } from 'react';
import { styled } from 'tamagui';

import { RcxView } from '../../primitives';

// .rcx-option__column — extends %column + flex display
const StyledOptionColumn = styled(RcxView, {
  name: 'OptionColumn',

  display: 'flex',
  flexGrow: 0,
  flexShrink: 0,
  flexBasis: 'auto',

  justifyContent: 'center',
  alignItems: 'center',

  minWidth: '$x20',
  minHeight: '$x20',
  marginInline: '$x4',
});

export type OptionColumnProps = {
  children?: ReactNode;
};

const OptionColumn = (props: OptionColumnProps) => (
  <StyledOptionColumn {...props} />
);

export default OptionColumn;
