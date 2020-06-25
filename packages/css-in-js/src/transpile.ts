import Stylis from '@emotion/stylis';

import { LogicalPropertiesOptions, createLogicalPropertiesPlugin } from './plugins/logicalProperties';

type TranspileOptions = LogicalPropertiesOptions;

const createStylis = (options: Partial<TranspileOptions>): Stylis => {
  const stylisInstance = new Stylis();
  stylisInstance.use(createLogicalPropertiesPlugin(options));
  return stylisInstance;
};

let defaultStylis: Stylis;

const getDefaultStylis = (): Stylis => {
  if (!defaultStylis) {
    defaultStylis = createStylis({});
  }

  return defaultStylis;
};

/**
 * Transpiles CSS Modules content to CSS rules.
 */
export const transpile = (
  selector: string,
  content: string,
  options?: Partial<TranspileOptions>,
): string => {
  const stylis: Stylis = options ? createStylis(options) : getDefaultStylis();
  return stylis(selector, content);
};
