import React from 'react';

import { Button, Icon } from '../..';

export default {
  title: 'Buttons|Button',
  component: Button,
  parameters: {
    jest: ['Button/spec'],
  },
};

export const _default = () =>
  <Button>Button</Button>;

export const primary = () =>
  <Button primary>Button</Button>;

export const ghost = () =>
  <Button ghost>Button</Button>;

export const danger = () =>
  <Button danger>Button</Button>;

export const small = () =>
  <Button small>Button</Button>;

export const withIcon = () =>
  <Button>
    <Icon iconName='edit' /> Edit
  </Button>;

export const asLink = () =>
  <Button is='a' href='https://rocket.chat' external>Button</Button>;

export const square = () =>
  <Button square>
    <Icon iconName='plus' />
  </Button>;
