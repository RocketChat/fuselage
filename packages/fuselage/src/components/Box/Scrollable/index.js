import PropTypes from 'prop-types';
import React, { useCallback } from 'react';

import { useProps } from '../../../hooks';

export function Scrollable({ children, horizontal, vertical, smooth, scrollCb }) {
  let scrollTimeout;

  const handleScroll = useCallback(function(event) {
    const { target } = event;
    if (!scrollTimeout) {
      scrollCb({ top: !!target.scrollTop, bottom: !!(target.scrollTop + target.clientHeight - target.scrollHeight), left: !!target.scrollLeft, right: !!(target.scrollLeft + target.clientWidth - target.scrollWidth) });
    } else {
      clearTimeout(scrollTimeout);
    }
    scrollTimeout = setTimeout(() => {
      scrollTimeout = false;
      scrollCb({ top: !!target.scrollTop, bottom: !!(target.scrollTop + target.clientHeight - target.scrollHeight), left: !!target.scrollLeft, right: !!(target.scrollLeft + target.clientWidth - target.scrollWidth) });
    }, 200);
  }, [scrollCb]);

  const [, PropsProvider] = useProps(({ className, ...props }) => ({
    className: [
      className,
      'rcx-box--scrollable',
      horizontal && 'rcx-box--scrollable-horizontal',
      vertical && 'rcx-box--scrollable-vertical',
      smooth && 'rcx-box--scrollable-smooth',
    ].filter(Boolean).join(' '),
    onScroll: typeof scrollCb !== 'undefined' ? handleScroll : null,
    ...props,
  }), [horizontal, vertical, smooth]);

  return <PropsProvider children={children} />;
}

Scrollable.propTypes = {
  horizontal: PropTypes.bool,
  vertical: PropTypes.bool,
  smooth: PropTypes.bool,
  scrollCb: PropTypes.func,
};
