import { css } from '@rocket.chat/css-in-js';
import React, { useRef } from 'react';
import {
  mergeProps,
  useFocusRing,
  useSliderThumb,
  VisuallyHidden,
} from 'react-aria';

import { useStyle } from '../../hooks/useStyle';

export const SliderThumb = (props: any) => {
  const { state, trackRef, index } = props;
  const inputRef = useRef(null);
  const { thumbProps, inputProps, isDragging } = useSliderThumb(
    {
      index,
      trackRef,
      inputRef,
    },
    state
  );

  const { focusProps, isFocusVisible } = useFocusRing();

  const thumb = useStyle(
    css`
      width: 12px;
      height: 12px;

      cursor: ${state.isDisabled ? 'not-allowed' : 'pointer'};
      border-radius: 50%;
      background: ${isFocusVisible || isDragging ? '#76B7FC' : '#1D74F5'};
      ${state.orientation === 'horizontal'
        ? css`
            top: 50%;
          `
        : css`
            left: 50%;
          `}
    `,
    { isFocusVisible, isDragging }
  );
  return (
    <div {...thumbProps} className={thumb}>
      <VisuallyHidden>
        <input ref={inputRef} {...mergeProps(inputProps, focusProps)} />
      </VisuallyHidden>
    </div>
  );
};
