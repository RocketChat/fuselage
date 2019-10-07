import React from 'react';

import { Paragraph } from '../..';

export default {
  title: 'Typography|Paragraph',
  component: Paragraph,
  parameters: {
    jest: ['Paragraph/spec'],
  },
};

export const _default = () =>
  <Paragraph>Paragraph</Paragraph>;

export const skeleton = () =>
  <Paragraph.Skeleton />;
