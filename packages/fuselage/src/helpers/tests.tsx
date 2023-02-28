import type { StoryFn } from '@storybook/react';
import { composeStories } from '@storybook/testing-react';
import { render } from '@testing-library/react';
import React from 'react';

type Stories = Parameters<typeof composeStories>[0];

export function testsFromStories<TModule extends Stories>(stories: TModule) {
  describe('from stories', () => {
    const storyFns = composeStories(stories);

    const entries = Object.entries(storyFns).filter(
      (pair): pair is [name: string, storyFn: StoryFn] =>
        typeof pair[0] === 'string' && typeof pair[1] === 'function'
    );

    it.each(entries)('renders %j story without crashing', (_, Story) => {
      render(<Story {...Story.args} />);
    });
  });
}
