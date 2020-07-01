import PropTypes from 'prop-types';
import React, { useMemo } from 'react';

import { StylingPropsProvider } from '../stylingProps';
import { marginPropType } from '../../../styles/props/spaces';

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
  const stylingProps = useMemo(() => ({
    ...all !== undefined && { margin: all },
    ...block !== undefined && { marginBlock: block },
    ...blockStart !== undefined && { marginBlockStart: blockStart },
    ...blockEnd !== undefined && { marginBlockEnd: blockEnd },
    ...inline !== undefined && { marginInline: inline },
    ...inlineStart !== undefined && { marginInlineStart: inlineStart },
    ...inlineEnd !== undefined && { marginInlineEnd: inlineEnd },
  }), [all, block, blockEnd, blockStart, inline, inlineEnd, inlineStart]);

  return <StylingPropsProvider children={children} value={stylingProps} />;
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
