import type { AvatarProps } from '../Avatar';
import { Options } from './Options';

export * from './Options';

const avatarSize: AvatarProps['size'] = 'x20';

export default Object.assign(Options, {
  /** @deprecated */
  AvatarSize: avatarSize,
});
