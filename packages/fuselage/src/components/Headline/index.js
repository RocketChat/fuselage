import PropTypes from 'prop-types';
import React from 'react';

import { createStyledComponent } from '../../styles';
import { Text } from '../Text';
import { Skeleton } from './Skeleton';
import styles from './styles';

const Container = createStyledComponent(styles, 'rcx-headline', Text);

export const Headline = React.forwardRef(function Headline({
  level,
  ...props
}, ref) {
  return <Container headline is={`h${ level }`} ref={ref} {...props} />;
});

Headline.defaultProps = {
  level: 1,
};

Headline.displayName = 'Headline';

Headline.propTypes = {
  /** Is this component visible? */
  invisible: PropTypes.bool,
  /** The heading level, from 1 to 6 (`h1` to `h6`) */
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
};

Headline.Skeleton = Skeleton;
