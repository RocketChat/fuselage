import PropTypes from 'prop-types';
import React from 'react';

import { createStyledComponent } from '../../styles';
import { Label } from '../Label';

const Container = createStyledComponent('rcx-radio-button', 'span');
const Input = createStyledComponent('rcx-radio-button__input', 'input');
const Fake = createStyledComponent('rcx-radio-button__fake', 'i');

export const RadioButton = React.forwardRef(function RadioButton({
  className,
  hidden,
  invisible,
  style,
  ...props
}, ref) {
  return <Container className={className} hidden={hidden} invisible={invisible} style={style}>
    <Label>
      <Input ref={ref} type='radio' {...props} />
      <Fake aria-hidden='true' />
    </Label>
  </Container>;
});

RadioButton.displayName = 'RadioButton';

RadioButton.propTypes = {
  /** Is this component visible? */
  invisible: PropTypes.bool,
};
