import PropTypes from 'prop-types';
import React from 'react';

import { Box } from '../Box';

const SkeletonContainer = Box.extend('rcx-skeleton__text', 'span');

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
  width: PropTypes.oneOf([
    '1/1', '1/2', '1/3', '1/4', '1/5', '1/6', '1/7', '1/8', '1/9', '1/10', '1/11', '1/12',
    '2/2', '2/3', '2/4', '2/5', '2/6', '2/7', '2/8', '2/9', '2/10', '2/11', '2/12',
    '3/3', '3/4', '3/5', '3/6', '3/7', '3/8', '3/9', '3/10', '3/11', '3/12',
    '4/4', '4/5', '4/6', '4/7', '4/8', '4/9', '4/10', '4/11', '4/12',
    '5/5', '5/6', '5/7', '5/8', '5/9', '5/10', '5/11', '5/12',
    '6/6', '6/7', '6/8', '6/9', '6/10', '6/11', '6/12',
    '7/7', '7/8', '7/9', '7/10', '7/11', '7/12',
    '8/8', '8/9', '8/10', '8/11', '8/12',
    '9/9', '9/10', '9/11', '9/12',
    '10/10', '10/11', '10/12',
    '11/11', '11/12',
    '12/12',
    'full',
    'screen',
  ]),
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
