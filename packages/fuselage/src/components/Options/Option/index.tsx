import Option from './Option';
import OptionAvatar from './OptionAvatar';
import OptionColumn from './OptionColumn';
import OptionContent from './OptionContent';
import OptionDescription from './OptionDescription';
import OptionIcon from './OptionIcon';
import OptionMenu from './OptionMenu';
import OptionSkeleton from './OptionSkeleton';

export default Object.assign(Option, {
  Description: OptionDescription,
  Skeleton: OptionSkeleton,
  Avatar: OptionAvatar,
  Menu: OptionMenu,
  Icon: OptionIcon,
  Column: OptionColumn,
  Content: OptionContent,
});
