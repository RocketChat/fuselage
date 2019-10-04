import React from 'react';

import { Icon } from '../..';

export default {
  title: 'Misc|Icon',
  component: Icon,
  parameters: {
    jest: ['Icon/spec'],
  },
};

export const _default = () =>
  <Icon name='send' />;
