import { Input } from './Input';
import { InputBox } from './InputBox';
import { InputBoxAddon } from './InputBoxAddon';
import { InputBoxSkeleton } from './InputBoxSkeleton';
import { Option } from './Option';
import { Placeholder } from './Placeholder';
import { Wrapper } from './Wrapper';

export * from './Input';
export * from './InputBox';
export * from './InputBoxAddon';
export * from './InputBoxSkeleton';
export * from './Wrapper';

export default Object.assign(InputBox, {
  Input,
  Skeleton: InputBoxSkeleton,
  Wrapper,
  Addon: InputBoxAddon,
  Placeholder,
  Option,
});
