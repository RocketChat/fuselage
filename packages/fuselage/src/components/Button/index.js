import styled, { css } from 'styled-components';

import { rebuildClassName } from '../../helpers/rebuildClassName';
import {
  whenActive,
  whenDisabled,
  whenFocused,
  whenHidden,
  whenHovered,
  whenInvisible,
} from '../../mixins/state';
import theme from '../../styles/theme';
import colors from '../../tokens/colors';
import { Icon } from '../Icon';


const withSizeVariant = ({
  border,
  iconSizeRatio,
  margin,
  paddingX,
  typography,
}) => css`
  border-width: ${ border.width };
  margin: ${ margin };
  padding: 0 calc(${ paddingX } - ${ border.width });

  border-radius: ${ border.radius };

  font-family: ${ typography.fontFamily };
  font-size: ${ typography.fontSize };
  font-weight: ${ typography.fontWeight };
  letter-spacing: ${ typography.letterSpacing };
  line-height: calc(2 * ${ typography.lineHeight } - 2 * ${ border.width });

  & > ${ Icon } {
    font-size: calc(${ iconSizeRatio } * ${ typography.lineHeight });
  }

  ${ ({ square }) => square && css`
    width: calc(2 * ${ typography.lineHeight });
    padding: 0;

    & > ${ Icon } {
      font-size: ${ typography.lineHeight };
    }
  ` }
`;

const withColorsVariant = ({
  backgroundColor,
  color,
  hoverBackgroundColor,
  activeBackgroundColor,
  focusBackgroundColor,
  focusBorderColor,
  focusShadowColor,
  disabledBackgroundColor,
  disabledColor,
}) => css`
  background-color: ${ backgroundColor };
  border-color: ${ backgroundColor };
  color: ${ color };

  ${ whenFocused(css`
    background-color: ${ focusBackgroundColor };
    border-color: ${ focusBorderColor };

    ${ focusShadowColor && css`box-shadow: 0 0 0 6px ${ focusShadowColor };` }
  `) }

  ${ whenHovered(css`
    background-color: ${ hoverBackgroundColor };
    border-color: ${ hoverBackgroundColor };
    box-shadow: none;
  `) }

  ${ whenActive(css`
    background-color: ${ activeBackgroundColor };
    border-color: ${ activeBackgroundColor };
    box-shadow: none;
  `) }

  ${ whenDisabled(css`
    background-color: ${ disabledBackgroundColor };
    border-color: ${ disabledBackgroundColor };
    color: ${ disabledColor };
  `) }
`;

const transitionsDuration = ({ theme }) => theme.transitions.shortDuration;

const basicVariantColors = () => ({
  backgroundColor: colors.dark300,
  color: colors.dark800,
  hoverBackgroundColor: colors.dark400,
  activeBackgroundColor: colors.dark500,
  focusBackgroundColor: colors.dark300,
  focusBorderColor: colors.dark500,
  focusShadowColor: colors.dark100,
  disabledBackgroundColor: colors.dark100,
  disabledColor: colors.dark400,
});

const basicDangerVariantColors = () => ({
  backgroundColor: colors.dark300,
  color: colors.red500,
  hoverBackgroundColor: colors.dark400,
  activeBackgroundColor: colors.dark500,
  focusBackgroundColor: colors.dark300,
  focusBorderColor: colors.dark500,
  focusShadowColor: colors.dark100,
  disabledBackgroundColor: colors.dark100,
  disabledColor: colors.red100,
});

const primaryVariantColors = () => ({
  backgroundColor: colors.blue500,
  color: colors.white,
  hoverBackgroundColor: colors.blue600,
  activeBackgroundColor: colors.blue700,
  focusBackgroundColor: colors.blue500,
  focusBorderColor: colors.blue700,
  focusShadowColor: colors.blue100,
  disabledBackgroundColor: colors.blue200,
  disabledColor: colors.white,
});

const primaryDangerVariantColors = () => ({
  backgroundColor: colors.red500,
  color: colors.white,
  hoverBackgroundColor: colors.red600,
  activeBackgroundColor: colors.red700,
  focusBackgroundColor: colors.red500,
  focusBorderColor: colors.red700,
  focusShadowColor: colors.red100,
  disabledBackgroundColor: colors.red200,
  disabledColor: colors.white,
});

const ghostVariantColors = () => ({
  backgroundColor: 'transparent',
  color: colors.dark800,
  hoverBackgroundColor: colors.dark400,
  activeBackgroundColor: colors.dark500,
  focusBackgroundColor: colors.dark300,
  focusBorderColor: colors.dark500,
  focusShadowColor: colors.dark100,
  disabledBackgroundColor: colors.dark100,
  disabledColor: colors.dark400,
});

const ghostDangerVariantColors = () => ({
  backgroundColor: 'transparent',
  color: colors.red500,
  hoverBackgroundColor: colors.dark400,
  activeBackgroundColor: colors.dark500,
  focusBackgroundColor: colors.dark300,
  focusBorderColor: colors.dark500,
  focusShadowColor: colors.dark100,
  disabledBackgroundColor: colors.dark100,
  disabledColor: colors.red100,
});

const mediumSizeVariant = ({ theme }) => ({
  border: theme.borders.default,
  iconSizeRatio: 0.8,
  margin: theme.spaces[0],
  paddingX: theme.spaces[5],
  typography: theme.typography.p2,
});

const smallSizeVariant = ({ theme }) => ({
  border: theme.borders.default,
  iconSizeRatio: 0.75,
  margin: theme.spaces[0],
  paddingX: theme.spaces[4],
  typography: theme.typography.c2,
});

export const Button = styled.button.attrs(rebuildClassName('rcx-button'))`
  display: inline-block;

  box-sizing: border-box;

  border-style: solid;

  appearance: none;
  transition: all ${ transitionsDuration };
  outline: none;

  font-variant-numeric: tabular-nums;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;

  cursor: pointer;
  user-select: none;

  & > ${ Icon } {
    vertical-align: middle;
  }

  ${ ({ small, theme }) => withSizeVariant(
    (small && smallSizeVariant({ theme }))
  || mediumSizeVariant({ theme })
  ) }

  ${ ({ danger, ghost, primary, theme }) => withColorsVariant(
    (primary && danger && primaryDangerVariantColors({ theme }))
  || (primary && primaryVariantColors({ theme }))
  || (ghost && danger && ghostDangerVariantColors({ theme }))
  || (ghost && ghostVariantColors({ theme }))
  || (danger && basicDangerVariantColors({ theme }))
  || basicVariantColors({ theme })
  ) }

  ${ whenHidden(css`display: none;`) }

  ${ whenInvisible(css`
    opacity: 0;
    visibility: hidden;
  `) }

  ${ whenDisabled(css`cursor: not-allowed;`) }
`;

Button.defaultProps = {
  theme,
  type: 'button',
};

Button.displayName = 'Button';
