import React from 'react';

import { Text } from '../..';

export default {
  title: 'Typography|Text',
  component: Text,
  parameters: {
    jest: ['Text/spec'],
  },
};

export const _default = () =>
  <Text>Text</Text>;

export const headline = () =>
  <Text headline>Text</Text>;

export const subtitle = () =>
  <Text subtitle>Text</Text>;

export const paragraph = () =>
  <Text paragraph>Text</Text>;

export const caption = () =>
  <Text caption>Text</Text>;

export const micro = () =>
  <Text micro>Text</Text>;

export const defaultColor = () =>
  <Text default>Text</Text>;

export const infoColor = () =>
  <Text info>Text</Text>;

export const hintColor = () =>
  <Text hint>Text</Text>;

export const disabledColor = () =>
  <Text disabled>Text</Text>;

export const alternativeColor = () =>
  <Text alternative>Text</Text>;

export const primaryColor = () =>
  <Text primary>Text</Text>;

export const successColor = () =>
  <Text success>Text</Text>;

export const dangerColor = () =>
  <Text danger>Text</Text>;

export const warningColor = () =>
  <Text warning>Text</Text>;
