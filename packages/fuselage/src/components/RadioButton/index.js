import React from 'react';
import styled, { css } from 'styled-components';

import { rebuildClassName } from '../../helpers';
import {
  visuallyHidden,
  normalized,
  withBorder,
  clickable,
  withButtonActionColors,
} from '../../mixins';
import { Label } from '../Label';
import {
  size,
  border,
  uncheckedColors,
  checkedColors,
  icon,
} from './theme';


const Container = styled(Label).attrs(rebuildClassName('radio-button__wrapper'))`
  ${ clickable }
`;

const Input = styled.input.attrs(rebuildClassName('radio-button__input')).attrs({
  type: 'radio',
})`
  ${ visuallyHidden }
`;

const withUncheckedColors = withButtonActionColors(uncheckedColors, Input, '+ &');
const withCheckedColors = withButtonActionColors(checkedColors, css`${ Input }:checked`, '+ &');

const withCheckedIcon = css`
  &::before {
    content: '';

    position: absolute;
    left: 50%;
    top: 50%;

    display: block;
    width: calc(${ icon.size } * ${ size });
    height: calc(${ icon.size } * ${ size });

    transform: translate(-50%, -50%);

    background-color: currentColor;

    border-radius: 50%;
  }
`;

const Fake = styled.i.attrs(rebuildClassName('radio-button__fake')).attrs({
  'aria-hidden': 'true',
})`
  ${ normalized }

  position: relative;

  width: ${ size };
  height: ${ size };

  ${ withBorder(border) }

  ${ withUncheckedColors }
  ${ withCheckedColors }

  ${ Input }:checked + & {
    ${ withCheckedIcon }
  }
`;

export const RadioButton = styled(React.forwardRef(function RadioButton({
  hidden,
  invisible,
  ...props
}, ref) {
  return <Container hidden={hidden} invisible={invisible}>
    <Input hidden={hidden} invisible={invisible} ref={ref} {...props} />
    <Fake />
  </Container>;
}))``;

RadioButton.displayName = 'RadioButton';
