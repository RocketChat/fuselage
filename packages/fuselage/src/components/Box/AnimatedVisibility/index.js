import { css, keyframes } from '@rocket.chat/css-in-js';
import { useMutableCallback } from '@rocket.chat/fuselage-hooks';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

import { PropsProvider } from '../PropsContext';

export function AnimatedVisibility({ children, visibility: propVisibility = AnimatedVisibility.HIDDEN }) {
  const [visibility, setVisibility] = useState(propVisibility);

  useEffect(() => {
    setVisibility((visibility) => {
      if (propVisibility === AnimatedVisibility.VISIBLE && visibility !== propVisibility) {
        return AnimatedVisibility.UNHIDING;
      }

      if (propVisibility === AnimatedVisibility.HIDDEN && visibility !== propVisibility) {
        return AnimatedVisibility.HIDING;
      }

      return visibility;
    });
  }, [propVisibility]);

  const animatedVisibilityStyles = [
    css`
      animation-duration: 230ms;
      animation-duration: var(--rcx-theme-transition-duration, 230ms);;
    `,
    visibility === AnimatedVisibility.HIDING && css`
      animation-name: ${ keyframes`
        from {
          transform: translate3d(0, 0, 0);
          opacity: 1;
        }

        to {
          transform: translate3d(0, 1rem, 0);
          opacity: 0;
        }
      ` };
    `,
    visibility === AnimatedVisibility.UNHIDING && css`
      animation-name: ${ keyframes`
        from {
          transform: translate3d(0, 1rem, 0);
          opacity: 0;
        }

        to {
          transform: translate3d(0, 0, 0);
          opacity: 1;
        }
      ` };
    `,
  ];

  const handleAnimationEnd = useMutableCallback(() => setVisibility((visibility) => {
    if (visibility === AnimatedVisibility.HIDING) {
      return AnimatedVisibility.HIDDEN;
    }

    if (visibility === AnimatedVisibility.UNHIDING) {
      return AnimatedVisibility.VISIBLE;
    }

    return visibility;
  }));

  if (visibility === AnimatedVisibility.HIDDEN) {
    return null;
  }

  return <PropsProvider children={children} fn={({ className, ...props }) => ({
    className: [className, ...animatedVisibilityStyles],
    ...props,
    onAnimationEnd: handleAnimationEnd,
  })} memoized />;
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
