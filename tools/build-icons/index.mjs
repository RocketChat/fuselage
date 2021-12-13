#!/usr/bin/env node

import { basename, dirname } from 'path';
import { removeFile, listFiles } from 'tools-utils/files';
import {
  buildCss,
  buildCommonJsModule,
  buildEsmModule,
  buildSvgImages,
  buildFont,
  buildDefinition,
} from './build.mjs';

const fromSourceToIcon = async (path) => {
  const [, name, , type] = /^(.*?)(\.([a-z]+))?$/.exec(basename(path, '.svg'));
  return {
    name,
    type,
    path,
  };
};

const collator = new Intl.Collator('en', {
  sensitivity: 'base',
  numeric: true,
  ignorePunctuation: true,
});

const compareIcons = (a, b) =>
  collator.compare(dirname(a.path), dirname(b.path)) ||
  collator.compare(a.name, b.name);

const fromSourcesToIcons = async (paths) => {
  const icons = await Promise.all(paths.map(fromSourceToIcon));
  return icons.sort(compareIcons);
};

await removeFile('./dist');

const sources = await listFiles('./src/**/*.svg');
const icons = await fromSourcesToIcons(sources);

await Promise.all([
  buildCss(),
  buildCommonJsModule(icons),
  buildEsmModule(icons),
  buildSvgImages(icons),
  buildFont(icons),
  buildDefinition(icons),
]);
