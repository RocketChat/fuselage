import { render } from '@testing-library/react';
import React from 'react';

import PaletteStyleTag from './PaletteStyleTag';
import { dark } from './lib/paletteDark';
import { light } from './lib/paletteLight';

describe('[PaletteStyleTag Rendering]', () => {
  const tree = render(<PaletteStyleTag theme='dark' />);
  expect(tree.baseElement).toMatchSnapshot();
});

describe('[PaletteStyleTag colors]', () => {
  it('inserts the Light theme style tag', () => {
    render(<PaletteStyleTag theme='light' />);
    const style = document.querySelector('#main-palette');
    expect(style?.innerHTML).toContain(
      `surface-light: ${light['surface-light']}`
    );
  });
  it('inserts the Dark theme style tag', () => {
    render(<PaletteStyleTag theme='dark' />);
    const style = document.querySelector('#main-palette');
    expect(style?.innerHTML).toContain(
      `surface-light: ${dark['surface-light']}`
    );
  });
});
