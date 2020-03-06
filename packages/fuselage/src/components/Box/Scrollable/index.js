import PropTypes from 'prop-types';
import React, { useCallback, useRef } from 'react';

import { PropsProvider } from '../PropsContext';

export function Scrollable({ children, horizontal, vertical, smooth, onScrollContent }) {
  const scrollTimeoutRef = useRef();

  const handleScroll = useCallback(function(event) {
    const { target } = event;
    const getTouchingEdges = () => ({
      top: !target.scrollTop,
      bottom: !(target.scrollTop + target.clientHeight - target.scrollHeight),
      left: !target.scrollLeft,
      right: !(target.scrollLeft + target.clientWidth - target.scrollWidth),
    });
    if (!scrollTimeoutRef.current) {
      onScrollContent(getTouchingEdges());
    }
    clearTimeout(scrollTimeoutRef.current);
    scrollTimeoutRef.current = setTimeout(() => {
      scrollTimeoutRef.current = false;
      onScrollContent(getTouchingEdges());
    }, 200);
  }, [onScrollContent]);

  return <PropsProvider children={children} fn={({ className, ...props }) => ({
    className: [
      className,
      'rcx-box--scrollable',
      horizontal && 'rcx-box--scrollable-horizontal',
      vertical && 'rcx-box--scrollable-vertical',
      smooth && 'rcx-box--scrollable-smooth',
    ].filter(Boolean).join(' '),
    onScroll: typeof onScrollContent !== 'undefined' ? handleScroll : undefined,
    ...props,
  })} memoized />;
}

Scrollable.propTypes = {
  horizontal: PropTypes.bool,
  vertical: PropTypes.bool,
  smooth: PropTypes.bool,
  onScrollContent: PropTypes.func,
};
