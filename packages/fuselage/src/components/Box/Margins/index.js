import PropTypes from 'prop-types';
import React from 'react';

import { PropsProvider } from '../PropsContext';
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
  return <PropsProvider children={children} fn={(props) => ({
    ...all !== undefined && { m: all },
    ...block !== undefined && { mb: block },
    ...blockStart !== undefined && { mbs: blockStart },
    ...blockEnd !== undefined && { mbe: blockEnd },
    ...inline !== undefined && { mi: inline },
    ...inlineStart !== undefined && { mis: inlineStart },
    ...inlineEnd !== undefined && { mie: inlineEnd },
    ...props,
  })} memoized />;
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
