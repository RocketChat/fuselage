import { css } from 'styled-components';

import transitions from '../styles/transitions';
import textStyles from '../styles/textStyles';
import borders from '../styles/borders';
import { toREM, isIE11 } from '../helpers';


export const whenHidden = (content) => css`
  &.hidden,
  &[hidden] {
    ${ content }
  }

  ${ ({ hidden }) => hidden && content }
`;

export const whenInvisible = (content) => css`
  &.invisible {
    ${ content }
  }

  ${ ({ invisible }) => invisible && content }
`;

export const whenInvalid = (content) => css`
  &:invalid,
  &.invalid {
    ${ content }
  }

  ${ ({ invalid }) => invalid && content }
`;

export const whenFocused = (content, source = '&', target = '') => css`
  ${ source }:focus ${ target },
  ${ source }.focus  ${ target }{
    ${ content }
  }
`;

export const whenHovered = (content, source = '&', target = '') => css`
  ${ source }:hover ${ target },
  ${ source }.hover ${ target } {
    ${ content }
  }
`;

export const whenActive = (content, source = '&', target = '') => css`
  ${ source }:active ${ target },
  ${ source }.active ${ target } {
    ${ content }
  }
`;

export const whenDisabled = (content, source = '&', target = '') => css`
  ${ source }.disabled ${ target },
  *:disabled ${ source } ${ target },
  ${ source }:disabled ${ target }{
    ${ content }
  }
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

export const scrollable = css`
  &::-webkit-scrollbar {
    width: 0.5rem;
    height: 0.5rem;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 9999px;
    background-color: rgba(0, 0, 0, 0.05);
  }

  &:hover::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.15);
  }
`;

export const visuallyHidden = css`
  position: absolute;

  overflow: hidden;
  clip: rect(0, 0, 0, 0);

  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;

  white-space: nowrap;

  border: 0;
  clip-path: inset(50%);
`;

export const whenIE11 = (content) => (isIE11 ? content : css``);

export const whenRightToLeftOrientation = (content) => css`
  .rtl &,
  [dir=rtl] & {
    ${ content }
  }
`;

export const withBorder = ({
  width = borders.default.width,
  radius = borders.default.radius,
}) => css`
  border-width: ${ width };
  border-style: solid;
  border-radius: ${ radius };
`;

export const withButtonActionColors = ({
  color,
  backgroundColor,
  borderColor,
  hoverBackgroundColor,
  hoverBorderColor,
  activeBackgroundColor,
  activeBorderColor,
  focusBackgroundColor,
  focusBorderColor,
  focusShadowColor,
  disabledColor,
  disabledBackgroundColor,
  disabledBorderColor,
}, source = '&', target = '') => css`
  ${ source } ${ target } {
    color: ${ color };
    background-color: ${ backgroundColor };
    border-color: ${ borderColor };
  }

  ${ whenFocused(css`
    border-color: ${ focusBorderColor };
    background-color: ${ focusBackgroundColor };

  ${ focusShadowColor && css`box-shadow: 0 0 0 ${ toREM(6) } ${ focusShadowColor };` }
  `, source, target) }

  ${ whenHovered(css`
    background-color: ${ hoverBackgroundColor };
    border-color: ${ hoverBorderColor };
    box-shadow: none;
  `, source, target) }

  ${ whenActive(css`
    background-color: ${ activeBackgroundColor };
    border-color: ${ activeBorderColor };
    box-shadow: none;
  `, source, target) }

  ${ whenDisabled(css`
    color: ${ disabledColor };
    background-color: ${ disabledBackgroundColor };
    border-color: ${ disabledBorderColor };
  `, source, target) }
`;

export const withText = ({
  fontFamily = textStyles.p1.fontFamily,
  fontSize = textStyles.p1.fontSize,
  fontWeight = textStyles.p1.fontWeight,
  letterSpacing = textStyles.p1.letterSpacing,
  lineHeight = textStyles.p1.lineHeight,
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
