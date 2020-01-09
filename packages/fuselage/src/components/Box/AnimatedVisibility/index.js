import React, { useEffect, useState } from 'react';

import { useProps } from '../../../hooks';

export function AnimatedVisibility({ visibility: propVisibility, children }) {
  const [visibility, setVisibility] = useState(AnimatedVisibility.HIDDEN);

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
      className,
      visibility === AnimatedVisibility.HIDING && 'rcx-box--hiding',
      visibility === AnimatedVisibility.UNHIDING && 'rcx-box--unhiding',
      console.log(visibility),
    ].filter(Boolean).join(' '),
    ...props,
  }), [visibility]);

  if (visibility === AnimatedVisibility.HIDDEN) {
    return null;
  }

  return <PropsProvider children={children} />;
}

AnimatedVisibility.HIDDEN = 0;
AnimatedVisibility.VISIBLE = 1;
AnimatedVisibility.HIDING = 2;
AnimatedVisibility.UNHIDING = 3;
