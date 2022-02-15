import { css, keyframes } from '@rocket.chat/css-in-js';
import React, { ReactNode, useCallback, useEffect, useState } from 'react';

import { appendClassName } from '../../helpers/appendClassName';
import { useStyle } from '../../hooks/useStyle';
import { BoxTransforms, useComposedBoxTransform } from '../Box/BoxTransforms';

export type VisibilityType =
  | 'hidden'
  | 'visible'
  | 'hiding'
  | 'unhiding'
  | undefined;

type AnimatedVisibilityProps = {
  children: ReactNode;
  visibility?: VisibilityType;
};

const Visibility = {
  HIDDEN: 'hidden' as VisibilityType,
  VISIBLE: 'visible' as VisibilityType,
  HIDING: 'hiding' as VisibilityType,
  UNHIDING: 'unhiding' as VisibilityType,
};

const AnimatedVisibility = (props: AnimatedVisibilityProps) => {
  const propVisibility = props.visibility || Visibility.HIDDEN;

  const [visibility, setVisibility] = useState<VisibilityType>(propVisibility);

  useEffect(() => {
    setVisibility((visibility) => {
      if (
        propVisibility === Visibility.VISIBLE &&
        visibility !== propVisibility
      ) {
        return Visibility.UNHIDING;
      }

      if (
        propVisibility === Visibility.HIDDEN &&
        visibility !== propVisibility
      ) {
        return Visibility.HIDING;
      }

      return visibility;
    });
  }, [propVisibility]);

  const className = useStyle(
    css`
      animation-duration: 230ms;

      ${visibility === Visibility.HIDING &&
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

      ${visibility === Visibility.UNHIDING &&
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
    `,
    null
  );

  const handleAnimationEnd = useCallback(
    () =>
      setVisibility((visibility) => {
        if (visibility === Visibility.HIDING) {
          return Visibility.HIDDEN;
        }

        if (visibility === Visibility.UNHIDING) {
          return Visibility.VISIBLE;
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
      props.className =
        className && appendClassName(props.className, className);
      return props;
    },
    [className, handleAnimationEnd]
  );

  const composedFn = useComposedBoxTransform(transformFn);
  if (visibility === Visibility.HIDDEN) {
    return null;
  }

  return (
    <BoxTransforms.Provider children={props.children} value={composedFn} />
  );
};

export default AnimatedVisibility;
