/* eslint-disable no-nested-ternary */
import { css } from '@rocket.chat/css-in-js';
import type { AriaAttributes } from 'react';
import React, { useMemo, useRef } from 'react';
import { useNumberFormatter, useSlider } from 'react-aria';
import { useSliderState } from 'react-stately';

import { useStyle } from '../../hooks/useStyle';
import { SliderHead } from './SliderHead';
import { SliderThumb } from './SliderThumb';
import { SliderTrack } from './SliderTrack';

type SliderProps<T = number | number[]> = AriaAttributes & {
  /**
   * The display format of the value output.
   */
  formatOptions?: Intl.NumberFormatOptions;
  label?: string;
  showOutput?: boolean;
  /**
   * Slider with multiple thumbs.
   * @default false
   */
  multiThumb?: T extends number[] ? true : false;
  step?: number;
  /**
   * @default 0
   */
  minValue?: number;
  /**
   * @default 100
   */
  maxValue?: number;
  orientation?: 'horizontal' | 'vertical';
  isDisabled?: boolean;
  defaultValue?: T;
  small?: boolean;
  /**
   * 100% of parent's dimention
   */
  large?: boolean;
} & (
    | {
        value: T;
        onChange: (value: T) => void;
      }
    | {
        value?: never;
        onChange?: never;
      }
  );

export const Slider = (props: SliderProps) => {
  const {
    label,
    formatOptions,
    showOutput = true,
    multiThumb,
    maxValue,
    minValue,
    small,
    large,
  } = props;

  // Get a defaultValue in the range for multiThumb
  const getMultiThumbDefaultValue = () => {
    if (multiThumb && !defaultValue) {
      if (minValue && maxValue) {
        return [minValue, maxValue];
      }
      if (minValue) {
        return [minValue, 100];
      }
      if (maxValue) {
        return [0, maxValue];
      }
      return [0, 100];
    }
  };

  const { defaultValue = getMultiThumbDefaultValue() } = props;

  const trackRef = useRef(null);
  const numberFormatter = useNumberFormatter(formatOptions);
  const state = useSliderState({ defaultValue, ...props, numberFormatter });
  const { groupProps, trackProps, labelProps, outputProps } = useSlider(
    props,
    state,
    trackRef
  );

  const isHorizontal = useMemo(
    () => state.orientation === 'horizontal',
    [state.orientation]
  );
  const isVertical = useMemo(
    () => state.orientation === 'vertical',
    [state.orientation]
  );

  const slider = useStyle(
    css`
      display: flex;
      ${isHorizontal &&
      css`
        flex-direction: column;
        width: ${small ? '150px' : large ? '100%' : '300px'};
      `};
      ${isVertical &&
      css`
        flex-direction: row-reverse;
        height: ${small ? '50px' : large ? '100%' : '100px'};
      `}
    `,
    state
  );

  return (
    <div {...groupProps} className={slider}>
      <SliderHead
        labelProps={labelProps}
        outputProps={outputProps}
        state={state}
        showOutput={showOutput}
        label={label}
        multiThumb={multiThumb}
      />
      <SliderTrack
        state={state}
        trackProps={trackProps}
        trackRef={trackRef}
        multiThumb={multiThumb}
      >
        <SliderThumb index={0} state={state} trackRef={trackRef} />
        {multiThumb && (
          <SliderThumb index={1} state={state} trackRef={trackRef} />
        )}
      </SliderTrack>
    </div>
  );
};
