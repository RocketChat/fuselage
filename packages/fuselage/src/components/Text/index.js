import PropTypes from 'prop-types';
import React from 'react';
import { useClassName } from '@rocket.chat/fuselage-hooks';

import { StyledText, StyledTextSkeleton } from './styles';
import variables from '../../styles/variables';

export const Text = React.forwardRef(function Text({
  className,
  is = 'span',

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

  return <StyledText
    className={compoundClassName}
    colorVariant={
      (defaultColor && 'default')
      || (infoColor && 'info')
      || (hintColor && 'hint')
      || (disabledColor && 'disabled')
      || (alternativeColor && 'alternative')
      || (primaryColor && 'primary')
      || (successColor && 'success')
      || (dangerColor && 'danger')
      || (warningColor && 'warning')
      || 'default'}
    as={is}
    ref={ref}
    styleVariant={
      (headline && 'headline')
      || (subtitle && 'subtitle')
      || (paragraph && 'paragraph')
      || (caption && 'caption')
      || (micro && 'micro')
      || 'paragraph'}
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

Text.Styled = StyledText;

function Skeleton({ animated, width = '1/1' }) {
  const compoundClassName = useClassName('rcx-text__skeleton', { animated, width });

  return <StyledTextSkeleton
    animated={animated}
    className={compoundClassName}
    width={width}
  />;
}

Skeleton.defaultProps = {
  animated: false,
  width: '1/1',
};

Skeleton.displayName = 'Text.Skeleton';

Skeleton.propTypes = {
  animated: PropTypes.bool,
  width: PropTypes.oneOf(Object.keys(variables.widths)),
};

Skeleton.Styled = StyledTextSkeleton;

Text.Skeleton = Skeleton;
