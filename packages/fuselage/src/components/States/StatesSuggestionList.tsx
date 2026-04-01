import type { AllHTMLAttributes, ReactNode } from 'react';
import { styled } from '@tamagui/core';

import { RcxText } from '../../primitives';

const StatesSuggestionListFrame = styled(RcxText, {
  name: 'StatesSuggestionList',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  maxWidth: 462,
  margin: 0,
  padding: 0,
  textAlign: 'center',
  fontFamily: '$body',
  fontSize: '$p2m',
  fontWeight: '$p2m',
  lineHeight: '$p2m',
  letterSpacing: '$p2m',
  color: 'inherit',
  overflowWrap: 'normal',
});

export type StatesSuggestionListProps = {
  children?: ReactNode;
} & AllHTMLAttributes<HTMLUListElement>;

const StatesSuggestionList = ({
  children,
  ...props
}: StatesSuggestionListProps) => (
  <StatesSuggestionListFrame {...props}>{children}</StatesSuggestionListFrame>
);

export default StatesSuggestionList;
