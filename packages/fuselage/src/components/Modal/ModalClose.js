import React from 'react';

import { Button } from '../Button';
import { Icon } from '../Icon';

export const ModalClose = (props) => (
  <Button small ghost flexShrink={0} {...props}>
    <Icon name='cross' size='x24' />
  </Button>
);
