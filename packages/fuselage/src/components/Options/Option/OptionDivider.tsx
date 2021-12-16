import React, { ComponentProps, FC } from 'react';

import { Divider } from '../..';

const OptionDivider: FC<ComponentProps<typeof Divider>> = (props) => (
  <Divider {...props} />
);

export default OptionDivider;
