import type { AvatarProps } from '../Avatar';

import type { ItemSize } from './types';

/**
 * The avatar size that fills `ItemMedia` at each `Item` size.
 */
export const ITEM_MEDIA_SIZE = {
  condensed: 'x20',
  medium: 'x28',
  extended: 'x36',
} as const satisfies Record<ItemSize, AvatarProps['size']>;
