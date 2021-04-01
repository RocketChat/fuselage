import React, { ComponentProps, FC } from 'react';
import { BoxProps, ButtonProps } from '@rocket.chat/fuselage';

import { ActionButton, Box, Button, Icon } from '../..';

export const Content: FC = (props) => (
  <div className='rcx-message-metrics__content' {...props} />
);
const ContentItem: FC = (props) => (
  <div className='rcx-message-metrics__content-item' {...props} />
);

export const Reply: FC<ComponentProps<typeof Button>> = (props) => (
  <MetricsItem>
    <Button {...props} {...{ small: true, primary: true }} />
  </MetricsItem>
);

type IconProps = { name: 'thread' | 'user' | 'clock' | 'discussion' };
type FollowingProps = { name: 'bell' | 'bell-off' };

const MetricsItemIcon: FC<IconProps> = (props) => (
  <Icon {...{ size: 'x24' }} {...(props as any)} />
);
const MetricsItemLabel: FC = (props) => (
  <div className='rcx-message-metrics__item-label' {...props} />
);

const MetricsItem: FC & {
  Icon: FC<IconProps>;
  Label: FC<BoxProps>;
} = (props) => <div className='rcx-message-metrics__item' {...props} />;

export const Metrics: FC & {
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

Metrics.Reply = Reply;

Metrics.Item = MetricsItem;
Metrics.Following = MetricsFollowing;

MetricsItem.Label = MetricsItemLabel;
MetricsItem.Icon = MetricsItemIcon;
