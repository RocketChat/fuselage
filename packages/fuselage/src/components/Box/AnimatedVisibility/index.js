import PropTypes from 'prop-types';
import React, { useEffect, useState, useRef } from 'react';

import { PropsProvider } from '../PropsContext';
import { useCss, css, keyframes } from '../useCss';

export function AnimatedVisibility({ children, visibility: propVisibility = AnimatedVisibility.HIDDEN, onVisible = () => {} }) {
  const [visibility, setVisibility] = useState(propVisibility);

  const ref = useRef();

  useEffect(() => {
    AnimatedVisibility.VISIBLE === visibility && onVisible && onVisible(ref);
  }, [visibility]);

  useEffect(() => {
    if (propVisibility === visibility) {
      return;
    }

    if (propVisibility === AnimatedVisibility.VISIBLE) {
      setVisibility(AnimatedVisibility.UNHIDING);
      return;
    }

    if (propVisibility === AnimatedVisibility.HIDDEN) {
      setVisibility(AnimatedVisibility.HIDING);
    }
  }, [visibility, propVisibility]);

  const animatedVisibilityClassName = useCss([
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
  ], [visibility]);

  if (visibility === AnimatedVisibility.HIDDEN) {
    return null;
  }

  return <PropsProvider children={children} fn={({ className, ...props }) => ({
    className: [className, animatedVisibilityClassName].filter(Boolean).join(' '),
    ...props,
    ref,
    onAnimationEnd: () => setVisibility((visibility) => {
      if (visibility === AnimatedVisibility.HIDING) {
        return AnimatedVisibility.HIDDEN;
      }

      if (visibility === AnimatedVisibility.UNHIDING) {
        return AnimatedVisibility.VISIBLE;
      }

      return visibility;
    }),
  })} />;
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
