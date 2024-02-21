import React, { memo } from 'react';
import { createPortal } from 'react-dom';

import { convertToCss } from './helpers/convertToCss';
import { useCreateStyleContainer } from './hooks/useCreateStyleContainer';
import { codeBlock } from './lib/codeBlockStyles';
import { dark } from './lib/paletteDark';
import { highContrast } from './lib/paletteHighContrast';
import { light } from './lib/paletteLight';
import type { Themes } from './types/themes';

const themes = {
  light,
  dark,
  'high-contrast': highContrast,
};

export const PaletteStyleTag = memo(function PaletteStyleTag({
  theme = 'light',
  id,
  prefix = '--rcx-color',
  selector,
}: {
  theme: Themes;
  id?: string;
  prefix?: string;
  selector?: string;
}) {
  const palette = convertToCss(themes[theme], prefix, selector);

  return (
    <>
      {createPortal(
        theme === 'dark' ? palette + codeBlock : palette,
        useCreateStyleContainer(id || 'main-palette')
      )}
    </>
  );
});

export default PaletteStyleTag;
