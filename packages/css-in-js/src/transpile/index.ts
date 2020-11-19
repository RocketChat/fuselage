import {
  compile,
  Middleware,
  middleware,
  prefixer,
  serialize,
  stringify,
} from 'stylis';

import { createLogicalPropertiesMiddleware } from './logicalProperties';

type TranspileOptions = {
  prefix: boolean;
  supportedProperties: string[];
};

const isMiddleware = (middleware: Middleware): middleware is Middleware =>
  typeof middleware === 'function';

export const createStylisMiddleware = ({
  prefix = true,
  supportedProperties = [],
}: Partial<TranspileOptions> = {}): Middleware =>
  middleware(
    [
      createLogicalPropertiesMiddleware(supportedProperties),
      prefix && prefixer,
      stringify,
    ].filter(isMiddleware)
  );

/**
 * Transpiles CSS Modules content to CSS rules.
 */
export const transpile = (
  selector: string,
  content: string,
  options?: Partial<TranspileOptions>
): string =>
  serialize(
    compile(`${selector}{${content}}`),
    createStylisMiddleware(options)
  );
