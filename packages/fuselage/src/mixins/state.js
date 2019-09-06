import { css } from 'styled-components';


export const whenHidden = (styles) => css`
  &.hidden,
  &[hidden] {
    ${ styles }
  }

  ${ ({ hidden }) => hidden && styles }
`;

export const whenInvisible = (styles) => css`
  &.invisible {
    ${ styles }
  }

  ${ ({ invisible }) => invisible && styles }
`;

export const whenFocused = (styles) => css`
  &:focus,
  &.focus {
    ${ styles }
  }

  ${ ({ focused }) => focused && styles }
`;

export const whenHovered = (styles) => css`
  &:hover,
  &.hover {
    ${ styles }
  }

  ${ ({ hovered }) => hovered && styles }
`;

export const whenActive = (styles) => css`
  &:active,
  &.active {
    ${ styles }
  }

  ${ ({ active }) => active && styles }
`;

export const whenDisabled = (styles) => css`
  &.disabled,
  *:disabled &,
  &:disabled {
    ${ styles }
  }

  ${ ({ disabled }) => disabled && styles }
`;
