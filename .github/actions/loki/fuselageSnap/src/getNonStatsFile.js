import { createReadStream, existsSync, writeFileSync, readFileSync } from 'fs';

import { parseChunked } from '@discoveryjs/json-ext';

export const readArr = async (filePath) => {
  return parseChunked(createReadStream(filePath));
};

const jsonToFile = (obj, filename) => {
  writeFileSync(`${filename}.json`, JSON.stringify(obj, null, 2));
};

export const getNonStatsFile = async (data, filePath) => {
  const fullPath = `${filePath}.json`;

  let save;

  if (existsSync(fullPath)) {
    save = JSON.parse(readFileSync(fullPath, 'utf8'));
  } else {
    save = { file_names: [] };
  }

  save.file_names.push(data);

  jsonToFile(save, filePath);
};
