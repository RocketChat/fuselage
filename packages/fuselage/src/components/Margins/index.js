import React, { useCallback } from 'react';

import { BoxTransforms, useComposedBoxTransform } from '../Box/transforms';
import { createPropType } from '../../helpers/createPropType';
import { margin } from '../../styleTokens';

function Margins({
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
  all: createPropType(margin),
  block: createPropType(margin),
  blockStart: createPropType(margin),
  blockEnd: createPropType(margin),
  inline: createPropType(margin),
  inlineStart: createPropType(margin),
  inlineEnd: createPropType(margin),
};

export default Margins;
