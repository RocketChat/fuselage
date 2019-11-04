import PropTypes from 'prop-types';
import React from 'react';

import { createStyledComponent } from '../../styles';
import { Skeleton } from './Skeleton';

const Container = createStyledComponent('rcx-text', 'span');

export const Text = React.forwardRef(function Text({
  is,

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
  return <Container
    as={is}
    mod-color={(defaultColor && 'default')
    || (infoColor && 'info')
    || (hintColor && 'hint')
    || (disabledLabelColor && 'disabled-label')
    || (disabledColor && 'disabled')
    || (alternativeColor && 'alternative')
    || (primaryColor && 'primary')
    || (successColor && 'success')
    || (dangerColor && 'danger')
    || (warningColor && 'warning')}
    mod-style={(headline && 'headline')
    || (subtitle && 'subtitle')
    || (paragraph && 'paragraph')
    || (caption && 'caption')
    || (micro && 'micro')}
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
  /** Is this component visible? */
  invisible: PropTypes.bool,
  is: PropTypes.elementType,
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
