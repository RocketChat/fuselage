import React from 'react';

import { Hint } from '../..';

export default {
  title: 'Forms|Hint',
  component: Hint,
  parameters: {
    jest: ['Hint/spec'],
  },
};

export const _default = () =>
  <Hint>Help text</Hint>;
