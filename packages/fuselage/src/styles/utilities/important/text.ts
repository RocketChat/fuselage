import { css } from '@rocket.chat/css-in-js';

import type {
  FontFamily,
  FontScale,
  FontSize,
  FontWeight,
  LetterSpacing,
  LineHeight,
} from '../../../styleTokens';
import {
  formatFontFamily,
  normalizeFontFamily,
  normalizeLineHeight,
  normalizeLetterSpacing,
  normalizeFontWeight,
  normalizeFontSize,
  formatLineHeight,
  formatLetterSpacing,
  formatFontWeight,
  formatFontSize,
  normalizeFontScale,
} from '../../../styleTokens';
import type { Utility } from '../Utility';
import { enumCssPropertyUtility } from '../important';

export const fontScale: Utility<FontScale> = {
  normalizeValue: normalizeFontScale,
  name: (value) => `font-${value}!`,
  cssFn: css`
    font-size: ${formatFontSize} !important;
    font-weight: ${formatFontWeight} !important;
    letter-spacing: ${formatLetterSpacing} !important;
    line-height: ${formatLineHeight} !important;
  `,
};

export const fontSize: Utility<FontSize> = {
  normalizeValue: normalizeFontSize,
  name: (value) => {
    if (typeof value === 'number') {
      return `text-${value}!`;
    }

    return `font-${value}/font-size!`;
  },
  cssFn: css`
    font-size: ${formatFontSize} !important;
  `,
  fallbackCssFn: css`
    font-size: ${(value) => value} !important;
  `,
};

export const fontWeight: Utility<FontWeight> = {
  normalizeValue: normalizeFontWeight,
  name: (value) => {
    if (typeof value === 'number') {
      return `font-${value}!`;
    }

    return `font-${value}/font-weight!`;
  },
  cssFn: css`
    font-weight: ${formatFontWeight} !important;
  `,
  fallbackCssFn: css`
    font-weight: ${(value) => value} !important;
  `,
};

export const letterSpacing: Utility<LetterSpacing> = {
  normalizeValue: normalizeLetterSpacing,
  name: (value) => {
    if (typeof value === 'number') {
      return `tracking-${value}!`;
    }

    return `font-${value}/letter-spacing!`;
  },
  cssFn: css`
    letter-spacing: ${formatLetterSpacing} !important;
  `,
  fallbackCssFn: css`
    letter-spacing: ${(value) => value} !important;
  `,
};

export const lineHeight: Utility<LineHeight> = {
  normalizeValue: normalizeLineHeight,
  name: (value) => {
    if (typeof value === 'number') {
      return `leading-${value}!`;
    }

    return `font-${value}/line-height!`;
  },
  cssFn: css`
    line-height: ${formatLineHeight} !important;
  `,
  fallbackCssFn: css`
    line-height: ${(value) => value} !important;
  `,
};

export const fontFamily: Utility<FontFamily> = {
  normalizeValue: normalizeFontFamily,
  name: (value) => `font-${value}!`,
  cssFn: css`
    font-family: ${formatFontFamily} !important;
  `,
  fallbackCssFn: css`
    font-family: ${(value) => value} !important;
  `,
};

export const fontStyle = enumCssPropertyUtility({
  property: 'font-style',
  values: ['normal', 'italic'] as const,
  name: (value) => {
    switch (value) {
      case 'normal':
        return 'not-italic!';

      case 'italic':
        return 'italic!';
    }
  },
});

export const textAlign = enumCssPropertyUtility({
  property: 'text-align',
  values: ['start', 'center', 'end', 'justify'] as const,
  name: (value) => `text-${value}!`,
});

export const textTransform = enumCssPropertyUtility({
  property: 'text-transform',
  values: ['none', 'uppercase', 'lowercase', 'capitalize'] as const,
  name: (value) => {
    switch (value) {
      case 'none':
        return 'normal-case!';

      case 'uppercase':
      case 'lowercase':
      case 'capitalize':
        return `${value}!`;
    }
  },
});

export const textDecorationLine = enumCssPropertyUtility({
  property: 'text-decoration-line',
  values: ['none', 'underline', 'overline', 'line-through'] as const,
  name: (value) => {
    switch (value) {
      case 'none':
        return 'no-underline!';

      case 'underline':
      case 'overline':
      case 'line-through':
        return `${value}!`;
    }
  },
});

export const wordBreak = enumCssPropertyUtility({
  property: 'word-break',
  values: ['normal', 'break-all', 'keep-all', 'break-word'] as const,
  name: (value) => {
    switch (value) {
      case 'normal':
        return 'break-normal!';

      case 'break-all':
        return 'break-all!';

      case 'keep-all':
        return 'break-keep!';

      case 'break-word':
        return 'break-words!';
    }
  },
});
