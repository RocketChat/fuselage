import { css } from '@rocket.chat/css-in-js';
import type { DOMAttributes, MutableRefObject, ReactNode } from 'react';
import { useMemo } from 'react';
import { useLocale } from 'react-aria';
import type { SliderState } from 'react-stately';

import { Palette } from '../../Theme';
import { useStyle } from '../../hooks/useStyle';

type SliderTrackProps = {
  trackProps: DOMAttributes<Element>;
  trackRef: MutableRefObject<null>;
  state: SliderState;
  children: ReactNode;
  multiThumb?: boolean;
};

const highlight = Palette.stroke['stroke-highlight'];
const light = Palette.stroke['stroke-light'];

export const SliderTrack = ({
  trackProps,
  trackRef,
  state,
  multiThumb,
  children,
}: SliderTrackProps) => {
  const isHorizontal = useMemo(
    () => state.orientation === 'horizontal',
    [state.orientation],
  );
  const isVertical = useMemo(
    () => state.orientation === 'vertical',
    [state.orientation],
  );

  const getThumbPosition = useMemo(
    () => (index: number) => state.getThumbPercent(index) * 100,
    [state],
  );

  const { direction } = useLocale();

  const getTrackGradient = () => {
    const gradientDirection = direction === 'rtl' ? 'to left' : 'to right';

    if (isHorizontal) {
      return multiThumb
        ? `${gradientDirection}, ${light} ${getThumbPosition(
            0,
          )}%, ${highlight} 0, ${highlight} ${getThumbPosition(1)}%, ${light} 0`
        : `${gradientDirection}, ${highlight} ${getThumbPosition(0)}%, ${light} 0`;
    }

    if (isVertical) {
      return multiThumb
        ? `to top, ${light} ${getThumbPosition(0)}%, ${highlight} 0, ${highlight} ${getThumbPosition(1)}%, ${light} 0`
        : `to top, ${highlight} ${getThumbPosition(0)}%, ${light} 0`;
    }

    return undefined;
  };

  const track = useStyle(
    css`
      &::before {
        position: absolute;
        display: block;
        content: '';

        background: linear-gradient(${getTrackGradient()});
        transform: translateX(-50%);
        border-radius: 1rem;
      }
      ${isHorizontal &&
      css`
        width: 100%;
        height: 30px;
        &::before {
          top: 50%;
          width: 100%;
          height: 4px;
          transform: translateY(-50%);
        }
      `};
      ${isVertical &&
      css`
        width: 30px;
        height: 100%;
        &::before {
          left: 50%;
          width: 4px;
          height: 100%;
        }
      `};
      ${state.isDisabled &&
      css`
        cursor: not-allowed;
        opacity: 0.4;
      `};
    `,
    state,
  );

  return (
    <div {...trackProps} ref={trackRef} className={track}>
      {children}
    </div>
  );
};
