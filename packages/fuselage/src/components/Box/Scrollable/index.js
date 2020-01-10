import PropTypes from 'prop-types';
import React from 'react';

import { useProps } from '../../../hooks';

export function Scrollable({ children, horizontal, vertical, smooth }) {
  const [, PropsProvider] = useProps(({ className, ...props }) => ({
    className: [
      className,
      'rcx-box--scrollable',
      horizontal && 'rcx-box--scrollable-horizontal',
      vertical && 'rcx-box--scrollable-vertical',
      smooth && 'rcx-box--scrollable-smooth',
    ].filter(Boolean).join(' '),
    ...props,
  }), [horizontal, vertical, smooth]);

  return <PropsProvider children={children} />;
}

Scrollable.propTypes = {
  horizontal: PropTypes.bool,
  vertical: PropTypes.bool,
  smooth: PropTypes.bool,
};
