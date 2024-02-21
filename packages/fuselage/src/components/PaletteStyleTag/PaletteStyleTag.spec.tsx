import { composeStories } from '@storybook/testing-react';
import { render } from '@testing-library/react';
import React from 'react';

import * as stories from './PaletteStyleTag.stories';
import { dark } from './lib/paletteDark';
import { light } from './lib/paletteLight';

const testCases = Object.values(composeStories(stories)).map((Story) => [
  Story.storyName || 'Story',
  Story,
]);

describe('[PaletteStyleTag Rendering]', () => {
  test.each(testCases)(
    `renders %s without crashing`,
    async (_storyname, Story) => {
      const tree = render(<Story />);
      expect(tree.baseElement).toMatchSnapshot();
    }
  );
});

const { Light, Dark } = composeStories(stories);

describe('[PaletteStyleTag colors]', () => {
  it('inserts the Light theme style tag', () => {
    render(<Light />);
    const style = document.querySelector('#main-palette');
    expect(style?.innerHTML).toContain(
      `surface-light: ${light['surface-light']}`
    );
  });
  it('inserts the Dark theme style tag', () => {
    render(<Dark />);
    const style = document.querySelector('#main-palette');
    expect(style?.innerHTML).toContain(
      `surface-light: ${dark['surface-light']}`
    );
  });
});
