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
  <Text defaultColor>Text</Text>;

export const infoColor = () =>
  <Text infoColor>Text</Text>;

export const hintColor = () =>
  <Text hintColor>Text</Text>;

export const disabledColor = () =>
  <Text disabledColor>Text</Text>;

export const alternativeColor = () =>
  <Text alternativeColor>Text</Text>;

export const primaryColor = () =>
  <Text primaryColor>Text</Text>;

export const successColor = () =>
  <Text successColor>Text</Text>;

export const dangerColor = () =>
  <Text dangerColor>Text</Text>;

export const warningColor = () =>
  <Text warningColor>Text</Text>;
