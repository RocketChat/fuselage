import PropTypes from 'prop-types';
import React from 'react';

import { createStyledComponent } from '../../styles';
import { useFieldId } from '../Field';
import { Label } from '../Label';
import styles from './styles';

const Container = createStyledComponent(styles, 'rcx-toggle-switch', Label);
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
  const fieldId = useFieldId();

  return <Container className={className} hidden={hidden} invisible={invisible} style={style} onClick={onClick}>
    <Input id={fieldId} ref={ref} type='checkbox' {...props} />
    <Fake aria-hidden='true' />
  </Container>;
});

ToggleSwitch.displayName = 'ToggleSwitch';

ToggleSwitch.propTypes = {
  /** Is this component visible? */
  invisible: PropTypes.bool,
};

ToggleSwitch.styled = Container;
