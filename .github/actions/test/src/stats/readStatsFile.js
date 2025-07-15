import { parseChunked } from '@discoveryjs/json-ext';
import { createReadStream } from 'fs';

export const readStatsFile = async (filePath) => {
    return parseChunked(createReadStream(filePath));
}
