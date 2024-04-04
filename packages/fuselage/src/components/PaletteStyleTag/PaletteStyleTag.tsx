import React, { memo } from 'react';
import { createPortal } from 'react-dom';

import { convertToCss } from './helpers/convertToCss';
import { useCreateStyleContainer } from './hooks/useCreateStyleContainer';
import { codeBlock } from './lib/codeBlockStyles';
import { dark, highContrast, light } from './lib/themePalettes';
import type { Themes } from './types/themes';

const themes = {
  light,
  dark,
  'high-contrast': highContrast,
};

export const PaletteStyleTag = memo(function PaletteStyleTag({
  theme = 'light',
  tagId = 'main-palette',
  prefix = '--rcx-color',
  selector,
}: {
  theme?: Themes;
  /**
   * Default is `main-palette`.
   */
  tagId?: string;
  /**
   * Token prefix. Default is `--rcx-color`.
   */
  prefix?: string;
  /**
   * Default is `:root`.
   */
  selector?: string;
}) {
  const palette = convertToCss(themes[theme], prefix, selector);

  return (
    <>
      {createPortal(
        theme === 'dark' ? palette + codeBlock : palette,
        useCreateStyleContainer(tagId)
      )}
    </>
  );
});

export default PaletteStyleTag;
