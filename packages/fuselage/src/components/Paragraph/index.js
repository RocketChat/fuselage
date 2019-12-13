import PropTypes from 'prop-types';
import React from 'react';

import { Box } from '../Box';
import { Text } from '../Text';

export function ParagraphSkeleton({ animated = false, ...props }) {
  return <Box is='p' componentClassName='rcx-paragraph' {...props}>
    <Text.Skeleton animated={animated} defaultColor paragraph />
    <Text.Skeleton animated={animated} defaultColor paragraph />
    <Text.Skeleton animated={animated} defaultColor paragraph width='4/5' />
  </Box>;
}

ParagraphSkeleton.propTypes = {
  animated: PropTypes.bool,
};

export function Paragraph(props) {
  return <Box is='p' componentClassName='rcx-paragraph' {...props} />;
}

Paragraph.Skeleton = ParagraphSkeleton;
