import type { ReactNode } from 'react';
import React, { useCallback } from 'react';

import { BoxTransforms, useComposedBoxTransform } from '../Box/BoxTransforms';

type FlexItemProps = {
  children?: ReactNode;
  order?: number;
  grow?: number;
  shrink?: number;
  basis?: number | string | 'auto';
  align?: 'auto' | 'start' | 'end' | 'center' | 'stretch';
};

function FlexItem({
  children,
  order,
  grow,
  shrink,
  basis,
  align,
}: FlexItemProps) {
  const transformFn = useCallback(
    (props) => {
      if (order !== undefined && props.order === undefined) {
        props.order = order;
      }

      if (grow !== undefined && props.flexGrow === undefined) {
        props.flexGrow = grow;
      }

      if (shrink !== undefined && props.flexShrink === undefined) {
        props.flexShrink = shrink;
      }

      if (basis !== undefined && props.flexBasis === undefined) {
        props.flexBasis = basis;
      }

      if (align !== undefined && props.alignSelf === undefined) {
        props.alignSelf =
          (align === 'start' && 'flex-start') ||
          (align === 'end' && 'flex-end') ||
          align;
      }

      return props;
    },
    [align, basis, grow, order, shrink]
  );

  return (
    <BoxTransforms.Provider
      children={children}
      value={useComposedBoxTransform(transformFn)}
    />
  );
}

export default FlexItem;
