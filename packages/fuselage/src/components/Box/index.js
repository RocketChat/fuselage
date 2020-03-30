import PropTypes from 'prop-types';
import React, { createElement, forwardRef, memo, useContext } from 'react';

import { PropsContext } from './PropsContext';
import { useStyleSheet } from './useStyleSheet';
import { useMergedProps } from './useMergedProps';
import { marginPropType } from '../../propTypes/margins';
import { paddingPropType } from '../../propTypes/paddings';

export const Box = memo(forwardRef(function Box(props, ref) {
  useStyleSheet();

  const contextProps = useContext(PropsContext);
  const mergedProps = useMergedProps(props, contextProps, ref);

  const children = createElement(mergedProps.is || 'div', {
    ...mergedProps,
    is: undefined,
    className: Array.from(new Set(mergedProps.className)).filter(Boolean).join(' '),
    style: mergedProps.style,
  });

  if (contextProps) {
    return <PropsContext.Provider children={children} />;
  }

  return children;
}));

Box.defaultProps = {
  invisible: false,
  is: 'div',
};

Box.propTypes = {
  className: PropTypes.string,
  componentClassName: PropTypes.string,
  invisible: PropTypes.bool,
  is: PropTypes.elementType.isRequired,
  richText: PropTypes.oneOf(['inline', 'block']),
  style: PropTypes.object,
  textColor: PropTypes.oneOf([
    'default', 'info', 'hint', 'disabled-label', 'disabled', 'alternative',
    'primary', 'success', 'danger', 'warning',
  ]),
  textStyle: PropTypes.oneOf([
    'h1', 's1', 's2', 'p1', 'p2', 'c1', 'c2', 'micro', 'mono',
    'headline', 'subtitle', 'paragraph', 'caption',
  ]),

  // Spaces
  m: marginPropType,
  mi: marginPropType,
  mis: marginPropType,
  mie: marginPropType,
  mb: marginPropType,
  mbs: marginPropType,
  mbe: marginPropType,
  p: paddingPropType,
  pi: paddingPropType,
  pis: paddingPropType,
  pie: paddingPropType,
  pb: paddingPropType,
  pbs: paddingPropType,
  pbe: paddingPropType,
};

Box.extend = (componentClassName, is) => {
  const BoxExtension = forwardRef((props, ref) =>
    <Box is={is} componentClassName={componentClassName} ref={ref} {...props} />);

  BoxExtension.displayName = componentClassName;

  return BoxExtension;
};

export * from './PropsContext';
export * from './AnimatedVisibility';
export * from './Flex';
export * from './Margins';
export * from './Position';
export * from './Scrollable';
export * from './Size';
