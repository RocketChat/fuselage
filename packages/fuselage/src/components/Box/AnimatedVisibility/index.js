import { css, keyframes } from '@rocket.chat/css-in-js';
import { useMutableCallback } from '@rocket.chat/fuselage-hooks';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import { patchChildren } from '../../../helpers/patchChildren';

export function AnimatedVisibility({ children, visibility: propVisibility = AnimatedVisibility.HIDDEN, ...props }) {
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
    css`animation-duration: 230ms;`,
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

  const handleAnimationEnd = useMutableCallback((event) => {
    setVisibility((visibility) => {
      if (visibility === AnimatedVisibility.HIDING) {
        return AnimatedVisibility.HIDDEN;
      }

      if (visibility === AnimatedVisibility.UNHIDING) {
        return AnimatedVisibility.VISIBLE;
      }

      return visibility;
    });
    props.onAnimationEnd && (0, props.onAnimationEnd)(event);
  });

  if (visibility === AnimatedVisibility.HIDDEN) {
    return null;
  }

  return patchChildren(children, {
    ...props,
    className: [props.className, ...animatedVisibilityStyles],
    onAnimationEnd: handleAnimationEnd,
  });
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
