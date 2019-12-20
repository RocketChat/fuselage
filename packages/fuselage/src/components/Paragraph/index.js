import React from 'react';

import { Box } from '../Box';
import { Skeleton } from '../Skeleton';

export function Paragraph(props) {
  return <Box is='p' componentClassName='rcx-paragraph' {...props} />;
}

export function ParagraphSkeleton(props) {
  return <Box componentClassName='rcx-paragraph' {...props}>
    <Skeleton />
    <Skeleton />
    <Skeleton width='80%' />
  </Box>;
}

Paragraph.Skeleton = ParagraphSkeleton;
