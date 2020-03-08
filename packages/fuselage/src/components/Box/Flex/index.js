import PropTypes from 'prop-types';
import React from 'react';

import { PropsProvider } from '../PropsContext';
import { useCss, css } from '../useCss';

export function FlexContainer({ inline = false, children, direction, wrap, alignItems, alignContent, justifyContent }) {
  const containerClassName = useCss([
    css`display: ${ inline ? 'inline-flex' : 'flex' };`,
    {
      row: css`flex-direction: row !important;`,
      'row-reverse': css`flex-direction: row-reverse !important;`,
      column: css`flex-direction: column !important;`,
      'column-reverse': css`flex-direction: column-reverse !important;`,
    }[direction],
    {
      'no-wrap': css`flex-wrap: nowrap !important;`,
      wrap: css`flex-wrap: wrap !important;`,
      'wrap-reverse': css`flex-wrap: wrap-reverse !important;`,
    }[wrap],
    {
      stretch: css`align-items: stretch !important;`,
      start: css`align-items: flex-start !important;`,
      center: css`align-items: center !important;`,
      end: css`align-items: flex-end !important;`,
      baseline: css`align-items: baseline !important;`,
    }[alignItems],
    {
      start: css`align-content: flex-start !important;`,
      center: css`align-content: center !important;`,
      end: css`align-content: flex-end !important;`,
      'space-between': css`align-content: space-between !important;`,
      'space-around': css`align-content: space-around !important;`,
    }[alignContent],
    {
      start: css`justify-content: flex-start !important;`,
      center: css`justify-content: center !important;`,
      end: css`justify-content: flex-end !important;`,
      'space-between': css`justify-content: space-between !important;`,
      'space-around': css`justify-content: space-around !important;`,
    }[justifyContent],
  ], [inline, direction, wrap, alignItems, alignContent, justifyContent]);

  return <PropsProvider children={children} fn={({ className, ...props }) => ({
    className: [className, containerClassName].filter(Boolean).join(' '),
    ...props,
  })} memoized />;
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
  const itemClassName = useCss([
    Number.isInteger(order) && css`order: ${ order } !important;`,
    Number.isInteger(grow) && css`flex-grow: ${ grow } !important;`,
    Number.isInteger(shrink) && css`flex-shrink: ${ shrink } !important;`,
    basis && css`flex-basis: ${ basis } !important;`,
    {
      auto: css`align-self: auto !important;`,
      start: css`align-self: flex-start !important;`,
      center: css`align-self: center !important;`,
      end: css`align-self: flex-end !important;`,
      stretch: css`align-self: stretch !important;`,
    }[align],
  ], [order, grow, shrink, basis, align]);

  return <PropsProvider children={children} fn={({ className, ...props }) => ({
    className: [className, itemClassName].filter(Boolean).join(' '),
    ...props,
  })} memoized />;
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
