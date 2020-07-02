import PropTypes from 'prop-types';
import React, { useCallback } from 'react';

import { marginPropType } from '../../../styles/props/spaces';
import { BoxTransforms, useComposedBoxTransform } from '../transforms';

export function Margins({
  children,
  all,
  block,
  blockStart,
  blockEnd,
  inline,
  inlineStart,
  inlineEnd,
}) {
  const transformFn = useCallback((props) => {
    if (all !== undefined && props.margin === undefined) {
      props.margin = all;
    }

    if (block !== undefined && props.marginBlock === undefined) {
      props.marginBlock = block;
    }

    if (blockStart !== undefined && props.marginBlockStart === undefined) {
      props.marginBlockStart = blockStart;
    }

    if (blockEnd !== undefined && props.marginBlockEnd === undefined) {
      props.marginBlockEnd = blockEnd;
    }

    if (inline !== undefined && props.marginInline === undefined) {
      props.marginInline = inline;
    }

    if (inlineStart !== undefined && props.marginInlineStart === undefined) {
      props.marginInlineStart = inlineStart;
    }

    if (inlineEnd !== undefined && props.marginInlineEnd === undefined) {
      props.marginInlineEnd = inlineEnd;
    }

    return props;
  }, [all, block, blockEnd, blockStart, inline, inlineEnd, inlineStart]);

  return <BoxTransforms.Provider
    children={children}
    value={useComposedBoxTransform(transformFn)}
  />;
}

Margins.propTypes = {
  all: PropTypes.oneOfType([marginPropType, PropTypes.string, PropTypes.number]),
  block: PropTypes.oneOfType([marginPropType, PropTypes.string, PropTypes.number]),
  blockStart: PropTypes.oneOfType([marginPropType, PropTypes.string, PropTypes.number]),
  blockEnd: PropTypes.oneOfType([marginPropType, PropTypes.string, PropTypes.number]),
  inline: PropTypes.oneOfType([marginPropType, PropTypes.string, PropTypes.number]),
  inlineStart: PropTypes.oneOfType([marginPropType, PropTypes.string, PropTypes.number]),
  inlineEnd: PropTypes.oneOfType([marginPropType, PropTypes.string, PropTypes.number]),
};
