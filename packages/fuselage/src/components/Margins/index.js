import { useClassName } from '@rocket.chat/fuselage-hooks';
import PropTypes from 'prop-types';
import React from 'react';

import { useProps } from '../../hooks';

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
  const [, PropsProvider] = useProps(({ className, ...props }) => ({
    className: useClassName('rcx-margins', {
      all,
      block,
      blockStart,
      blockEnd,
      inline,
      inlineStart,
      inlineEnd,
    }, className),
    ...props,
  }));

  return <PropsProvider children={children} />;
}

Margins.displayName = 'Margins';

Margins.propTypes = {
  all: PropTypes.oneOf([2, 4, 8, 12, 16, 24, 32, 40]),
  block: PropTypes.oneOf([2, 4, 8, 12, 16, 24, 32, 40]),
  blockStart: PropTypes.oneOf([2, 4, 8, 12, 16, 24, 32, 40]),
  blockEnd: PropTypes.oneOf([2, 4, 8, 12, 16, 24, 32, 40]),
  inline: PropTypes.oneOf([2, 4, 8, 12, 16, 24, 32, 40]),
  inlineStart: PropTypes.oneOf([2, 4, 8, 12, 16, 24, 32, 40]),
  inlineEnd: PropTypes.oneOf([2, 4, 8, 12, 16, 24, 32, 40]),
};
