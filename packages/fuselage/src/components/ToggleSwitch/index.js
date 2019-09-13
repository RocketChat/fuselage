import React from 'react';
import styled, { css } from 'styled-components';

import { rebuildClassName } from '../../helpers';
import {
  visuallyHidden,
  normalized,
  clickable,
  withBorder,
  withButtonActionColors,
  whenRightToLeftOrientation,
} from '../../mixins';
import { Label } from '../Label';
import {
  size,
  border,
  onColors,
  offColors,
} from './theme';


const Container = styled(Label).attrs(rebuildClassName('toggle-switch'))`
  ${ clickable }
`;

const Input = styled.input.attrs({
  type: 'checkbox',
})`
  ${ visuallyHidden }
`;

const withOffColors = withButtonActionColors(offColors, Input, '+ &');
const withOnColors = withButtonActionColors(onColors, css`${ Input }:checked`, '+ &');

const withThumb = () => css`
  &::before {
    position: absolute;
    left: 0%;

    width: calc(${ size } - 2 * ${ border.width });
    height: calc(${ size } - 2 * ${ border.width });

    content: '';

    background-color: currentColor;
    border-radius: 50%;

    ${ whenRightToLeftOrientation(css`
      right: 0%;
      left: unset;
    `) }
  }

  ${ Input }:checked + &::before {
    left: 100%;

    transform: translateX(-100%);

    ${ whenRightToLeftOrientation(css`
      right: 100%;

      transform: translateX(100%);
    `) }
  }
`;

const Fake = styled.i.attrs({
  'aria-hidden': 'true',
})`
  ${ normalized }

  position: relative;

  width: calc(2 * ${ size });
  height: ${ size };

  ${ withBorder(border) }

  ${ withOffColors }
  ${ withOnColors }

  ${ withThumb }
`;

export const ToggleSwitch = styled(React.forwardRef(function ToggleSwitch({
  hidden,
  invisible,
  ...props
}, ref) {
  return <Container hidden={hidden} invisible={invisible}>
    <Input hidden={hidden} invisible={invisible} ref={ref} {...props} />
    <Fake />
  </Container>;
}))``;

ToggleSwitch.displayName = 'ToggleSwitch';
