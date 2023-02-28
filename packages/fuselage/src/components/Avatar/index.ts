import Avatar from './Avatar';
import AvatarStack from './AvatarStack';

export { AvatarProps } from './Avatar';

const CompoundedAvatar = Object.assign(Avatar.bind({}), {
  Stack: AvatarStack,
});

export { CompoundedAvatar as Avatar };
