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

export const ActionButton = ({ searchTerm = 'search term here' }) => (
  <Box>
    <Fallback>
      <FallbackIcon name='magnifier' />
      <FallbackTitle>No installed app matches</FallbackTitle>
      <FallbackSubtitle>
        <span>
          No app matches for <strong>"{searchTerm}"</strong>
        </span>
      </FallbackSubtitle>
      <FallbackSuggestion>
        <FallbackSuggestionText>
          Try searching in the Marketplace instead
        </FallbackSuggestionText>
      </FallbackSuggestion>
      <FallbackActions>
        <FallbackAction>Search on Marketplace</FallbackAction>
      </FallbackActions>
    </Fallback>
  </Box>
);

export const ActionButtonWithNoSuggestions = () => (
  <Box>
    <Fallback>
      <FallbackIcon name='magnifier' />
      <FallbackTitle>No Apps Installed</FallbackTitle>
      <FallbackSubtitle>
        Explore the Marketplace to find awesome apps for Rocket.Chat
      </FallbackSubtitle>
      <FallbackActions>
        <FallbackAction>Explore Marketplace</FallbackAction>
      </FallbackActions>
    </Fallback>
  </Box>
);
