import PropTypes from 'prop-types';
import React, { useMemo } from 'react';

import { StylingPropsProvider } from '../contexts/stylingProps';

export function FlexContainer({ inline = false, children, direction, wrap, alignItems, alignContent, justifyContent }) {
  const stylingProps = useMemo(() => ({
    ...inline !== undefined && { display: inline ? 'inline-flex' : 'flex' },
    ...direction !== undefined && { flexDirection: direction },
    ...wrap !== undefined && { flexWrap: (wrap === 'no-wrap' && 'nowrap') || wrap },
    ...alignItems !== undefined && {
      alignItems: (alignItems === 'start' && 'flex-start')
      || (alignItems === 'end' && 'flex-end')
      || alignItems,
    },
    ...alignContent !== undefined && {
      alignContent: (alignContent === 'start' && 'flex-start')
      || (alignContent === 'end' && 'flex-end')
      || alignContent,
    },
    ...justifyContent !== undefined && {
      justifyContent: (justifyContent === 'start' && 'flex-start')
      || (justifyContent === 'end' && 'flex-end')
      || justifyContent,
    },
  }), [alignContent, alignItems, direction, inline, justifyContent, wrap]);

  return <StylingPropsProvider children={children} value={stylingProps} />;
}

FlexContainer.propTypes = {
  inline: PropTypes.bool,
  direction: PropTypes.oneOf(['row', 'row-reverse', 'column', 'column-reverse']),
  wrap: PropTypes.oneOf(['no-wrap', 'wrap', 'wrap-reverse']),
  alignItems: PropTypes.oneOf(['stretch', 'start', 'center', 'end', 'baseline']),
  alignContent: PropTypes.oneOf(['start', 'center', 'end', 'space-between', 'space-around']),
  justifyContent: PropTypes.oneOf(['start', 'center', 'end', 'space-between', 'space-around']),
};

export function FlexItem({ children, order, grow, shrink, basis, align }) {
  const stylingProps = useMemo(() => ({
    ...order !== undefined && { order },
    ...grow !== undefined && { flexGrow: grow },
    ...shrink !== undefined && { flexShrink: shrink },
    ...basis !== undefined && { flexBasis: basis },
    ...align !== undefined && {
      alignSelf: (align === 'start' && 'flex-start')
      || (align === 'end' && 'flex-end')
      || align,
    },
  }), [align, basis, grow, order, shrink]);

  return <StylingPropsProvider children={children} value={stylingProps} />;
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
