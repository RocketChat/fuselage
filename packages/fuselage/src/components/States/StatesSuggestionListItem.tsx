import type { AllHTMLAttributes, ReactNode } from 'react';
import { styled } from 'tamagui';

import { RcxText } from '../../primitives';

const StatesSuggestionListItemWrapper = styled(RcxText, {
  name: 'StatesSuggestionListItemWrapper',
  marginInlineStart: -4,
  color: 'inherit',
  overflowWrap: 'normal',
});

export type StatesSuggestionListItemProps = {
  children?: ReactNode;
} & AllHTMLAttributes<HTMLLIElement>;

const StatesSuggestionListItem = ({
  children,
  ...props
}: StatesSuggestionListItemProps) => (
  <li {...props}>
    <StatesSuggestionListItemWrapper>{children}</StatesSuggestionListItemWrapper>
  </li>
);

export default StatesSuggestionListItem;
