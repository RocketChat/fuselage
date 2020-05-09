import PropTypes from 'prop-types';
import React from 'react';

import { patchChildren } from '../../../helpers/patchChildren';
import { mapFlexBoxProps } from '../../../styles/props/flexBox';

export function FlexContainer({ inline = false, children, direction, wrap, alignItems, alignContent, justifyContent, ...props }) {
  return <>
    {patchChildren(children, {
      ...props,
      display: inline ? 'inline-flex' : 'flex',
      flexDirection: direction,
      flexWrap: (wrap === 'no-wrap' && 'nowrap') || wrap,
      alignItems: (alignItems === 'start' && 'flex-start')
      || (alignItems === 'end' && 'flex-end')
      || alignItems,
      alignContent: (alignContent === 'start' && 'flex-start')
      || (alignContent === 'end' && 'flex-end')
      || alignContent,
      justifyContent: (justifyContent === 'start' && 'flex-start')
      || (justifyContent === 'end' && 'flex-end')
      || justifyContent,
    }, [mapFlexBoxProps])}
  </>;
}

FlexContainer.propTypes = {
  inline: PropTypes.bool,
  direction: PropTypes.oneOf(['row', 'row-reverse', 'column', 'column-reverse']),
  wrap: PropTypes.oneOf(['no-wrap', 'wrap', 'wrap-reverse']),
  alignItems: PropTypes.oneOf(['stretch', 'start', 'center', 'end', 'baseline']),
  alignContent: PropTypes.oneOf(['start', 'center', 'end', 'space-between', 'space-around']),
  justifyContent: PropTypes.oneOf(['start', 'center', 'end', 'space-between', 'space-around']),
};

export function FlexItem({ children, order, grow, shrink, basis, align, ...props }) {
  return <>
    {patchChildren(children, {
      ...props,
      order,
      flexGrow: grow,
      flexShrink: shrink,
      flexBasis: basis,
      alignSelf: (align === 'start' && 'flex-start')
      || (align === 'end' && 'flex-end')
      || align,
    }, [mapFlexBoxProps])}
  </>;
}

FlexItem.propTypes = {
  order: PropTypes.number,
  grow: PropTypes.number,
  shrink: PropTypes.number,
  basis: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.oneOf(['auto'])]),
  align: PropTypes.oneOf(['auto', 'start', 'end', 'center', 'stretch']),
};

export const Flex = {
  Container: FlexContainer,
  Item: FlexItem,
};
