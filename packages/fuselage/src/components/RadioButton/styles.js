import styled, { css } from 'styled-components';

import { toRem } from '../../styles/utilities/common';
import { selectionButton } from '../../styles/utilities/controls';
import { Label } from '../Label';

const uncheckedDefaultState = css`
  color: ${ ({ theme }) => theme.buttonColors.empty.color };
  border-color: ${ ({ theme }) => theme.buttonColors.empty.borderColor };
  background-color: ${ ({ theme }) => theme.buttonColors.empty.backgroundColor };
`;

const uncheckedFocusState = css`
  border-color: ${ ({ theme }) => theme.buttonColors.empty.focusBorderColor };
  background-color: ${ ({ theme }) => theme.buttonColors.empty.focusBackgroundColor };
  box-shadow: 0 0 0 ${ toRem(6) } ${ ({ theme }) => theme.buttonColors.empty.focusShadowColor };
`;

const uncheckedHoverState = css`
  border-color: ${ ({ theme }) => theme.buttonColors.empty.hoverBorderColor };
  background-color: ${ ({ theme }) => theme.buttonColors.empty.hoverBackgroundColor };
  box-shadow: none;
`;

const uncheckedActiveState = css`
  border-color: ${ ({ theme }) => theme.buttonColors.empty.activeBorderColor };
  background-color: ${ ({ theme }) => theme.buttonColors.empty.activeBackgroundColor };
  box-shadow: none;
`;

const uncheckedDisabledState = css`
  color: ${ ({ theme }) => theme.buttonColors.empty.disabledColor };
  border-color: ${ ({ theme }) => theme.buttonColors.empty.disabledBorderColor };
  background-color: ${ ({ theme }) => theme.buttonColors.empty.disabledBackgroundColor };
`;

const checkedState = css`
  &::before {

    position: absolute;
    top: 50%;
    left: 50%;

    display: block;

    ${ ({ theme }) => css`
      width: calc(0.3 * ${ theme.sizes.x20 });
      height: calc(0.3 * ${ theme.sizes.x20 });
    ` }

    content: '';

    transform: translate(-50% ,-50%);

    border-radius: ${ ({ theme }) => theme.borders.radius.full };

    background-color: currentColor;
  }
`;

const checkedDefaultState = css`
  color: ${ ({ theme }) => theme.buttonColors.primary.color };
  border-color: ${ ({ theme }) => theme.buttonColors.primary.borderColor };
  background-color: ${ ({ theme }) => theme.buttonColors.primary.backgroundColor };
`;

const checkedFocusState = css`
  border-color: ${ ({ theme }) => theme.buttonColors.primary.focusBorderColor };
  background-color: ${ ({ theme }) => theme.buttonColors.primary.focusBackgroundColor };
  box-shadow: 0 0 0 ${ toRem(6) } ${ ({ theme }) => theme.buttonColors.primary.focusShadowColor };
`;

const checkedHoverState = css`
  border-color: ${ ({ theme }) => theme.buttonColors.primary.hoverBorderColor };
  background-color: ${ ({ theme }) => theme.buttonColors.primary.hoverBackgroundColor };
  box-shadow: none;
`;

const checkedActiveState = css`
  border-color: ${ ({ theme }) => theme.buttonColors.primary.activeBorderColor };
  background-color: ${ ({ theme }) => theme.buttonColors.primary.activeBackgroundColor };
  box-shadow: none;
`;

const checkedDisabledState = css`
  color: ${ ({ theme }) => theme.buttonColors.primary.disabledColor };
  border-color: ${ ({ theme }) => theme.buttonColors.primary.disabledBorderColor };
  background-color: ${ ({ theme }) => theme.buttonColors.primary.disabledBackgroundColor };
`;

const Input = styled.input``;

const Fake = styled.i``;

const Container = styled(Label)`
  ${ selectionButton(Input, Fake)({
    unchecked: {
      default: uncheckedDefaultState,
      focus: uncheckedFocusState,
      hover: uncheckedHoverState,
      active: uncheckedActiveState,
      disabled: uncheckedDisabledState,
    },
    checked: {
      all: checkedState,
      default: checkedDefaultState,
      focus: checkedFocusState,
      hover: checkedHoverState,
      active: checkedActiveState,
      disabled: checkedDisabledState,
    },
  }, css`
    width: ${ ({ theme }) => theme.sizes.x20 };

    border-radius: ${ ({ theme }) => theme.borders.radius.full };
  `) }
`;

export default {
  'rcx-radio-button': Container,
  'rcx-radio-button__input': Input,
  'rcx-radio-button__fake': Fake,
};
