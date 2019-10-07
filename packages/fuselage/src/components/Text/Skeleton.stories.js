import React from 'react';

import { Text } from '../..';

export default {
  title: 'Typography|Text/Skeleton',
  component: Text.Skeleton,
  parameters: {
    jest: ['Text/spec'],
  },
};

export const _default = () =>
  <Text.Skeleton />;

export const animated = () =>
  <Text.Skeleton animated />;
