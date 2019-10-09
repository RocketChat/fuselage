import React from 'react';

import { Headline } from '../..';

export default {
  title: 'Typography|Headline',
  component: Headline,
  parameters: {
    jest: ['Headline/spec'],
  },
};

export const _default = () =>
  <Headline>Headline</Headline>;

export const skeleton = () =>
  <Headline.Skeleton />;
