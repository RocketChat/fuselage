import React, { ComponentProps } from 'react';
import { ActionButton, Box } from '@rocket.chat/fuselage';

type TextProps = ComponentProps<typeof Box>;

export const Text = (props: TextProps) => (
  <ActionButton ghost icon='star' {...props} />
);
