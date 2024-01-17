import { Options } from './Options';
import type { AvatarProps } from '../Avatar';

export * from './Options';

const avatarSize: AvatarProps['size'] = 'x20';

export default Object.assign(Options, {
  /** @deprecated */
  AvatarSize: avatarSize,
});
