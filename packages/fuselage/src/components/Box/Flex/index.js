import PropTypes from 'prop-types';
import React from 'react';

import { useProps } from '../../../hooks';

export function FlexContainer({ display = 'flex', children, direction, wrap, justifyContent, alignItems, alignContent }) {
  const [, PropsProvider] = useProps(({ style, ...props }) => ({
    style: {
      ...style,
      display,
      flexDirection: direction,
      flexWrap: wrap,
      justifyContent,
      alignItems,
      alignContent,
    },
    ...props,
  }));

  return <PropsProvider children={children} />;
}

FlexContainer.displayName = 'Flex.Container';

FlexContainer.propTypes = {
  direction: PropTypes.oneOf(['row', 'row-reverse', 'column', 'column-reverse']),
  wrap: PropTypes.oneOf(['nowrap', 'wrap', 'wrap-reverse']),
  justifyContent: PropTypes.oneOf([
    'flex-start', 'flex-end', 'center',
    'space-between', 'space-around', 'space-evenly',
    'start', 'end', 'left', 'right',
    'flex-start safe', 'flex-end safe', 'center safe',
    'space-between safe', 'space-around safe', 'space-evenly safe',
    'start safe', 'end safe', 'left safe', 'right safe',
  ]),
  alignItems: PropTypes.oneOf([
    'stretch', 'flex-start', 'flex-end', 'center',
    'baseline', 'first baseline', 'last baseline',
    'start', 'end', 'self-start', 'self-end',
    'stretch safe', 'flex-start safe', 'flex-end safe', 'center safe',
    'baseline safe', 'first baseline safe', 'last baseline safe',
    'start safe', 'end safe', 'self-start safe', 'self-end safe',
  ]),
  alignContent: PropTypes.oneOf([
    'flex-start', 'flex-end', 'center',
    'space-between', 'space-around', 'space-evenly', 'stretch',
    'start', 'end', 'baseline', 'first baseline', 'last baseline',
    'flex-start safe', 'flex-end safe', 'center safe',
    'space-between safe', 'space-around safe', 'space-evenly safe', 'stretch safe',
    'start safe', 'end safe', 'baseline safe', 'first baseline safe', 'last baseline safe',
  ]),
};

export function FlexItem({ children, order, grow, shrink, basis, align }) {
  const [, PropsProvider] = useProps(({ style, ...props }) => ({
    style: {
      ...style,
      order,
      flexGrow: grow,
      flexShrink: shrink,
      flexBasis: basis,
      alignSelf: align,
    },
    ...props,
  }));

  return <PropsProvider children={children} />;
}

FlexItem.displayName = 'Flex.Item';

FlexItem.propTypes = {
  order: PropTypes.number,
  grow: PropTypes.number,
  shrink: PropTypes.number,
  basis: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.oneOf(['auto'])]),
  align: PropTypes.oneOf(['auto', 'flex-start', 'flex-end', 'center', 'baseline', 'stretch']),
};

export const Flex = {
  Container: FlexContainer,
  Item: FlexItem,
};
