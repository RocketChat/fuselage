import PropTypes from 'prop-types';
import React from 'react';

import { createStyledComponent } from '../../styles';
import variables from '../../styles/variables';
import styles from './styles';

const SkeletonContainer = createStyledComponent(styles, 'rcx-skeleton__text', 'span');

export function Skeleton({
  animated,

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

  width,
}) {
  return <SkeletonContainer
    mod-animated={animated}
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
    mod-width={width}
  />;
}

Skeleton.defaultProps = {
  animated: false,
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
  width: '1/1',
};

Skeleton.displayName = 'Text.Skeleton';

Skeleton.propTypes = {
  animated: PropTypes.bool,
  /** Is this component visible? */
  invisible: PropTypes.bool,
  width: PropTypes.oneOf(Object.keys(variables.widths)),
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
