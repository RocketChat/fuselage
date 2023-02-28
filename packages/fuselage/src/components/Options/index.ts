import type { AvatarProps } from '../Avatar';
import Options from './Options';

export { OptionType } from './Options';

const CompoundedOptions = Object.assign(Options.bind({}), {
  /** @deprecated */
  AvatarSize: 'x20' as AvatarProps['size'],
});

export default CompoundedOptions;

export { CompoundedOptions as Options };
export { default as Empty } from './Empty';
export { useCursor } from './useCursor';
