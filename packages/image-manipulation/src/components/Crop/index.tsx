import React, { ComponentProps } from 'react';
import { Box, ActionButton } from '@rocket.chat/fuselage';

type CropProps = ComponentProps<typeof Box>;

export const Crop = (props: CropProps) => (
  <ActionButton ghost icon='star' {...props} />
);
