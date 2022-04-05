import { lstat, readlink, readFile, writeFile, mkdir } from 'fs/promises';
import { dirname, join } from 'path';
import { promisify } from 'util';
import rimraf from 'rimraf';
import fg from 'fast-glob';
import { encodeJson, decodeJson } from './json.mjs';
import { encodeJson5, decodeJson5 } from './json5.mjs';

export const readBinary = (path) => readFile(path);

export const writeBinary = (path) => async (buffer) => {
  await mkdir(dirname(path), { recursive: true });
  await writeFile(path, buffer);
  return buffer;
};

export const readSource = (path) => readFile(path, { encoding: 'utf-8' });

export const writeSource = (path) => async (source) => {
  await mkdir(dirname(path), { recursive: true });
  await writeFile(path, source, { encoding: 'utf-8' });
  return source;
};

export const readJson = (path) => readSource(path).then(decodeJson);

export const writeJson = (path) => (data) => {
  const source = encodeJson(data);
  writeSource(path)(source);
  return data;
};

export const readJson5 = (path) => readSource(path).then(decodeJson5);

export const writeJson5 = (path) => (data) => {
  const source = encodeJson5(data);
  writeSource(path)(source);
  return data;
};

export const removeFile = (path) => promisify(rimraf)(path);

export const listFiles = (patterns, cwd) =>
  fg(patterns, { cwd }).then((paths) =>
    Promise.all(paths.map((path) => join(path)))
  );

export const resolveLink = async (path) => {
  const stat = await lstat(path);

  if (stat.isSymbolicLink()) {
    const target = await readlink(path);
    return join(dirname(path), target);
  }

  return path;
};

export const resolveLinks = (paths) => Promise.all(paths.map(resolveLink));
