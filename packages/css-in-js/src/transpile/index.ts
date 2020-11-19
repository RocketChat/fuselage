import { compile, middleware, prefixer, serialize, stringify } from 'stylis';

import {
  LogicalPropertiesOptions,
  createLogicalPropertiesMiddleware,
} from './logicalProperties';

type TranspileOptions = LogicalPropertiesOptions & {
  prefix?: boolean;
};

/**
 * Transpiles CSS Modules content to CSS rules.
 */
export const transpile = (
  selector: string,
  content: string,
  options?: TranspileOptions
): string => {
  return serialize(
    compile(`${selector}{${content}}`),
    middleware(
      options?.prefix === false
        ? [createLogicalPropertiesMiddleware(options), stringify]
        : [createLogicalPropertiesMiddleware(options), prefixer, stringify]
    )
  );
};
