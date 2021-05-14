import { Package } from '../../types/Package';

export const depsBadge = (pkg: Package, type?: 'dev' | 'peer'): string =>
  type
    ? `![${type} deps](https://img.shields.io/david/${type}/RocketChat/Rocket.Chat.Fuselage?path=packages%2F${pkg.dirname}&style=flat-square)`
    : `![deps](https://img.shields.io/david/RocketChat/Rocket.Chat.Fuselage?path=packages%2F${pkg.dirname}&style=flat-square)`;
