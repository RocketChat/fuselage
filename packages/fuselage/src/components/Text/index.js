import PropTypes from 'prop-types';
import React from 'react';

import { useClassName } from '../../hooks';
import { Box } from '../Box';

export const Text = React.forwardRef(function Text({
  className,

  headline,
  subtitle,
  paragraph,
  caption,
  micro,

  default: _default,
  info,
  hint,
  disabled,
  alternative,
  primary,
  success,
  danger,
  warning,

  ...props
}, ref) {
  const compoundClassName = useClassName('rcx-text', {
    headline,
    subtitle,
    paragraph,
    caption,
    micro,
    default: _default,
    info,
    hint,
    disabled,
    alternative,
    primary,
    success,
    danger,
    warning,
  }, className);

  return <Box className={compoundClassName} is='span' ref={ref} {...props} />;
});

Text.defaultProps = {
  headline: false,
  subtitle: false,
  paragraph: false,
  caption: false,
  micro: false,
};

Text.displayName = 'Text';

Text.propTypes = {
  headline: PropTypes.bool,
  subtitle: PropTypes.bool,
  paragraph: PropTypes.bool,
  caption: PropTypes.bool,
  micro: PropTypes.bool,
};

Text.Skeleton = function Skeleton({ animated, width = 1 }) {
  const compoundClassName = useClassName('rcx-text__skeleton', { animated, width });
  return <Box className={compoundClassName} is='span' />;
};
