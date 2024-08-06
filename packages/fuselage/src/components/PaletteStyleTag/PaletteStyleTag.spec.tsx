import { render } from '@testing-library/react';

import PaletteStyleTag from './PaletteStyleTag';
import { dark, light } from './lib/themePalettes';

describe('[PaletteStyleTag colors]', () => {
  it('creates the Light theme style tag', () => {
    render(<PaletteStyleTag theme='light' />, { legacyRoot: true });
    const style = document.querySelector('#main-palette');
    expect(style?.innerHTML).toContain(
      `surface-light: ${light['surface-light']}`
    );
  });
  it('creates the Dark theme style tag', () => {
    render(<PaletteStyleTag theme='dark' />, { legacyRoot: true });
    const style = document.querySelector('#main-palette');
    expect(style?.innerHTML).toContain(
      `surface-light: ${dark['surface-light']}`
    );
  });
  it('creates tag with the given id', () => {
    render(<PaletteStyleTag theme='light' tagId='test-palette' />, {
      legacyRoot: true,
    });
    const style = document.querySelector('#test-palette');
    expect(style).not.toBeNull();
  });
  it('creates tag with the given prefix', () => {
    render(<PaletteStyleTag theme='light' prefix='--test' />, {
      legacyRoot: true,
    });
    const style = document.querySelector('#main-palette');
    expect(style?.innerHTML).toContain(
      `--test-surface-light: ${light['surface-light']}`
    );
  });
  it('creates tag with the given selector', () => {
    render(<PaletteStyleTag theme='light' selector='.test' />, {
      legacyRoot: true,
    });
    const style = document.querySelector('#main-palette');
    expect(style?.innerHTML).toContain('.test {');
  });
});
