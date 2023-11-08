import type { ComponentProps } from 'react';
import React from 'react';

import { IconButton } from '../Button';

const CardFramedIcon = ({
  icon,
  ...props
}: ComponentProps<typeof IconButton>) => (
  <IconButton secondary small icon={icon} {...props} />
  // <Icon name={name} size='x24' {...props} />
);

export default CardFramedIcon;
