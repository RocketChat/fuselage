import { useClassName } from '@rocket.chat/fuselage-hooks';
import PropTypes from 'prop-types';
import React from 'react';

import { useProps } from '../../hooks';

export function Scrollable({ children, horizontal, vertical }) {
  const [, PropsProvider] = useProps(({ className, ...props }) => ({
    className: useClassName('rcx-scrollable', { horizontal, vertical }, className),
    ...props,
  }));

  return <PropsProvider children={children} />;
}

Scrollable.displayName = 'Scrollable';

Scrollable.propTypes = {
  horizontal: PropTypes.bool,
  vertical: PropTypes.bool,
};
