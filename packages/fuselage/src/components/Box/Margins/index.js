import PropTypes from 'prop-types';
import React, { useContext, useCallback, useMemo } from 'react';

import { PropsContext } from '../PropsContext';
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
  const parentFn = useContext(PropsContext);

  const newProps = useMemo(() => ({
    ...all !== undefined && { margin: all },
    ...block !== undefined && { marginBlock: block },
    ...blockStart !== undefined && { marginBlockStart: blockStart },
    ...blockEnd !== undefined && { marginBlockEnd: blockEnd },
    ...inline !== undefined && { marginInline: inline },
    ...inlineStart !== undefined && { marginInlineStart: inlineStart },
    ...inlineEnd !== undefined && { marginInlineEnd: inlineEnd },
  }), [all, block, blockEnd, blockStart, inline, inlineEnd, inlineStart]);

  const fn = useCallback((props) => ({
    ...props,
    ...newProps,
  }), [newProps]);

  const newFn = useMemo(() => (parentFn ? (props) => parentFn(fn(props)) : fn), [parentFn, fn]);

  return <PropsContext.Provider children={children} value={newFn} />;
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
