import { createReadStream, writeFileSync } from 'fs';

import { parseChunked } from '@discoveryjs/json-ext';

export const readArr = async (filePath) => {
  return parseChunked(createReadStream(filePath));
};

const jsonToFile = (obj, filename) => {
  writeFileSync(`${filename}.json`, JSON.stringify(obj, null, 2));
};

// returns  the file name which is not in the storybook stats
export const getNonStatsFile = async (fileName) => {
  const save = await readArr(
    '.github/actions/loki/fuselageSnap/dist/save.json',
  );
  save.file_names.push(fileName);
  jsonToFile(save, 'save');
};
