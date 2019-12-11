import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

import { Box } from '../Box';
import { Skeleton } from './Skeleton';

export const Text = forwardRef(function Text({
  is = 'span',

  headline,
  subtitle,
  paragraph,
  caption,
  micro,

  defaultColor,
  infoColor,
  hintColor,
  disabledLabelColor,
  disabledColor,
  alternativeColor,
  primaryColor,
  successColor,
  dangerColor,
  warningColor,

  ...props
}, ref) {
  return <Box
    componentClassName='rcx-text'
    is={is}
    textColor={(defaultColor && 'default')
    || (infoColor && 'info')
    || (hintColor && 'hint')
    || (disabledLabelColor && 'disabled-label')
    || (disabledColor && 'disabled')
    || (alternativeColor && 'alternative')
    || (primaryColor && 'primary')
    || (successColor && 'success')
    || (dangerColor && 'danger')
    || (warningColor && 'warning')
    || 'default'}
    textStyle={(headline && 'headline')
    || (subtitle && 'subtitle')
    || (paragraph && 'paragraph')
    || (caption && 'caption')
    || (micro && 'micro')
    || 'paragraph'}
    ref={ref}
    {...props}
  />;
});

Text.defaultProps = {
  is: 'span',
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

Text.Skeleton = Skeleton;
