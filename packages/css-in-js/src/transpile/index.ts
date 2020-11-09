import Stylis, { Options } from '@emotion/stylis';

import {
  LogicalPropertiesOptions,
  createLogicalPropertiesPlugin,
} from './logicalProperties';

type TranspileOptions = LogicalPropertiesOptions & Options;

const createStylis = (options: TranspileOptions): Stylis => {
  const stylisInstance = new Stylis();
  stylisInstance.use(createLogicalPropertiesPlugin(options));
  stylisInstance.set(options);

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
  options?: TranspileOptions
): string => {
  const stylis: Stylis = options ? createStylis(options) : getDefaultStylis();
  return stylis(selector, content);
};
