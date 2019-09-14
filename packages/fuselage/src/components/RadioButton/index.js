import React from 'react';
import styled, { css } from 'styled-components';

import { extendClassName } from '../../helpers';
import {
  visuallyHidden,
  normalized,
  withBorder,
  clickable,
  withButtonActionColors,
  whenDisabled,
} from '../../mixins';
import { Label } from '../Label';
import {
  size,
  border,
  uncheckedColors,
  checkedColors,
  icon,
} from './theme';


const Container = styled(Label)`
  ${ clickable }
`;

const Input = styled.input`
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

const Fake = styled.i`
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

  ${ whenDisabled(css`cursor: not-allowed;`, Input, '+ &') }
`;

export const RadioButton = styled(React.forwardRef(function RadioButton({
  className,
  hidden,
  invisible,
  ...props
}, ref) {
  return <Container
    className={extendClassName('radio-button', className, {
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
      type='radio'
      {...props}
    />
    <Fake aria-hidden='true' />
  </Container>;
}))``;

RadioButton.displayName = 'RadioButton';
