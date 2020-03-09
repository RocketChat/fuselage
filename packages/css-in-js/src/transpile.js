// @flow

import Stylis from '@emotion/stylis';

let stylisInstance;

/**
 * Transpiles CSS Modules content to CSS rules.
 */
export const transpile = (selector: string, content: string): string => {
  if (!stylisInstance) {
    stylisInstance = new Stylis();
  }

  return stylisInstance(selector, content);
};
