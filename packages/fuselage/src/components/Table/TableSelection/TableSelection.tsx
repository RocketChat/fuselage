import type { HTMLAttributes, ReactNode } from 'react';
import { styled } from 'tamagui';

import { RcxText, RcxView } from '../../../primitives';

const SelectionFrame = styled(RcxView, {
  name: 'TableSelection',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingInline: '$x24',
  color: '$fontTitlesLabels',
  borderRadius: '$x4',
  backgroundColor: '$surfaceNeutral',
});

const SelectionText = styled(RcxText, {
  name: 'TableSelectionText',
  display: 'block',
  flexShrink: 1,
  marginBottom: '$x16',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  fontFamily: '$body',
  fontSize: '$p2b',
  fontWeight: '$p2b',
  lineHeight: '$p2b',
  letterSpacing: '$p2b',
  color: 'inherit',
});

const SelectionActions = styled(RcxView, {
  name: 'TableSelectionActions',
  flexShrink: 0,
  marginInline: -8,
});

export type TableSelectionProps = {
  text?: string;
  children?: ReactNode;
} & Omit<HTMLAttributes<HTMLElement>, 'is'>;

const TableSelection = ({ children, text, ...props }: TableSelectionProps) => (
  <SelectionFrame {...props}>
    <SelectionText>{text}</SelectionText>
    {children && <SelectionActions>{children}</SelectionActions>}
  </SelectionFrame>
);

export default TableSelection;
