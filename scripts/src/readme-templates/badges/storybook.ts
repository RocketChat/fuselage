import { Package } from '../../types/Package';

export const storybookBadge = (pkg: Package): string =>
  `[![Storybook](https://cdn.jsdelivr.net/gh/storybookjs/brand@master/badge/badge-storybook.svg)](https://rocketchat.github.io/Rocket.Chat.Fuselage/${pkg.dirname})`;
