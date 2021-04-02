import React from 'react';

import { ActionButton } from '../Button';

export const ModalClose = (props) => (
  <ActionButton small ghost flexShrink={0} {...props} icon='cross' />
);
