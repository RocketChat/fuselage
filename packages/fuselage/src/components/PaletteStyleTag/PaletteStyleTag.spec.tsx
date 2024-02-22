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
  it('creates the Light theme style tag', () => {
    render(<PaletteStyleTag theme='light' />);
    const style = document.querySelector('#main-palette');
    expect(style?.innerHTML).toContain(
      `surface-light: ${light['surface-light']}`
    );
  });
  it('creates the Dark theme style tag', () => {
    render(<PaletteStyleTag theme='dark' />);
    const style = document.querySelector('#main-palette');
    expect(style?.innerHTML).toContain(
      `surface-light: ${dark['surface-light']}`
    );
  });
  it('creates tag with the given id', () => {
    render(<PaletteStyleTag theme='light' tagId='test-palette' />);
    const style = document.querySelector('#test-palette');
    expect(style).not.toBeNull();
  });
  it('creates tag with the given prefix', () => {
    render(<PaletteStyleTag theme='light' prefix='--test' />);
    const style = document.querySelector('#main-palette');
    expect(style?.innerHTML).toContain(
      `--test-surface-light: ${light['surface-light']}`
    );
  });
  it('creates tag with the given selector', () => {
    render(<PaletteStyleTag theme='light' selector='.test' />);
    const style = document.querySelector('#main-palette');
    console.log(style?.innerHTML);
    expect(style?.innerHTML).toContain('.test {');
  });
});
