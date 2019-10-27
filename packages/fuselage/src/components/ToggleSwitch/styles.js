import styled, { css } from 'styled-components';

import { toRem } from '../../styles/utilities/common';
import { selectionButton } from '../../styles/utilities/controls';
import { Label } from '../Label';

const uncheckedState = css`
  &::before {
    position: absolute;
    left: 0%;
    inset-inline-start: 0%;

    width: calc(${ ({ theme }) => theme.sizes.x20 } - 2 * ${ ({ theme }) => theme.borders.width.x2 });
    height: calc(${ ({ theme }) => theme.sizes.x20 } - 2 * ${ ({ theme }) => theme.borders.width.x2 });

    content: '';

    border-radius: 50%;

    background-color: currentColor;
  }
`;

const uncheckedDefaultState = css`
  color: ${ ({ theme }) => theme.buttonColors.off.color };
  border-color: ${ ({ theme }) => theme.buttonColors.off.borderColor };
  background-color: ${ ({ theme }) => theme.buttonColors.off.backgroundColor };
`;

const uncheckedFocusState = css`
  border-color: ${ ({ theme }) => theme.buttonColors.off.focusBorderColor };
  background-color: ${ ({ theme }) => theme.buttonColors.off.focusBackgroundColor };
  box-shadow: 0 0 0 ${ toRem(6) } ${ ({ theme }) => theme.buttonColors.off.focusShadowColor };
`;

const uncheckedHoverState = css`
  border-color: ${ ({ theme }) => theme.buttonColors.off.hoverBorderColor };
  background-color: ${ ({ theme }) => theme.buttonColors.off.hoverBackgroundColor };
  box-shadow: none;
`;

const uncheckedActiveState = css`
  border-color: ${ ({ theme }) => theme.buttonColors.off.activeBorderColor };
  background-color: ${ ({ theme }) => theme.buttonColors.off.activeBackgroundColor };
  box-shadow: none;
`;

const uncheckedDisabledState = css`
  color: ${ ({ theme }) => theme.buttonColors.off.disabledColor };
  border-color: ${ ({ theme }) => theme.buttonColors.off.disabledBorderColor };
  background-color: ${ ({ theme }) => theme.buttonColors.off.disabledBackgroundColor };
`;

const checkedState = css`
  &::before {
    left: calc(100% - ${ ({ theme }) => theme.sizes.x20 } + 2 * ${ ({ theme }) => theme.borders.width.x2 });
    inset-inline-start: calc(100% - ${ ({ theme }) => theme.sizes.x20 } + 2 * ${ ({ theme }) => theme.borders.width.x2 });
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
      all: uncheckedState,
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
    width: calc(2 * ${ ({ theme }) => theme.sizes.x20 });

    border-radius: ${ ({ theme }) => theme.borders.radius.full };
  `) }
`;

export default {
  'rcx-toggle-switch': Container,
  'rcx-toggle-switch__input': Input,
  'rcx-toggle-switch__fake': Fake,
};
