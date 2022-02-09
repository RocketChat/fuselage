import React, { ReactNode, useCallback } from 'react';

import { BoxTransforms, useComposedBoxTransform } from '../BoxTransforms';

type FlexContainerProps = {
  children?: ReactNode;
  inline?: boolean;
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  wrap?: 'no-wrap' | 'wrap' | 'wrap-reverse';
  alignItems?: 'stretch' | 'start' | 'center' | 'end' | 'baseline';
  alignContent?: 'start' | 'center' | 'end' | 'space-between' | 'space-around';
  justifyContent?:
    | 'start'
    | 'center'
    | 'end'
    | 'space-between'
    | 'space-around';
};

export function FlexContainer({
  inline = false,
  children,
  direction,
  wrap,
  alignItems,
  alignContent,
  justifyContent,
}: FlexContainerProps) {
  const transformFn = useCallback(
    (props) => {
      if (inline !== undefined && props.display === undefined) {
        props.display = inline ? 'inline-flex' : 'flex';
      }

      if (direction !== undefined && props.flexDirection === undefined) {
        props.flexDirection = direction;
      }

      if (wrap !== undefined && props.flexWrap === undefined) {
        props.flexWrap = wrap === 'no-wrap' ? 'nowrap' : wrap;
      }

      if (alignItems !== undefined && props.alignItems === undefined) {
        props.alignItems =
          (alignItems === 'start' && 'flex-start') ||
          (alignItems === 'end' && 'flex-end') ||
          alignItems;
      }

      if (alignContent !== undefined && props.alignContent === undefined) {
        props.alignContent =
          (alignContent === 'start' && 'flex-start') ||
          (alignContent === 'end' && 'flex-end') ||
          alignContent;
      }

      if (justifyContent !== undefined && props.justifyContent === undefined) {
        props.justifyContent =
          (justifyContent === 'start' && 'flex-start') ||
          (justifyContent === 'end' && 'flex-end') ||
          justifyContent;
      }

      return props;
    },
    [alignContent, alignItems, direction, inline, justifyContent, wrap]
  );

  return (
    <BoxTransforms.Provider
      children={children}
      value={useComposedBoxTransform(transformFn)}
    />
  );
}
