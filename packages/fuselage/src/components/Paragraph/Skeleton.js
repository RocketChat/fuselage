import PropTypes from 'prop-types';
import React from 'react';

import { Box } from '../Box';
import { Text } from '../Text';

const Container = Box.extend('rcx-paragraph', 'p');

export function Skeleton({ animated, ...props }) {
  return <Container {...props}>
    <Text.Skeleton animated={animated} defaultColor paragraph />
    <Text.Skeleton animated={animated} defaultColor paragraph />
    <Text.Skeleton animated={animated} defaultColor paragraph width='4/5' />
  </Container>;
}

Skeleton.propTypes = {
  animated: PropTypes.bool,
};
