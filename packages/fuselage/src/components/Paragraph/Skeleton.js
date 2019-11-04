import PropTypes from 'prop-types';
import React from 'react';

import { createStyledComponent } from '../../styles';
import { Text } from '../Text';

const Container = createStyledComponent('rcx-paragraph', 'p');

export function Skeleton({ animated, ...props }) {
  return <Container {...props}>
    <Text.Skeleton animated={animated} defaultColor paragraph />
    <Text.Skeleton animated={animated} defaultColor paragraph />
    <Text.Skeleton animated={animated} defaultColor paragraph width='4/5' />
  </Container>;
}

Skeleton.propTypes = {
  /** Is this component visible? */
  invisible: PropTypes.bool,
};
