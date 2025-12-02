import type { ReactElement } from 'react';

import type { IconProps } from '../..';
import { Icon } from '../..';

export const ThreadMessageIcon = ({ ...props }: IconProps): ReactElement => (
  <Icon
    className='rcx-box rcx-box--full rcx-message-thread__icon'
    size='x16'
    {...props}
  />
);
