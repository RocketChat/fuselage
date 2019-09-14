import React from 'react';
import styled, { css } from 'styled-components';

import { extendClassName } from '../../helpers';
import {
  visuallyHidden,
  normalized,
  clickable,
  withBorder,
  withButtonActionColors,
  whenRightToLeftOrientation,
  whenDisabled,
} from '../../mixins';
import { Label } from '../Label';
import {
  size,
  border,
  onColors,
  offColors,
} from './theme';


const Container = styled(Label)`
  ${ clickable }
`;

const Input = styled.input`
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

const Fake = styled.i`
  ${ normalized }

  position: relative;

  width: calc(2 * ${ size });
  height: ${ size };

  ${ withBorder(border) }

  ${ withOffColors }
  ${ withOnColors }

  ${ withThumb }

  ${ whenDisabled(css`cursor: not-allowed;`, Input, '+ &') }
`;

export const ToggleSwitch = styled(React.forwardRef(function ToggleSwitch({
  className,
  hidden,
  invisible,
  ...props
}, ref) {
  return <Container
    className={extendClassName('toggle-switch', className, {
      hidden,
      invisible,
      ...props,
    })}
    hidden={hidden}
    invisible={invisible}
  >
    <Input
      hidden={hidden}
      invisible={invisible}
      ref={ref}
      type='checkbox'
      {...props}
    />
    <Fake aria-hidden='true' />
  </Container>;
}))``;

ToggleSwitch.displayName = 'ToggleSwitch';
