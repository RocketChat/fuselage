import styled, { css } from 'styled-components';

import { rebuildClassName } from '../../helpers/rebuildClassName';
import { toREM } from '../../helpers/toREM';
import { varTheme } from '../../helpers/varTheme';
import {
  withText,
  whenFocused,
  whenHovered,
  whenActive,
  whenDisabled,
  normalized,
  clickable,
  withTruncatedText,
} from '../../mixins';
import borders from '../../styles/borders';
import { Icon } from '../Icon';
import typography from '../../styles/typography';
import spaces from '../../styles/spaces';
import colors from '../../tokens/colors';


const withSizeVariant = ({
  variantName,
  border,
  paddingX,
  typographicVariant,
  iconSizeRatio,
}) => {
  border = {
    width: varTheme('Button', `${ variantName }BorderWidth`, border.width),
    radius: varTheme('Button', `${ variantName }BorderRadius`, border.radius),
  };
  paddingX = varTheme('Button', `${ variantName }PaddingX`, paddingX);
  typographicVariant = {
    fontFamily: varTheme('Button', `${ variantName }FontFamily`, typographicVariant.fontFamily),
    fontSize: varTheme('Button', `${ variantName }FontSize`, typographicVariant.fontSize),
    fontWeight: varTheme('Button', `${ variantName }FontWeight`, typographicVariant.fontWeight),
    letterSpacing: varTheme('Button', `${ variantName }LetterSpacing`, typographicVariant.letterSpacing),
    lineHeight: varTheme('Button', `${ variantName }LineHeight`, typographicVariant.lineHeight),
  };
  iconSizeRatio = varTheme('Button', `${ variantName }IconSizeRatio`, iconSizeRatio);

  return css`
    border-width: ${ border.width };
    border-style: solid;
    border-radius: ${ border.radius };
    padding: 0 calc(${ paddingX } - ${ border.width });

    ${ withText(typographicVariant) }

    line-height: calc(2 * ${ typographicVariant.lineHeight } - 2 * ${ border.width });

    & > ${ Icon } {
      font-size: ${ iconSizeRatio * typographicVariant.lineHeight };
    }

    ${ ({ square }) => square && css`
      width: calc(2 * ${ typographicVariant.lineHeight });
      padding: 0;

      & > ${ Icon } {
        font-size: ${ typographicVariant.lineHeight };
      }
    ` }
  `;
};

const mediumSized = withSizeVariant({
  variantName: 'mediumSize',
  border: borders.default,
  paddingX: spaces[5],
  typographicVariant: typography.p2,
  iconSizeRatio: 0.8,
});

const smallSized = withSizeVariant({
  variantName: 'smallSize',
  border: borders.default,
  paddingX: spaces[4],
  typographicVariant: typography.c2,
  iconSizeRatio: 0.75,
});

const withColorVariant = ({
  variantName,
  color,
  backgroundColor,
  hoverBackgroundColor,
  activeBackgroundColor,
  focusBackgroundColor,
  focusBorderColor,
  focusShadowColor,
  disabledColor,
  disabledBackgroundColor,
}) => {
  color = varTheme('Button', `${ variantName }Color`, color);
  backgroundColor = varTheme('Button', `${ variantName }BackgroundColor`, backgroundColor);
  hoverBackgroundColor = varTheme('Button', `${ variantName }HoverBackgroundColor`, hoverBackgroundColor);
  activeBackgroundColor = varTheme('Button', `${ variantName }ActiveBackgroundColor`, activeBackgroundColor);
  focusBackgroundColor = varTheme('Button', `${ variantName }FocusBackgroundColor`, focusBackgroundColor);
  focusBorderColor = varTheme('Button', `${ variantName }FocusBorderColor`, focusBorderColor);
  focusShadowColor = varTheme('Button', `${ variantName }FocusShadowColor`, focusShadowColor);
  disabledColor = varTheme('Button', `${ variantName }DisabledColor`, disabledColor);
  disabledBackgroundColor = varTheme('Button', `${ variantName }DisabledBackgroundColor`, disabledBackgroundColor);

  return css`
    color: ${ color };
    border-color: ${ backgroundColor };
    background-color: ${ backgroundColor };

    ${ whenFocused(css`
      border-color: ${ focusBorderColor };
      background-color: ${ focusBackgroundColor };

      ${ focusShadowColor && css`box-shadow: 0 0 0 ${ toREM(6) } ${ focusShadowColor };` }
    `) }

    ${ whenHovered(css`
      border-color: ${ hoverBackgroundColor };
      background-color: ${ hoverBackgroundColor };
      box-shadow: none;
    `) }

    ${ whenActive(css`
      border-color: ${ activeBackgroundColor };
      background-color: ${ activeBackgroundColor };
      box-shadow: none;
    `) }

    ${ whenDisabled(css`
      color: ${ disabledColor };
      border-color: ${ disabledBackgroundColor };
      background-color: ${ disabledBackgroundColor };
    `) }
  `;
};

const basicColored = withColorVariant({
  variantName: 'basic',
  color: colors.dark800,
  backgroundColor: colors.dark300,
  hoverBackgroundColor: colors.dark400,
  activeBackgroundColor: colors.dark500,
  focusBackgroundColor: colors.dark300,
  focusBorderColor: colors.dark500,
  focusShadowColor: colors.dark100,
  disabledColor: colors.dark400,
  disabledBackgroundColor: colors.dark100,
});

const basicDangerColored = withColorVariant({
  variantName: 'basicDanger',
  color: colors.red500,
  backgroundColor: colors.dark300,
  hoverBackgroundColor: colors.dark400,
  activeBackgroundColor: colors.dark500,
  focusBackgroundColor: colors.dark300,
  focusBorderColor: colors.dark500,
  focusShadowColor: colors.dark100,
  disabledColor: colors.red100,
  disabledBackgroundColor: colors.dark100,
});

const primaryColored = withColorVariant({
  variantName: 'primary',
  color: colors.white,
  backgroundColor: colors.blue500,
  hoverBackgroundColor: colors.blue600,
  activeBackgroundColor: colors.blue700,
  focusBackgroundColor: colors.blue500,
  focusBorderColor: colors.blue700,
  focusShadowColor: colors.blue100,
  disabledColor: colors.white,
  disabledBackgroundColor: colors.blue200,
});

const primaryDangerColored = withColorVariant({
  variantName: 'primaryDanger',
  color: colors.white,
  backgroundColor: colors.red500,
  hoverBackgroundColor: colors.red600,
  activeBackgroundColor: colors.red700,
  focusBackgroundColor: colors.red500,
  focusBorderColor: colors.red700,
  focusShadowColor: colors.red100,
  disabledColor: colors.white,
  disabledBackgroundColor: colors.red200,
});

const ghostColored = withColorVariant({
  variantName: 'ghost',
  color: colors.dark800,
  backgroundColor: 'transparent',
  hoverBackgroundColor: colors.dark400,
  activeBackgroundColor: colors.dark500,
  focusBackgroundColor: colors.dark300,
  focusBorderColor: colors.dark500,
  focusShadowColor: colors.dark100,
  disabledColor: colors.dark400,
  disabledBackgroundColor: colors.dark100,
});

const ghostDangerColored = withColorVariant({
  variantName: 'ghostDanger',
  color: colors.red500,
  backgroundColor: 'transparent',
  hoverBackgroundColor: colors.dark400,
  activeBackgroundColor: colors.dark500,
  focusBackgroundColor: colors.dark300,
  focusBorderColor: colors.dark500,
  focusShadowColor: colors.dark100,
  disabledColor: colors.red100,
  disabledBackgroundColor: colors.dark100,
});

export const Button = styled.button.attrs(rebuildClassName('rcx-button'))`
  ${ normalized }
  ${ clickable }
  ${ withTruncatedText }

  display: inline-block;

  text-align: center;

  & > ${ Icon } {
    vertical-align: middle;
  }

  ${ ({ small }) =>
    (small && smallSized)
    || mediumSized }

  ${ ({ danger, ghost, primary }) =>
    (ghost && danger && ghostDangerColored)
    || (ghost && ghostColored)
    || (primary && danger && primaryDangerColored)
    || (primary && primaryColored)
    || (danger && basicDangerColored)
    || basicColored }
`;

Button.displayName = 'Button';
