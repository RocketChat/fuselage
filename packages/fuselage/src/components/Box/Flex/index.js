import PropTypes from 'prop-types';
import React, { useCallback } from 'react';

import { BoxTransforms, useComposedBoxTransform } from '../BoxTransforms';

function FlexContainer({
  inline = false,
  children,
  direction,
  wrap,
  alignItems,
  alignContent,
  justifyContent,
}) {
  const transformFn = useCallback(
    (props) => {
      if (inline !== undefined && props.display === undefined) {
        props.display = inline ? 'inline-flex' : 'flex';
      }

      if (direction !== undefined && props.flexDirection === undefined) {
        props.flexDirection = direction;
      }

      if (wrap !== undefined && props.flexWrap === undefined) {
        props.flexWrap = wrap === 'no-wrap' ? 'nowrap' : wrap;
      }

      if (alignItems !== undefined && props.alignItems === undefined) {
        props.alignItems =
          (alignItems === 'start' && 'flex-start') ||
          (alignItems === 'end' && 'flex-end') ||
          alignItems;
      }

      if (alignContent !== undefined && props.alignContent === undefined) {
        props.alignContent =
          (alignContent === 'start' && 'flex-start') ||
          (alignContent === 'end' && 'flex-end') ||
          alignContent;
      }

      if (justifyContent !== undefined && props.justifyContent === undefined) {
        props.justifyContent =
          (justifyContent === 'start' && 'flex-start') ||
          (justifyContent === 'end' && 'flex-end') ||
          justifyContent;
      }

      return props;
    },
    [alignContent, alignItems, direction, inline, justifyContent, wrap]
  );

  return (
    <BoxTransforms.Provider
      children={children}
      value={useComposedBoxTransform(transformFn)}
    />
  );
}

FlexContainer.propTypes = {
  inline: PropTypes.bool,
  direction: PropTypes.oneOf([
    'row',
    'row-reverse',
    'column',
    'column-reverse',
  ]),
  wrap: PropTypes.oneOf(['no-wrap', 'wrap', 'wrap-reverse']),
  alignItems: PropTypes.oneOf([
    'stretch',
    'start',
    'center',
    'end',
    'baseline',
  ]),
  alignContent: PropTypes.oneOf([
    'start',
    'center',
    'end',
    'space-between',
    'space-around',
  ]),
  justifyContent: PropTypes.oneOf([
    'start',
    'center',
    'end',
    'space-between',
    'space-around',
  ]),
};

function FlexItem({ children, order, grow, shrink, basis, align }) {
  const transformFn = useCallback(
    (props) => {
      if (order !== undefined && props.order === undefined) {
        props.order = order;
      }

      if (grow !== undefined && props.flexGrow === undefined) {
        props.flexGrow = grow;
      }

      if (shrink !== undefined && props.flexShrink === undefined) {
        props.flexShrink = shrink;
      }

      if (basis !== undefined && props.flexBasis === undefined) {
        props.flexBasis = basis;
      }

      if (align !== undefined && props.alignSelf === undefined) {
        props.alignSelf =
          (align === 'start' && 'flex-start') ||
          (align === 'end' && 'flex-end') ||
          align;
      }

      return props;
    },
    [align, basis, grow, order, shrink]
  );

  return (
    <BoxTransforms.Provider
      children={children}
      value={useComposedBoxTransform(transformFn)}
    />
  );
}

FlexItem.propTypes = {
  order: PropTypes.number,
  grow: PropTypes.number,
  shrink: PropTypes.number,
  basis: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.oneOf(['auto']),
  ]),
  align: PropTypes.oneOf(['auto', 'start', 'end', 'center', 'stretch']),
};

export default {
  Container: FlexContainer,
  Item: FlexItem,
};
