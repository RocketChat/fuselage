import React, { ComponentProps } from 'react';
import { ActionButton, Box } from '@rocket.chat/fuselage';

type DoodleProps = ComponentProps<typeof Box>;

export const Doodle = (props: DoodleProps) => (
  <ActionButton ghost icon='pencil' {...props} />
);
