import styled, { css, keyframes } from 'styled-components';

import { withTheme } from '../../hocs/withTheme';
import box from '../../styles/box';
import {
  headline,
  subtitle,
  paragraph,
  caption,
  micro,
} from '../../styles/utilities/typography';

export const StyledText = withTheme(styled.span`
  ${ box }

  user-select: text;

  ${ ({ styleVariant, theme }) =>
    (styleVariant === 'headline' && headline(theme))
      || (styleVariant === 'subtitle' && subtitle(theme))
      || (styleVariant === 'paragraph' && paragraph(theme))
      || (styleVariant === 'caption' && caption(theme))
      || (styleVariant === 'micro' && micro(theme))
      || paragraph(theme) }
  ${ ({ colorVariant, theme }) =>
    (colorVariant === 'default' && css`color: ${ theme.textColors.default };`)
      || (colorVariant === 'info' && css`color: ${ theme.textColors.info };`)
      || (colorVariant === 'hint' && css`color: ${ theme.textColors.hint };`)
      || (colorVariant === 'disabled' && css`color: ${ theme.textColors.disabled };`)
      || (colorVariant === 'alternative' && css`color: ${ theme.textColors.alternative };`)
      || (colorVariant === 'primary' && css`color: ${ theme.textColors.primary };`)
      || (colorVariant === 'success' && css`color: ${ theme.textColors.success };`)
      || (colorVariant === 'danger' && css`color: ${ theme.textColors.danger };`)
      || (colorVariant === 'warning' && css`color: ${ theme.textColors.warning };`)
      || css`color: ${ theme.textColors.default };` }
`);

export const StyledTextSkeleton = withTheme(styled.span`
  ${ box }
  display: inline-block;

  width: 100%;
  height: 1em;

  vertical-align: baseline;

  opacity: 0.1;

  background-color: currentColor;

  font-size: inherit;

  ${ ({ animated }) => animated && css`
    animation: ${ keyframes`
      0% {
        opacity: 0.1;
      }

      50% {
        opacity: 0.2;
      }

      100% {
        opacity: 0.1;
      }
    ` } 1s linear 0s infinite running;
  ` };

  ${ ({ width, theme }) => width !== undefined && css`
    width: ${ theme.widths[width] }
  ` };
`);
