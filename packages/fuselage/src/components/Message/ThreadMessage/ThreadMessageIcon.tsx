import { Icon, type IconProps } from '../../Icon';

export type ThreadMessageIconProps = IconProps;

const ThreadMessageIcon = ({ ...props }: IconProps) => (
  <Icon
    size='x16'
    color='info'
    {...props}
  />
);

export default ThreadMessageIcon;
