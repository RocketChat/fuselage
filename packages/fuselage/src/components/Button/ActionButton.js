import React from 'react';

import { Button } from '.';
import { Icon } from '../Icon';

const getSize = ({ tiny, mini, small }) => {
  if (mini) {
    return 'x16';
  }

  if (tiny) {
    return 'x20';
  }

  if (small) {
    return 'x24';
  }

  return 'x20';
};

export const ActionButton = React.forwardRef(({ icon, ...props }, ref) => <Button ref={ref} square flexShrink={0} {...props}><Icon name={icon} size={getSize(props)}/></Button>);
