import PropTypes from 'prop-types';
import React from 'react';

import { createStyledComponent } from '../../styles';
import variables from '../../styles/variables';
import styles from './styles';

const SkeletonContainer = createStyledComponent(styles, 'rcx-skeleton__text', 'span');

export function Skeleton({ animated, width }) {
  return <SkeletonContainer modifiers={{ animated, width }} />;
}

Skeleton.defaultProps = {
  animated: false,
  width: '1/1',
};

Skeleton.displayName = 'Text.Skeleton';

Skeleton.propTypes = {
  animated: PropTypes.bool,
  /** Is this component visible? */
  invisible: PropTypes.bool,
  width: PropTypes.oneOf(Object.keys(variables.widths)),
};
