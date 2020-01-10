import PropTypes from 'prop-types';
import React from 'react';

import { useProps } from '../../../hooks';

export function FlexContainer({ inline = false, children, direction, wrap, alignItems, alignContent, justifyContent }) {
  const [, PropsProvider] = useProps(({ className, ...props }) => ({
    className: [
      className,
      'rcx-box--flex',
      inline && 'rcx-box--flex-inline',
      direction && `rcx-box--flex-${ direction }`,
      wrap && `rcx-box--flex-${ wrap }`,
      alignItems && `rcx-box--flex-items-${ alignItems }`,
      alignContent && `rcx-box--flex-content-${ alignContent }`,
      justifyContent && `rcx-box--flex-justify-${ justifyContent }`,
    ].filter(Boolean).join(' '),
    ...props,
  }), [inline, direction, wrap, alignItems, alignContent, justifyContent]);

  return <PropsProvider children={children} />;
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
  const [, PropsProvider] = useProps(({ className, style, ...props }) => ({
    className: [
      className,
      align && `rcx-box--flex-self-${ align }`,
    ].filter(Boolean).join(' '),
    style: {
      ...style,
      order,
      flexGrow: grow,
      flexShrink: shrink,
      flexBasis: basis,
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
  align: PropTypes.oneOf(['auto', 'start', 'end', 'center', 'stretch']),
};

export const Flex = {
  Container: FlexContainer,
  Item: FlexItem,
};
