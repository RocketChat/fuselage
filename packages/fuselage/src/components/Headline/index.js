import PropTypes from 'prop-types';
import React from 'react';
import { useClassName } from '@rocket.chat/fuselage-hooks';

import { Text } from '../Text';

export const Headline = React.forwardRef(function Headline({
  is,
  className,
  level = 1,
  ...props
}, ref) {
  const compoundClassName = useClassName('rcx-headline', {}, className);

  return <Text is={is || `h${ level }`} headline className={compoundClassName} ref={ref} {...props} />;
});

Headline.defaultProps = {
  level: 1,
};

Headline.displayName = 'Headline';

Headline.propTypes = {
  /**
   * The heading level, from 1 to 6 (`h1` to `h6`)
   */
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
};

Headline.Skeleton = function Skeleton({ animated, ...props }) {
  return <Headline {...props}>
    <Text.Skeleton animated={animated} />
  </Headline>;
};
