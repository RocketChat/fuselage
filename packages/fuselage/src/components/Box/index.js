import PropTypes from 'prop-types';
import React, { createElement, forwardRef, memo, useContext } from 'react';

import { PropsContext } from './PropsContext';
import { useStyleSheet } from './useStyleSheet';
import { mergeProps } from '../../props/mergeProps';
import { marginPropType } from '../../propTypes/margins';
import { paddingPropType } from '../../propTypes/paddings';
import { sizePropType } from '../../propTypes/sizes';

export const Box = memo(forwardRef(function Box(props, ref) {
  useStyleSheet();

  const contextProps = useContext(PropsContext);
  const { is, ...mergedProps } = mergeProps(props, contextProps, ref);

  const children = createElement(is || 'div', mergedProps);

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
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.arrayOf(PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.func,
    ])),
  ]),
  componentClassName: PropTypes.string,
  invisible: PropTypes.bool,
  is: PropTypes.elementType.isRequired,
  richText: PropTypes.oneOf(['inline', 'block']),
  style: PropTypes.object,
  textColor: PropTypes.oneOf([
    'default',
    'info',
    'hint',
    'disabled',
    'alternative',
    'primary',
    'success',
    'danger',
    'warning',
  ]),
  textStyle: PropTypes.oneOf([
    'h1',
    's1',
    's2',
    'p1',
    'p2',
    'c1',
    'c2',
    'micro',
  ]),

  // Spaces
  m: marginPropType,
  margin: marginPropType,
  mb: marginPropType,
  marginBlock: marginPropType,
  mbs: marginPropType,
  marginBlockStart: marginPropType,
  mbe: marginPropType,
  marginBlockEnd: marginPropType,
  mi: marginPropType,
  marginInline: marginPropType,
  mis: marginPropType,
  marginInlineStart: marginPropType,
  mie: marginPropType,
  marginInlineEnd: marginPropType,
  p: paddingPropType,
  padding: paddingPropType,
  pb: paddingPropType,
  paddingBlock: paddingPropType,
  pbs: paddingPropType,
  paddingBlockStart: paddingPropType,
  pbe: paddingPropType,
  paddingBlockEnd: paddingPropType,
  pi: paddingPropType,
  paddingInline: paddingPropType,
  pis: paddingPropType,
  paddingInlineStart: paddingPropType,
  pie: paddingPropType,
  paddingInlineEnd: paddingPropType,

  // Layout
  w: sizePropType,
  width: sizePropType,
  minWidth: sizePropType,
  maxWidth: sizePropType,
  h: sizePropType,
  height: sizePropType,
  minHeight: sizePropType,
  maxHeight: sizePropType,
  display: PropTypes.string,
  verticalAlign: PropTypes.string,
  overflow: PropTypes.string,
  overflowX: PropTypes.string,
  overflowY: PropTypes.string,

  // FlexBox
  alignItems: PropTypes.string,
  alignContent: PropTypes.string,
  justifyItems: PropTypes.string,
  justifyContent: PropTypes.string,
  flexWrap: PropTypes.string,
  flexDirection: PropTypes.string,
  flexGrow: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  flexShrink: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  flexBasis: PropTypes.string,
  justifySelf: PropTypes.string,
  alignSelf: PropTypes.string,
  order: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export * from './PropsContext';
export * from './AnimatedVisibility';
export * from './Flex';
export * from './Margins';
export * from './Position';
export * from './Scrollable';
