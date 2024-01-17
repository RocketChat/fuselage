import React from 'react';

import Option from './Option';
import { Skeleton } from '../Skeleton';

const OptionSkeleton = () => (
  <Option>
    <Skeleton width='100%' />
  </Option>
);

export default OptionSkeleton;
