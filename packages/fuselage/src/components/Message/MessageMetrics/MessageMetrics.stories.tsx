import { action } from '@storybook/addon-actions';
import type { ComponentMeta } from '@storybook/react';
import React from 'react';

import { BasicMessageTemplate } from '../helpers';
import MessageMetrics from './MessageMetrics';
import MessageMetricsFollowing from './MessageMetricsFollowing';
import MessageMetricsItem, {
  MessageMetricsItemIcon,
  MessageMetricsItemLabel,
} from './MessageMetricsItem';
import MessageMetricsReply from './MessageMetricsReply';

export default {
  title: 'Message/MessageMetrics',
  component: MessageMetrics,
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
