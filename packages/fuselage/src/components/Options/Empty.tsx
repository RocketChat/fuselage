import React, { memo } from 'react';

import Option from '../Option';

type EmptyProps = {
  customEmpty: string;
};

const Empty = ({ customEmpty }: EmptyProps) => (
  <Option label={customEmpty || 'Empty'} />
);

export default memo(Empty);
