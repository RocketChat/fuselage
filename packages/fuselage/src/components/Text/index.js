import PropTypes from 'prop-types';
import React from 'react';
import { useClassName } from '@rocket.chat/fuselage-hooks';

import { Box } from '../Box';

export const Text = React.forwardRef(function Text({
  className,

  headline,
  subtitle,
  paragraph,
  caption,
  micro,

  defaultColor,
  infoColor,
  hintColor,
  disabledColor,
  alternativeColor,
  primaryColor,
  successColor,
  dangerColor,
  warningColor,

  ...props
}, ref) {
  const compoundClassName = useClassName('rcx-text', {
    headline,
    subtitle,
    paragraph,
    caption,
    micro,
    defaultColor,
    infoColor,
    hintColor,
    disabledColor,
    alternativeColor,
    primaryColor,
    successColor,
    dangerColor,
    warningColor,
  }, className);

  return <Box className={compoundClassName} is='span' ref={ref} {...props} />;
});

Text.defaultProps = {
  headline: false,
  subtitle: false,
  paragraph: false,
  caption: false,
  micro: false,
  defaultColor: false,
  infoColor: false,
  hintColor: false,
  disabledColor: false,
  alternativeColor: false,
  primaryColor: false,
  successColor: false,
  dangerColor: false,
  warningColor: false,
};

Text.displayName = 'Text';

Text.propTypes = {
  headline: PropTypes.bool,
  subtitle: PropTypes.bool,
  paragraph: PropTypes.bool,
  caption: PropTypes.bool,
  micro: PropTypes.bool,
  defaultColor: PropTypes.bool,
  infoColor: PropTypes.bool,
  hintColor: PropTypes.bool,
  disabledColor: PropTypes.bool,
  alternativeColor: PropTypes.bool,
  primaryColor: PropTypes.bool,
  successColor: PropTypes.bool,
  dangerColor: PropTypes.bool,
  warningColor: PropTypes.bool,
};

Text.Skeleton = function Skeleton({ animated, width = 1 }) {
  const compoundClassName = useClassName('rcx-text__skeleton', { animated, width });
  return <Box className={compoundClassName} is='span' />;
};
