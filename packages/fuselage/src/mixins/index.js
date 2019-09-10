import { css } from 'styled-components';

import transitions from '../styles/transitions';
import typography from '../styles/typography';


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

export const normalized = css`
  box-sizing: border-box;
  margin: 0;
  border: 0;
  padding: 0;

  transition: all ${ transitions.shortDuration };

  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  user-select: none;

  &::before, &::after {
    box-sizing: border-box;
    margin: 0;
    border: 0;
    padding: 0;

    transition: all ${ transitions.shortDuration };

    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    user-select: none;
  }

  ${ whenHidden(css`display: none;`) }

  ${ whenInvisible(css`
    opacity: 0;
    visibility: hidden;
  `) }
`;

export const clickable = css`
  cursor: pointer;
  outline: 0;
  ${ whenDisabled(css`cursor: not-allowed;`) }
`;

export const withText = ({
  fontFamily = typography.p1.fontFamily,
  fontSize = typography.p1.fontSize,
  fontWeight = typography.p1.fontWeight,
  letterSpacing = typography.p1.letterSpacing,
  lineHeight = typography.p1.lineHeight,
}) => css`
  font-family: ${ fontFamily };
  font-size: ${ fontSize };
  font-variant-numeric: tabular-nums;
  font-weight: ${ fontWeight };
  letter-spacing: ${ letterSpacing };
  line-height: ${ lineHeight };
  text-decoration: none;
`;

export const withTruncatedText = css`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const withSelectableText = css`
  user-select: text;
`;
