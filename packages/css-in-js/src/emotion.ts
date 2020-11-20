import type { StylisPlugin } from '@emotion/cache';
import createEmotion from '@emotion/css/create-instance';

import { logicalPropertiesMiddleware } from './logicalProperties';

export const {
  flush,
  hydrate,
  cx,
  merge,
  getRegisteredStyles,
  injectGlobal,
  keyframes,
  css,
  sheet,
  cache,
} = createEmotion({
  key: 'rcx-css',
  stylisPlugins: [logicalPropertiesMiddleware as StylisPlugin],
});
