import React from 'react';

import {
  States,
  StatesSubtitle,
  StatesIcon,
  StatesTitle,
  StatesSuggestionList,
  StatesSuggestionListItem,
  StatesSuggestion,
  StatesSuggestionText,
  StatesActions,
  StatesAction,
} from '.';
import { Box, Icon } from '..';

export default {
  title: 'States/States',
};

export const Default = ({ searchTerm = 'search term here' }) => (
  <Box>
    <States>
      <StatesIcon name='magnifier' />
      <StatesTitle>No app matches</StatesTitle>
      <StatesSubtitle>
        No Marketplace matches for:
        <strong>"{searchTerm}"</strong>
      </StatesSubtitle>
      <StatesSuggestion>
        <StatesSuggestionText>You can try to:</StatesSuggestionText>
        <StatesSuggestionList>
          <StatesSuggestionListItem>
            Search by category
          </StatesSuggestionListItem>
          <StatesSuggestionListItem>
            Search for a more general term
          </StatesSuggestionListItem>
          <StatesSuggestionListItem>
            Search for a more specific term
          </StatesSuggestionListItem>
          <StatesSuggestionListItem>
            Check if the spelling is correct
          </StatesSuggestionListItem>
        </StatesSuggestionList>
      </StatesSuggestion>
    </States>
  </Box>
);

export const ActionButton = () => (
  <Box>
    <States>
      <StatesIcon name='magnifier' />
      <StatesTitle>No app matches</StatesTitle>
      <StatesSubtitle>No Marketplace matches for:</StatesSubtitle>
      <StatesSuggestion>
        <StatesSuggestionText>You can try to:</StatesSuggestionText>
        <StatesSuggestionList>
          <StatesSuggestionListItem>
            Search by category
          </StatesSuggestionListItem>
          <StatesSuggestionListItem>
            Search for a more general term
          </StatesSuggestionListItem>
          <StatesSuggestionListItem>
            Search for a more specific term
          </StatesSuggestionListItem>
          <StatesSuggestionListItem>
            Check if the spelling is correct
          </StatesSuggestionListItem>
        </StatesSuggestionList>
      </StatesSuggestion>
      <StatesActions>
        <StatesAction>Reload</StatesAction>
      </StatesActions>
    </States>
  </Box>
);

export const ActionButtonWithNoSuggestions = () => (
  <Box>
    <States>
      <StatesIcon name='magnifier' />
      <StatesTitle>No app matches</StatesTitle>
      <StatesSubtitle>
        No app matches for ”search term here” Try searching in the Marketplace
        instead.
      </StatesSubtitle>
      <StatesActions>
        <StatesAction>Reload</StatesAction>
      </StatesActions>
    </States>
  </Box>
);

export const ErrorState = () => (
  <Box>
    <States>
      <StatesIcon name='info' variation='danger' />
      <StatesTitle>Connection error</StatesTitle>
      <StatesSubtitle>
        Cannot connect to internet or your workspace may be an offline install.{' '}
        <br /> Contact your workspace admin for more information.
      </StatesSubtitle>
      <StatesActions>
        <StatesAction>
          <Icon name='arrow-loop' /> Reload
        </StatesAction>
      </StatesActions>
    </States>
  </Box>
);
