import PropTypes from 'prop-types';
import React from 'react';

import { useProps } from '../../../hooks';

export function FlexContainer({ inline = false, children, direction, wrap, justifyContent, alignItems, alignContent }) {
  const [, PropsProvider] = useProps(({ className, style, ...props }) => ({
    className: [
      className,
      'rcx-box--flex',
      inline && 'rcx-box--flex-inline',
      direction && `rcx-box--flex-${ direction }`,
      wrap && `rcx-box--flex-${ wrap }`,
      alignItems && `rcx-box--flex-items-${ alignItems }`,
    ].filter(Boolean).join(' '),
    style: {
      ...style,
      justifyContent,
      alignContent,
    },
    ...props,
  }), [inline, direction, wrap, justifyContent, alignItems, alignContent]);

  return <PropsProvider children={children} />;
}

FlexContainer.propTypes = {
  inline: PropTypes.bool,
  direction: PropTypes.oneOf(['row', 'row-reverse', 'column', 'column-reverse']),
  wrap: PropTypes.oneOf(['no-wrap', 'wrap', 'wrap-reverse']),
  justifyContent: PropTypes.oneOf([
    'flex-start', 'flex-end', 'center',
    'space-between', 'space-around', 'space-evenly',
    'start', 'end', 'left', 'right',
  ]),
  alignItems: PropTypes.oneOf(['stretch', 'start', 'center', 'end', 'baseline']),
  alignContent: PropTypes.oneOf([
    'flex-start', 'flex-end', 'center',
    'space-between', 'space-around', 'space-evenly', 'stretch',
    'start', 'end', 'baseline', 'first baseline', 'last baseline',
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
  }), [order, grow, shrink, basis, align]);

  return <PropsProvider children={children} />;
}

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
