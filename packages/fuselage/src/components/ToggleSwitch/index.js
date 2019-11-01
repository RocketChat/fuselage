import PropTypes from 'prop-types';
import React from 'react';

import { createStyledComponent } from '../../styles';
import { Label } from '../Label';
import styles from './styles';

const Container = createStyledComponent(styles, 'rcx-toggle-switch', 'span');
const Input = createStyledComponent(styles, 'rcx-toggle-switch__input', 'input');
const Fake = createStyledComponent(styles, 'rcx-toggle-switch__fake', 'i');

export const ToggleSwitch = React.forwardRef(function ToggleSwitch({
  className,
  hidden,
  invisible,
  style,
  onClick,
  ...props
}, ref) {
  return <Container className={className} hidden={hidden} invisible={invisible} style={style} onClick={onClick}>
    <Label>
      <Input ref={ref} type='checkbox' {...props} />
      <Fake aria-hidden='true' />
    </Label>
  </Container>;
});

ToggleSwitch.displayName = 'ToggleSwitch';

ToggleSwitch.propTypes = {
  /** Is this component visible? */
  invisible: PropTypes.bool,
};
