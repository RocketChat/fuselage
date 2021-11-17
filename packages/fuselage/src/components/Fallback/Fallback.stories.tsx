import React from 'react';

import {
  FallbackSuggestionList,
  FallbackSuggestionListItem,
  FallbackSuggestion,
  FallbackSuggestionText,
  FallbackActions,
  FallbackAction,
} from '.';
import { Box } from '..';
import {
  Fallback,
  FallbackSubtitle,
  FallbackIcon,
  FallbackTitle,
} from './Fallback';

export default {
  title: 'Fallback/Fallback',
  //   component: Message,
  //   parameters: {
  //     jest: ['Message.spec.tsx'],
  //   },
};

export const Default = ({ searchTerm = 'search term here' }) => (
  <Box>
    <Fallback>
      <FallbackIcon name='magnifier' />
      <FallbackTitle>No app matches</FallbackTitle>
      <FallbackSubtitle>
        No Marketplace matches for:
        <strong>"{searchTerm}"</strong>
      </FallbackSubtitle>
      <FallbackSuggestion>
        <FallbackSuggestionText>You can try to:</FallbackSuggestionText>
        <FallbackSuggestionList>
          <FallbackSuggestionListItem>
            Search by category
          </FallbackSuggestionListItem>
          <FallbackSuggestionListItem>
            Search for a more general term
          </FallbackSuggestionListItem>
          <FallbackSuggestionListItem>
            Search for a more specific term
          </FallbackSuggestionListItem>
          <FallbackSuggestionListItem>
            Check if the spelling is correct
          </FallbackSuggestionListItem>
        </FallbackSuggestionList>
      </FallbackSuggestion>
    </Fallback>
  </Box>
);

export const ActionButton = () => (
  <Box>
    <Fallback>
      <FallbackIcon name='magnifier' />
      <FallbackTitle>No app matches</FallbackTitle>
      <FallbackSubtitle>No Marketplace matches for:</FallbackSubtitle>
      <FallbackSuggestion>
        <FallbackSuggestionText>You can try to:</FallbackSuggestionText>
        <FallbackSuggestionList>
          <FallbackSuggestionListItem>
            Search by category
          </FallbackSuggestionListItem>
          <FallbackSuggestionListItem>
            Search for a more general term
          </FallbackSuggestionListItem>
          <FallbackSuggestionListItem>
            Search for a more specific term
          </FallbackSuggestionListItem>
          <FallbackSuggestionListItem>
            Check if the spelling is correct
          </FallbackSuggestionListItem>
        </FallbackSuggestionList>
      </FallbackSuggestion>
      <FallbackActions>
        <FallbackAction>Reload</FallbackAction>
      </FallbackActions>
    </Fallback>
  </Box>
);
export const ActionButtonWithNoSuggestions = () => (
  <Box>
    <Fallback>
      <FallbackIcon name='magnifier' />
      <FallbackTitle>No app matches</FallbackTitle>
      <FallbackSubtitle>
        No app matches for ”search term here” Try searching in the Marketplace
        instead.
      </FallbackSubtitle>
      <FallbackActions>
        <FallbackAction>Reload</FallbackAction>
      </FallbackActions>
    </Fallback>
  </Box>
);
