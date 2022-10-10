import React from 'react';

import { Skeleton } from '../Skeleton';
import Option from './Option';
import OptionAvatar from './OptionAvatar';
import OptionContent from './OptionContent';

const OptionSkeleton = () => (
  <Option>
    <OptionAvatar>
      <Skeleton variant='rect' width={28} height={28} />
    </OptionAvatar>
    <OptionContent>
      <Skeleton width='100%' />
    </OptionContent>
  </Option>
);

export default OptionSkeleton;
