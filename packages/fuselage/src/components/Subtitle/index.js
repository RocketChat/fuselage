import PropTypes from 'prop-types';
import React from 'react';

import { createStyledComponent } from '../../styles';
import { Text } from '../Text';
import { Skeleton } from './Skeleton';
import styles from './styles';

const Container = createStyledComponent(styles, 'rcx-subtitle', Text);

export const Subtitle = React.forwardRef(function Subtitle({
  level,
  ...props
}, ref) {
  return <Container subtitle is={`h${ level }`} ref={ref} {...props} />;
});

Subtitle.defaultProps = {
  level: 2,
};

Subtitle.displayName = 'Subtitle';

Subtitle.propTypes = {
  /** Is this component visible? */
  invisible: PropTypes.bool,
  /** The heading level, from 1 to 6 (`h1` to `h6`) */
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
};

Subtitle.Skeleton = Skeleton;
