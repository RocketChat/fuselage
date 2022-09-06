import { css } from '@rocket.chat/css-in-js';
import '../../styles/colors.scss';
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
      width: 16px;
      height: 16px;

      cursor: ${state.isDisabled ? 'not-allowed' : 'pointer'};
      border: 2px solid #095ad2;
      border-radius: 50%;
      background: ${isFocusVisible || isDragging ? '#76B7FC' : '#156ff5'};
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
