import PropTypes from 'prop-types';
import React, { useEffect, useState, useRef } from 'react';

import { useProps } from '../../../hooks';

export function AnimatedVisibility({ children, visibility: propVisibility = AnimatedVisibility.HIDDEN, onVisible = () => {} }) {
  const [visibility, setVisibility] = useState(propVisibility);

  const ref = useRef();
  useEffect(() => {
    AnimatedVisibility.VISIBLE === visibility && onVisible(ref);
  }, [visibility]);
  useEffect(() => {
    if (propVisibility === visibility) {
      return;
    }

    if (visibility === AnimatedVisibility.HIDING) {
      // TODO: replace with transitionend event
      const timer = setTimeout(() => setVisibility(AnimatedVisibility.HIDDEN), 100);
      return () => clearTimeout(timer);
    }

    if (visibility === AnimatedVisibility.UNHIDING) {
      // TODO: replace with transitionend event
      const timer = setTimeout(() => setVisibility(AnimatedVisibility.VISIBLE), 100);
      return () => clearTimeout(timer);
    }

    if (propVisibility === AnimatedVisibility.VISIBLE) {
      setVisibility(AnimatedVisibility.UNHIDING);
      return;
    }

    if (propVisibility === AnimatedVisibility.HIDDEN) {
      setVisibility(AnimatedVisibility.HIDING);
    }
  }, [visibility, propVisibility]);

  const [, PropsProvider] = useProps(({ className, ...props }) => ({
    className: [
      'rcx-box--animated',
      className,
      visibility === AnimatedVisibility.HIDING && 'rcx-box--hiding',
      visibility === AnimatedVisibility.UNHIDING && 'rcx-box--unhiding',
      visibility === AnimatedVisibility.HIDDEN && 'rcx-box--hidden',
      visibility === AnimatedVisibility.VISIBLE && 'rcx-box--visible',
    ].filter(Boolean).join(' '),
    ...props,
  }), [visibility, propVisibility]);

  if (visibility === AnimatedVisibility.HIDDEN) {
    return null;
  }

  return <PropsProvider ref={ref} children={children} />;
}

AnimatedVisibility.HIDDEN = 'hidden';
AnimatedVisibility.VISIBLE = 'visible';
AnimatedVisibility.HIDING = 'hiding';
AnimatedVisibility.UNHIDING = 'unhiding';

AnimatedVisibility.propTypes = {
  children: PropTypes.node,
  visibility: PropTypes.oneOf([
    AnimatedVisibility.HIDDEN,
    AnimatedVisibility.VISIBLE,
    AnimatedVisibility.HIDING,
    AnimatedVisibility.UNHIDING,
  ]),
};
