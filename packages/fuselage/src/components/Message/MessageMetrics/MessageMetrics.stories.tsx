import { action } from '@storybook/addon-actions';
import { Title, Primary } from '@storybook/addon-docs';
import type { ComponentMeta } from '@storybook/react';
import React from 'react';

import {
  MessageMetrics,
  MessageMetricsReply,
  MessageMetricsItem,
  MessageMetricsFollowing,
  MessageMetricsItemIcon,
  MessageMetricsItemLabel,
} from '.';
import { BasicMessageTemplate } from '../helpers';

export default {
  title: 'Message/MessageMetrics',
  component: MessageMetrics,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Primary />
        </>
      ),
    },
  },
} satisfies ComponentMeta<typeof MessageMetrics>;

const metrics = (
  <MessageMetrics>
    <MessageMetricsReply>Reply</MessageMetricsReply>
    <MessageMetricsItem title='Replies'>
      <MessageMetricsItemIcon name='thread' />
      <MessageMetricsItemLabel>10</MessageMetricsItemLabel>
    </MessageMetricsItem>
    <MessageMetricsItem>
      <MessageMetricsFollowing
        title='Following'
        name='bell'
        onClick={action('click')}
      />
    </MessageMetricsItem>
  </MessageMetrics>
);

export const Default = BasicMessageTemplate.bind({});
Default.args = {
  metrics,
};
