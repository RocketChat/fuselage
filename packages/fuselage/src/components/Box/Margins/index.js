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
    m: all,
    mb: block,
    mbs: blockStart,
    mbe: blockEnd,
    mi: inline,
    mis: inlineStart,
    mie: inlineEnd,
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
