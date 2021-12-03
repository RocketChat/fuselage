import React, { ComponentProps, FC } from 'react';

import { ActionButton, Button, Icon, Box } from '../..';

type BoxProps = ComponentProps<typeof Box>;
type ButtonProps = ComponentProps<typeof Button>;
export const Content: FC = (props) => (
  <div className='rcx-message-metrics__content' {...props} />
);
const ContentItem: FC = (props) => (
  <div className='rcx-message-metrics__content-item' {...props} />
);

type IconProps = { name: 'thread' | 'user' | 'clock' | 'discussion' };
type FollowingProps = { name: 'bell' | 'bell-off' };

const MetricsItemIcon: FC<IconProps> = (props) => (
  <Icon {...{ size: 'x24' }} {...(props as any)} />
);
const MetricsItemLabel: FC = (props) => (
  <div className='rcx-message-metrics__item-label' {...props} />
);

export const MessageMetricsItem: FC & {
  Icon: FC<IconProps>;
  Label: FC<BoxProps>;
} = (props) => <div className='rcx-message-metrics__item' {...props} />;

export const MessageMetrics: FC & {
  Item: FC<BoxProps> & { Icon: FC<IconProps>; Label: FC<BoxProps> };
  Following: FC<FollowingProps>;
  Reply: FC<ButtonProps>;
} = (props) => (
  <ContentItem>
    <div className='rcx-message-metrics__content-wrapper' {...props} />
  </ContentItem>
);
const MetricsFollowing: FC<FollowingProps> = ({ name }) => (
  <ActionButton
    {...({ color: 'info', small: true, ghost: true, icon: name } as any)}
  />
);

export const Reply: FC<ComponentProps<typeof Button>> = (props) => (
  <MessageMetricsItem>
    <Button {...props} {...{ small: true, primary: true }} />
  </MessageMetricsItem>
);

MessageMetrics.Reply = Reply;

MessageMetrics.Item = MessageMetricsItem;
MessageMetrics.Following = MetricsFollowing;

MessageMetricsItem.Label = MetricsItemLabel;
MessageMetricsItem.Icon = MetricsItemIcon;
