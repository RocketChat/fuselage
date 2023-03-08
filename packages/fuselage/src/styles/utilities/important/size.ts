import { sizeCssPropertyUtility } from '../important';

export const size = sizeCssPropertyUtility('size', ['width', 'height']);

export const minSize = sizeCssPropertyUtility('min-size', [
  'min-width',
  'min-height',
]);

export const maxSize = sizeCssPropertyUtility('max-size', [
  'max-width',
  'max-height',
]);

export const width = sizeCssPropertyUtility('w', ['width']);

export const minWidth = sizeCssPropertyUtility('min-w', ['min-width']);

export const maxWidth = sizeCssPropertyUtility('max-w', ['max-width']);

export const height = sizeCssPropertyUtility('h', ['height']);

export const minHeight = sizeCssPropertyUtility('min-h', ['min-height']);

export const maxHeight = sizeCssPropertyUtility('max-h', ['max-height']);
