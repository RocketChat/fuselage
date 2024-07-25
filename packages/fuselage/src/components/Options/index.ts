import type { AvatarProps } from '../Avatar';
import Options from './Options';

export default Object.assign(Options, {
  /** @deprecated Use the constant literal `'x20'` instead. */
  AvatarSize: 'x20' as const satisfies AvatarProps['size'],
});

export type { OptionType } from './OptionType';
export { default as Options, OptionsProps } from './Options';
export {
  default as OptionContainer,
  OptionContainerProps,
} from './OptionContainer';
export { default as Empty, EmptyProps } from './Empty';
export { useCursor } from './useCursor';
