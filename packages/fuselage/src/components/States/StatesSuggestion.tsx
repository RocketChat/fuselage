import type { ReactNode, AllHTMLAttributes } from 'react';
import { styled } from 'tamagui';

import { RcxText } from '../../primitives';

const StatesSuggestionFrame = styled(RcxText, {
  name: 'StatesSuggestion',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  maxWidth: 462,
  margin: 0,
  padding: 0,
  textAlign: 'center',
  marginBlockEnd: '$x24',
  fontFamily: '$body',
  fontSize: '$p2m',
  fontWeight: '$p2m',
  lineHeight: '$p2m',
  letterSpacing: '$p2m',
  color: 'inherit',
  overflowWrap: 'normal',
});

export type StatesSuggestionProps = {
  children?: ReactNode;
} & AllHTMLAttributes<HTMLDivElement>;

const StatesSuggestion = ({ children, ...props }: StatesSuggestionProps) => (
  <StatesSuggestionFrame {...props}>{children}</StatesSuggestionFrame>
);

export default StatesSuggestion;
