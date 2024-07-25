import Option from './Option';
import OptionAvatar from './OptionAvatar';
import OptionColumn from './OptionColumn';
import OptionContent from './OptionContent';
import OptionDescription from './OptionDescription';
import OptionDivider from './OptionDivider';
import OptionIcon from './OptionIcon';
import OptionMenu from './OptionMenu';
import OptionSkeleton from './OptionSkeleton';

export default Object.assign(Option, {
  /** @deprecated Use `OptionDescription` instead */
  Description: OptionDescription,
  /** @deprecated Use `OptionSkeleton` instead */
  Skeleton: OptionSkeleton,
  /** @deprecated Use `OptionAvatar` instead */
  Avatar: OptionAvatar,
  /** @deprecated Use `OptionMenu` instead */
  Menu: OptionMenu,
  /** @deprecated Use `OptionIcon` instead */
  Icon: OptionIcon,
  /** @deprecated Use `OptionDivider` instead */
  Divider: OptionDivider,
  /** @deprecated Use `OptionColumn` instead */
  Column: OptionColumn,
  /** @deprecated Use `OptionContent` instead */
  Content: OptionContent,
});

export { default as CheckOption, CheckOptionProps } from './CheckOption';
export { default as Option, OptionProps } from './Option';
export { default as OptionAvatar, OptionAvatarProps } from './OptionAvatar';
export { default as OptionColumn, OptionColumnProps } from './OptionColumn';
export { default as OptionContent, OptionContentProps } from './OptionContent';
export {
  default as OptionDescription,
  OptionDescriptionProps,
} from './OptionDescription';
export {
  default as OptionDescriptionBlock,
  OptionDescriptionBlockProps,
} from './OptionDescriptionBlock';
export { default as OptionDivider, OptionDividerProps } from './OptionDivider';
export { default as OptionIcon, OptionIconProps } from './OptionIcon';
export { default as OptionInput, OptionInputProps } from './OptionInput';
export { default as OptionMenu, OptionMenuProps } from './OptionMenu';
export { default as OptionSkeleton } from './OptionSkeleton';
export { default as OptionTitle, OptionTitleProps } from './OptionTitle';
export { default as OptionHeader, OptionHeaderProps } from './OptionHeader';
