import PropTypes from 'prop-types';
import React from 'react';

import { useClassName } from '../../hooks';
import { Text } from '../Text';

export const Subtitle = React.forwardRef(function Subtitle({
  is,
  className,
  level = 2,
  ...props
}, ref) {
  const compoundClassName = useClassName('rcx-subtitle', {}, className);

  return <Text is={is || `h${ level }`} subtitle className={compoundClassName} ref={ref} {...props} />;
});

Subtitle.defaultProps = {
  level: 2,
};

Subtitle.displayName = 'Subtitle';

Subtitle.propTypes = {
  /**
   * The heading level, from 1 to 6 (`h1` to `h6`)
   */
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
};

Subtitle.Skeleton = function Skeleton({ animated, ...props }) {
  return <Subtitle {...props}>
    <Text.Skeleton animated={animated} />
  </Subtitle>;
};
