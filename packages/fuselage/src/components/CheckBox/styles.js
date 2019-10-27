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
  box-shadow: 0 0 0 to-rem(6) ${ ({ theme }) => theme.buttonColors.empty.focusShadowColor };
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

const iconSmoothness = toRem(1);
const iconThickness = toRem(2);
const iconSize = 0.6;

const withIcon = css`
  &::before,
  &::after {
    position: absolute;
    top: 50%;
    inset-block-start: 50%;
    left: 50%;
    inset-inline-start: 50%;

    display: block;
    visibility: hidden;

    content: '';
    transform: translate(-50%, -50%);

    opacity: 0;

    background-color: currentColor;
  }
`;

const checkedState = css`
  ${ withIcon }

  &::before,
  &::after {
    visibility: visible;

    opacity: 1;
    border-radius: ${ iconSmoothness };
  }

  &::before {
    width: calc(${ iconSize } * ${ ({ theme }) => theme.sizes.x20 });
    height: ${ iconThickness };

    transform:
      translate(-50%, -50%)
      translate(-4px, 2px)
      rotate(-45deg)
      translate(6px, 2px);
    transform:
      translate(-50%, -50%)
      translate(calc(${ iconSize } * ${ ({ theme }) => theme.sizes.x20 } / -3), calc(${ iconSize } * ${ ({ theme }) => theme.sizes.x20 } / 6))
      rotate(-45deg)
      translate(calc(${ iconSize } * ${ ({ theme }) => theme.sizes.x20 } / 2), calc(${ iconSize } * ${ ({ theme }) => theme.sizes.x20 } / 6));
  }

  &::after {
    width: ${ iconThickness };
    height: calc(0.5 * ${ iconSize } * ${ ({ theme }) => theme.sizes.x20 });

    transform:
      translate(-50%, -50%)
      translate(-4px, 2px)
      rotate(-45deg);
    transform:
      translate(-50%, -50%)
      translate(calc(${ iconSize } * ${ ({ theme }) => theme.sizes.x20 } / -3), calc(${ iconSize } * ${ ({ theme }) => theme.sizes.x20 } / 6))
      rotate(-45deg);
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
  box-shadow: 0 0 0 to-rem(6) ${ ({ theme }) => theme.buttonColors.primary.focusShadowColor };
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

const indeterminateState = css`
  ${ withIcon }

  &::before {
    visibility: visible;

    width: calc(${ iconSize } * ${ ({ theme }) => theme.sizes.x20 });
    height: ${ iconThickness };

    opacity: 1;

    border-radius: ${ iconSmoothness };
  }
`;

const indeterminateDefaultState = css`
  color: ${ ({ theme }) => theme.buttonColors.primary.color };
  border-color: ${ ({ theme }) => theme.buttonColors.primary.borderColor };
  background-color: ${ ({ theme }) => theme.buttonColors.primary.backgroundColor };
`;

const indeterminateFocusState = css`
  border-color: ${ ({ theme }) => theme.buttonColors.primary.focusBorderColor };
  background-color: ${ ({ theme }) => theme.buttonColors.primary.focusBackgroundColor };
  box-shadow: 0 0 0 to-rem(6) ${ ({ theme }) => theme.buttonColors.primary.focusShadowColor };
`;

const indeterminateHoverState = css`
  border-color: ${ ({ theme }) => theme.buttonColors.primary.hoverBorderColor };
  background-color: ${ ({ theme }) => theme.buttonColors.primary.hoverBackgroundColor };
  box-shadow: none;
`;

const indeterminateActiveState = css`
  border-color: ${ ({ theme }) => theme.buttonColors.primary.activeBorderColor };
  background-color: ${ ({ theme }) => theme.buttonColors.primary.activeBackgroundColor };
  box-shadow: none;
`;

const indeterminateDisabledState = css`
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
    indeterminate: {
      all: indeterminateState,
      default: indeterminateDefaultState,
      focus: indeterminateFocusState,
      hover: indeterminateHoverState,
      active: indeterminateActiveState,
      disabled: indeterminateDisabledState,
    },
  }, css`
    width: ${ ({ theme }) => theme.sizes.x20 };

    border-radius: ${ ({ theme }) => theme.borders.radius.x2 };
  `) }
`;

export default {
  'rcx-check-box': Container,
  'rcx-check-box__input': Input,
  'rcx-check-box__fake': Fake,
};
