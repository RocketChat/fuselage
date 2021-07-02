import endent from 'endent';

import { Package } from '../types/Package';
import { contributingMessage } from './section/contributingMessage';
import { header } from './section/header';
import { install } from './section/install';
import { yarnCmd } from './section/yarnCmd';

const mapping = {
  'header': (pkg: Package) => header(pkg),
  'install': (pkg: Package) => install(pkg),
  'install(dev)': (pkg: Package) => install(pkg, 'dev'),
  'contributing(msg)': () => contributingMessage,
  'yarn(build)': () => yarnCmd('build'),
  'yarn(lint)': () => yarnCmd('lint'),
  'yarn(lint-fix)': () => yarnCmd('lint-fix'),
  'yarn(test)': () => yarnCmd('test'),
  'yarn(storybook)': () => yarnCmd('storybook'),
  'yarn(update-storybook)': () => yarnCmd('update-storybook'),
} as const;

const names = Object.keys(mapping) as (keyof typeof mapping)[];

export const section = (pkg: Package, name: keyof typeof mapping): string =>
  endent`
    <!--${name}-->

    ${mapping[name](pkg)}

    <!--/${name}-->
  `;

const replace =
  (pkg: Package, name: keyof typeof mapping) =>
  (content: string): string => {
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

export const replaceSections =
  (pkg: Package) =>
  (content: string): string =>
    names.reduce((content, name) => replace(pkg, name)(content), content);
