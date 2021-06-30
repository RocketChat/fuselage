import { Box } from '@rocket.chat/fuselage';
import React, { forwardRef, ComponentProps } from 'react';

type PreviewProps = ComponentProps<typeof Box> & {
  imgSrc: string;
};

export const Preview = forwardRef<typeof Box, PreviewProps>(
  ({ imgSrc, ...props }, ref) => (
    <Box is='img' src={imgSrc} ref={ref} {...props} />
  )
);
