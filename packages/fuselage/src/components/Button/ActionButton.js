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

export const ActionButton = ({ icon, ...props }) => <Button {...props} square small flexShrink={0}><Icon name={icon} size={getSize(props)}/></Button>;
