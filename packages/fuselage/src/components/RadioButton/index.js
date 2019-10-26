import PropTypes from 'prop-types';
import React from 'react';

import { createStyledComponent } from '../../styles';
import { Label } from '../Label';
import styles from './styles';

const Container = createStyledComponent(styles, 'rcx-radio-button', Label);
const Input = createStyledComponent(styles, 'rcx-radio-button__input', 'input');
const Fake = createStyledComponent(styles, 'rcx-radio-button__fake', 'i');

export const RadioButton = React.forwardRef(function RadioButton({
  className,
  hidden,
  invisible,
  style,
  ...props
}, ref) {
  return <Container className={className} hidden={hidden} invisible={invisible} style={style}>
    <Input ref={ref} type='radio' {...props} />
    <Fake aria-hidden='true' />
  </Container>;
});

RadioButton.displayName = 'RadioButton';

RadioButton.propTypes = {
  /** Is this component visible? */
  invisible: PropTypes.bool,
};

RadioButton.styled = Container;
