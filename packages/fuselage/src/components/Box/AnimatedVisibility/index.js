import { css, keyframes } from '@rocket.chat/css-in-js';
import PropTypes from 'prop-types';
import React, { useCallback, useEffect, useState } from 'react';

import { appendClassName } from '../../../helpers/appendClassName';
import { useStyle } from '../../../hooks/useStyle';
import { BoxTransforms, useComposedBoxTransform } from '../BoxTransforms';

function AnimatedVisibility({
  children,
  visibility: propVisibility = AnimatedVisibility.HIDDEN,
}) {
  const [visibility, setVisibility] = useState(propVisibility);

  useEffect(() => {
    setVisibility((visibility) => {
      if (
        propVisibility === AnimatedVisibility.VISIBLE &&
        visibility !== propVisibility
      ) {
        return AnimatedVisibility.UNHIDING;
      }

      if (
        propVisibility === AnimatedVisibility.HIDDEN &&
        visibility !== propVisibility
      ) {
        return AnimatedVisibility.HIDING;
      }

      return visibility;
    });
  }, [propVisibility]);

  const className = useStyle(css`
    animation-duration: 230ms;

    ${visibility === AnimatedVisibility.HIDING &&
    css`
      animation-name: ${keyframes`
        from {
          transform: translate3d(0, 0, 0);
          opacity: 1;
        }

        to {
          transform: translate3d(0, 1rem, 0);
          opacity: 0;
        }
      `};
    `}

    ${visibility === AnimatedVisibility.UNHIDING &&
    css`
      animation-name: ${keyframes`
        from {
          transform: translate3d(0, 1rem, 0);
          opacity: 0;
        }

        to {
          transform: translate3d(0, 0, 0);
          opacity: 1;
        }
      `};
    `}
  `);

  const handleAnimationEnd = useCallback(
    () =>
      setVisibility((visibility) => {
        if (visibility === AnimatedVisibility.HIDING) {
          return AnimatedVisibility.HIDDEN;
        }

        if (visibility === AnimatedVisibility.UNHIDING) {
          return AnimatedVisibility.VISIBLE;
        }

        return visibility;
      }),
    []
  );

  const transformFn = useCallback(
    (props) => {
      if (props.onAnimationEnd === undefined) {
        props.onAnimationEnd = handleAnimationEnd;
      }
      props.className = appendClassName(props.className, className);
      return props;
    },
    [className, handleAnimationEnd]
  );

  const composedFn = useComposedBoxTransform(transformFn);
  if (visibility === AnimatedVisibility.HIDDEN) {
    return null;
  }

  return <BoxTransforms.Provider children={children} value={composedFn} />;
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

export default AnimatedVisibility;
