import { Icon, type IconProps } from '../../Icon';

export const ThreadMessageIcon = ({ ...props }: IconProps) => (
  <Icon
    className='rcx-box rcx-box--full rcx-message-thread__icon'
    size='x16'
    {...props}
  />
);
