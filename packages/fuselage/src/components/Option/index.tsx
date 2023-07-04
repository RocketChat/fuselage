import Option from './Option';
import OptionAvatar from './OptionAvatar';
import OptionColumn from './OptionColumn';
import OptionContent from './OptionContent';
import OptionDescription from './OptionDescription';
import OptionDescriptionBlock from './OptionDescriptionBlock';
import OptionDivider from './OptionDivider';
import OptionHeader from './OptionHeader';
import OptionIcon from './OptionIcon';
import OptionInput from './OptionInput';
import OptionMenu from './OptionMenu';
import OptionSkeleton from './OptionSkeleton';
import OptionTitle from './OptionTitle';

export default Object.assign(Option, {
  /** @deprecated */
  Description: OptionDescription,
  /** @deprecated */
  Skeleton: OptionSkeleton,
  /** @deprecated */
  Avatar: OptionAvatar,
  /** @deprecated */
  Menu: OptionMenu,
  /** @deprecated */
  Icon: OptionIcon,
  /** @deprecated */
  Divider: OptionDivider,
  /** @deprecated */
  Column: OptionColumn,
  /** @deprecated */
  Content: OptionContent,
});

export * from './CheckOption';
export { OptionAvatar };
export { OptionColumn };
export { OptionContent };
export { OptionDescription };
export { OptionDescriptionBlock };
export { OptionDivider };
export { OptionIcon };
export { OptionInput };
export { OptionMenu };
export { OptionSkeleton };
export { OptionTitle };
export { OptionHeader };
