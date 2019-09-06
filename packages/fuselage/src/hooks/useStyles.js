import { useStyle } from './useStyle';

export const useStyles = (styles, [firstRoot, ...roots], modifiers = {}, forwardedClassName) => ({
  [firstRoot]: useStyle(styles, firstRoot, modifiers, forwardedClassName),
  ...roots.reduce((obj, root) => ({
    ...obj,
    [root]: useStyle(styles, root, modifiers),
  }), {}),
});
