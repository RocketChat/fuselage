import type { AllHTMLAttributes, ReactNode } from 'react';
import { styled } from '@tamagui/core';

import { RcxText } from '../../primitives';

const StatesSuggestionTextFrame = styled(RcxText, {
  name: 'StatesSuggestionText',
  display: 'block',
  color: 'inherit',
  overflowWrap: 'normal',
});

export type StatesSuggestionTextProps = {
  children?: ReactNode;
} & AllHTMLAttributes<HTMLDivElement>;

const StatesSuggestionText = ({
  children,
  ...props
}: StatesSuggestionTextProps) => (
  <StatesSuggestionTextFrame {...props}>{children}</StatesSuggestionTextFrame>
);

export default StatesSuggestionText;
