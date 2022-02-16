import Option from './Option';
import OptionAvatar from './OptionAvatar';
import OptionColumn from './OptionColumn';
import OptionContent from './OptionContent';
import OptionDescription from './OptionDescription';
import OptionDivider from './OptionDivider';
import OptionHeader from './OptionHeader';
import OptionIcon from './OptionIcon';
import OptionMenu from './OptionMenu';
import OptionSkeleton from './OptionSkeleton';
import OptionTitle from './OptionTitle';

export default Object.assign(Option, {
  Description: OptionDescription,
  Skeleton: OptionSkeleton,
  Avatar: OptionAvatar,
  Menu: OptionMenu,
  Icon: OptionIcon,
  Divider: OptionDivider,
  Column: OptionColumn,
  Content: OptionContent,
});

export { OptionAvatar };
export { OptionColumn };
export { OptionContent };
export { OptionDescription };
export { OptionDivider };
export { OptionIcon };
export { OptionMenu };
export { OptionSkeleton };
export { OptionTitle };
export { OptionHeader };
