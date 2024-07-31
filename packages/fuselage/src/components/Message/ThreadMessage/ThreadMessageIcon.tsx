import type { ReactElement } from 'react';

import { Icon, type IconProps } from '../../Icon';

type ThreadMessageIconProps = IconProps;

export const ThreadMessageIcon = ({
  ...props
}: ThreadMessageIconProps): ReactElement => (
  <Icon
    className='rcx-box rcx-box--full rcx-message-thread__icon'
    size='x16'
    {...props}
  />
);
