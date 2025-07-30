import outdent from 'outdent';

import { contributingMessage } from './section/contributingMessage.mjs';
import { header } from './section/header.mjs';
import { install } from './section/install.mjs';
import { yarnCmd } from './section/yarnCmd.mjs';

const mapping = {
  'header': (pkg) => header(pkg),
  'install': (pkg) => install(pkg),
  'install(dev)': (pkg) => install(pkg, 'dev'),
  'contributing(msg)': () => contributingMessage,
  'yarn(build)': () => yarnCmd('build'),
  'yarn(lint)': () => yarnCmd('lint'),
  'yarn(lint-and-fix)': () => yarnCmd('lint-and-fix'),
  'yarn(test)': () => yarnCmd('test'),
  'yarn(storybook)': () => yarnCmd('storybook'),
  'yarn(update-storybook)': () => yarnCmd('update-storybook'),
};

const names = Object.keys(mapping);

export const section = (pkg, name) =>
  outdent`
    <!--${name}-->

    ${mapping[name](pkg)}

    <!--/${name}-->
  `;

const replace = (pkg, name) => (content) => {
  const sectionBegin = `<!--${name}-->`;
  const sectionEnd = `<!--/${name}-->`;

  const beginIndex = content.indexOf(sectionBegin);

  if (beginIndex < 0) {
    return content;
  }

  const endIndex = content.indexOf(sectionEnd, beginIndex);

  if (endIndex < 0) {
    return content;
  }

  const before = content.slice(0, beginIndex + sectionBegin.length);
  const after = content.slice(endIndex);

  return `${before}\n\n${mapping[name](pkg)}\n\n${after}`;
};

export const replaceSections = (pkg) => (content) =>
  names.reduce((content, name) => replace(pkg, name)(content), content);
