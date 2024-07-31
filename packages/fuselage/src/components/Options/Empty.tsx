import { memo } from 'react';

import Option from '../Option';

/** @public */
export type EmptyProps = {
  customEmpty: string;
};

/** @public */
const Empty = ({ customEmpty }: EmptyProps) => (
  <Option label={customEmpty || 'Empty'} />
);

export default memo(Empty);
