import styled, { css } from 'styled-components';

import { rebuildClassName } from '../../helpers/rebuildClassName';
import { varTheme } from '../../helpers/varTheme';
import { disableable } from '../../mixins/disableable';
import { reset } from '../../mixins/reset';
import { unselectable } from '../../mixins/unselectable';
import { withText } from '../../mixins/withText';
import borders from '../../styles/borders';
import { Icon } from '../Icon';
import theme from './theme';
import typography from '../../styles/typography';
import { whenFocused, whenHovered, whenActive, whenDisabled } from '../../mixins/state';
import { toREM } from '../../helpers/toREM';
import spaces from '../../styles/spaces';


const withSizeVariant = ({
  variantName,
  border,
  paddingX,
  typographicVariant,
  iconSizeRatio,
}) => {
  border = {
    width: varTheme('Button', `${ variantName }BorderWidth`, borders.default.width),
    radius: varTheme('Button', `${ variantName }BorderRadius`, borders.default.radius),
  };

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

const mediumSizeVariant = () => withSizeVariant({
  border: borders.defaults,
  paddingX: spaces[5],
  typographicVariant: typography.p2,
  iconSizeRatio: 0.8,
});

const smallSizeVariant = ({ small }) => small && withSizeVariant({
  border: borders.defaults,
  paddingX: spaces[4],
  typographicVariant: typography.c2,
  iconSizeRatio: 0.75,
});

const colorsVariant = ({
  color,
  backgroundColor,
  hoverBackgroundColor,
  activeBackgroundColor,
  focusBackgroundColor,
  focusBorderColor,
  focusShadowColor,
  disabledColor,
  disabledBackgroundColor,
}) => css`
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

const basicColorsVariant = () => css`
  ${ colorsVariant({
    color: theme.basicColor,
    backgroundColor: theme.basicBackgroundColor,
    hoverBackgroundColor: theme.basicHoverBackgroundColor,
    activeBackgroundColor: theme.basicActiveBackgroundColor,
    focusBackgroundColor: theme.basicFocusBackgroundColor,
    focusBorderColor: theme.basicFocusBorderColor,
    focusShadowColor: theme.basicFocusShadowColor,
    disabledColor: theme.basicDisabledColor,
    disabledBackgroundColor: theme.basicDisabledBackgroundColor,
  }) }

  ${ ({ danger }) => danger && colorsVariant({
    color: theme.basicDangerColor,
    disabledColor: theme.basicDisabledDangerColor,
  }) }
`;

const primaryColorsVariant = ({ primary }) => primary && css`
  ${ colorsVariant({
    color: theme.primaryColor,
    backgroundColor: theme.primaryBackgroundColor,
    hoverBackgroundColor: theme.primaryHoverBackgroundColor,
    activeBackgroundColor: theme.primaryActiveBackgroundColor,
    focusBackgroundColor: theme.primaryFocusBackgroundColor,
    focusBorderColor: theme.primaryFocusBorderColor,
    focusShadowColor: theme.primaryFocusShadowColor,
    disabledColor: theme.primaryColor,
    disabledBackgroundColor: theme.primaryDisabledBackgroundColor,
  }) }

  ${ ({ danger }) => danger && colorsVariant({
    color: theme.primaryColor,
    backgroundColor: theme.primaryDangerBackgroundColor,
    hoverBackgroundColor: theme.primaryDangerHoverBackgroundColor,
    activeBackgroundColor: theme.primaryDangerActiveBackgroundColor,
    focusBackgroundColor: theme.primaryDangerFocusBackgroundColor,
    focusBorderColor: theme.primaryDangerFocusBorderColor,
    focusShadowColor: theme.primaryDangerFocusShadowColor,
    disabledColor: theme.primaryColor,
    disabledBackgroundColor: theme.primaryDangerDisabledBackgroundColor,
  }) }
`;

const ghostColorsVariant = ({ ghost }) => ghost && colorsVariant({
  backgroundColor: 'transparent',
});

export const Button = styled.button.attrs(rebuildClassName('rcx-button'))`
  ${ reset }
  ${ disableable }
  ${ unselectable }

  display: inline-block;

  cursor: pointer;

  border-width: ${ varTheme('Button', 'borderWidth', borders.default.width) };
  border-style: solid;
  border-radius: ${ varTheme('Button', 'borderRadius', borders.default.radius) };

  text-align: center;

  & > ${ Icon } {
    vertical-align: middle;
  }

  ${ mediumSizeVariant }
  ${ smallSizeVariant }

  ${ basicColorsVariant }
  ${ primaryColorsVariant }
  ${ ghostColorsVariant }
`;

Button.defaultProps = {
  type: 'button',
};

Button.displayName = 'Button';
