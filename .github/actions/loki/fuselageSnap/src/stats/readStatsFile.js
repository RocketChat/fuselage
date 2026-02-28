import { createReadStream } from 'fs';

import { parseChunked } from '@discoveryjs/json-ext';

export const readStatsFile = async (filePath) => {
  return parseChunked(createReadStream(filePath));
};
