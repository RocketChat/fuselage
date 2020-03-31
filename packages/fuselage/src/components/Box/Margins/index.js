import React from 'react';

import { PropsProvider } from '../PropsContext';
import { marginPropType } from '../../../propTypes/margins';

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
  all: marginPropType,
  block: marginPropType,
  blockStart: marginPropType,
  blockEnd: marginPropType,
  inline: marginPropType,
  inlineStart: marginPropType,
  inlineEnd: marginPropType,
};
