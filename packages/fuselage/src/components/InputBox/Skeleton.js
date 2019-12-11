import PropTypes from 'prop-types';
import React from 'react';

import { Box } from '../Box';
import { Text } from '../Text';

const SkeletonContainer = Box.extend('rcx-skeleton__input', 'span');

export function Skeleton({ animated }) {
  return <SkeletonContainer>
    <Text.Skeleton animated={animated} />
  </SkeletonContainer>;
}

Skeleton.defaultProps = {
  animated: false,
};

Skeleton.displayName = 'InputBox.Skeleton';

Skeleton.propTypes = {
  animated: PropTypes.bool,
};
