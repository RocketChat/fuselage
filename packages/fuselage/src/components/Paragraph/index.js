import PropTypes from 'prop-types';
import React from 'react';

import { Box } from '../Box';
import { Text } from '../Text';
import { Skeleton } from './Skeleton';

const Container = Box.extend('rcx-paragraph', 'p');

export function Paragraph({
  children,
  ...props
}) {
  return <Container {...props}>
    <Text paragraph children={children} />
  </Container>;
}

Paragraph.displayName = 'Paragraph';

Paragraph.propTypes = {
  /** Is this component visible? */
  invisible: PropTypes.bool,
};

Paragraph.Skeleton = Skeleton;
