import styled, { css, keyframes } from 'styled-components';

import box from '../../styles/utilities/box';
import {
  headline,
  subtitle,
  paragraph,
  caption,
  micro,
} from '../../styles/utilities/typography';

const withColor = (color) => css`
  color: ${ color };
`;

const Container = styled.span`
  ${ box }

  user-select: text;

  color: ${ ({ theme }) => theme.textColors.default };

  ${ ({ theme }) => paragraph(theme) }

  ${ ({ modifiers, theme }) =>
    (modifiers.style === 'headline' && headline(theme))
  || (modifiers.style === 'subtitle' && subtitle(theme))
  || (modifiers.style === 'paragraph' && paragraph(theme))
  || (modifiers.style === 'caption' && caption(theme))
  || (modifiers.style === 'micro' && micro(theme)) }

  ${ ({ modifiers, theme }) =>
    (modifiers.color === 'default' && withColor(theme.textColors.default))
  || (modifiers.color === 'info' && withColor(theme.textColors.info))
  || (modifiers.color === 'hint' && withColor(theme.textColors.hint))
  || (modifiers.color === 'disabled-label' && withColor(theme.textColors.disabledLabel))
  || (modifiers.color === 'disabled' && withColor(theme.textColors.disabled))
  || (modifiers.color === 'alternative' && withColor(theme.textColors.alternative))
  || (modifiers.color === 'primary' && withColor(theme.textColors.primary))
  || (modifiers.color === 'success' && withColor(theme.textColors.success))
  || (modifiers.color === 'danger' && withColor(theme.textColors.danger))
  || (modifiers.color === 'warning' && withColor(theme.textColors.warning)) }
`;

const withWidth = (width) => css`
  width: ${ width };
`;

const withHeight = (height) => css`
  height: ${ height };
`;

const SkeletonContainer = styled.span`
  ${ box }

  display: inline-flex;

  width: 100%;
  height: 1em;

  vertical-align: baseline;

  opacity: 0.1;

  background-color: currentColor;

  font-size: inherit;

  ${ ({ modifiers, theme }) =>
    (modifiers.style === 'headline' && withHeight(theme.textStyles.h1.fontSize))
  || (modifiers.style === 'subtitle' && withHeight(theme.textStyles.s1.fontSize))
  || (modifiers.style === 'paragraph' && withHeight(theme.textStyles.p1.fontSize))
  || (modifiers.style === 'caption' && withHeight(theme.textStyles.c1.fontSize))
  || (modifiers.style === 'micro' && withHeight(theme.textStyles.micro.fontSize)) }

  ${ ({ modifiers, theme }) =>
    (modifiers.color === 'default' && withColor(theme.textColors.default))
  || (modifiers.color === 'info' && withColor(theme.textColors.info))
  || (modifiers.color === 'hint' && withColor(theme.textColors.hint))
  || (modifiers.color === 'disabled-label' && withColor(theme.textColors.disabledLabel))
  || (modifiers.color === 'disabled' && withColor(theme.textColors.disabled))
  || (modifiers.color === 'alternative' && withColor(theme.textColors.alternative))
  || (modifiers.color === 'primary' && withColor(theme.textColors.primary))
  || (modifiers.color === 'success' && withColor(theme.textColors.success))
  || (modifiers.color === 'danger' && withColor(theme.textColors.danger))
  || (modifiers.color === 'warning' && withColor(theme.textColors.warning)) }

  ${ ({ modifiers }) => modifiers.animated && css`
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

  ${ ({ modifiers, theme }) => modifiers.width !== undefined && withWidth(theme.widths[modifiers.width]) }
`;

export default {
  'rcx-text': Container,
  'rcx-skeleton__text': SkeletonContainer,
};
