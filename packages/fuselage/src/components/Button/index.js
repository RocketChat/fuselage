import PropTypes from 'prop-types';
import React from 'react';

import { createStyledComponent } from '../../styles';
import styles from './styles';

const Container = createStyledComponent(styles, 'rcx-button', 'button');

export const Button = React.forwardRef(function Button({
  danger,
  external,
  ghost,
  is = 'button',
  primary,
  rel,
  small,
  square,
  ...props
}, ref) {
  const extraProps = (is === 'a' && {
    rel: external && 'noopener noreferrer',
    target: external && '_blank',
  })
  || (is === 'button' && {
    type: 'button',
  })
  || {};

  return <Container
    as={is}
    mod-danger={danger}
    mod-ghost={ghost}
    mod-ghost-danger={ghost && danger}
    mod-primary={primary}
    mod-primary-danger={primary && danger}
    mod-small={small}
    mod-square={square}
    mod-small-square={small && square}
    ref={ref}
    {...extraProps}
    {...props}
  />;
});

Button.displayName = 'Button';

Button.propTypes = {
  /** Is this component a link to an external URL? */
  external: PropTypes.bool,
  /** Is this component visible? */
  invisible: PropTypes.bool,
};
