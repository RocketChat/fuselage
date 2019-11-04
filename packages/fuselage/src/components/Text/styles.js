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

  ${ (props) =>
    (props['mod-style'] === 'headline' && headline(props.theme))
  || (props['mod-style'] === 'subtitle' && subtitle(props.theme))
  || (props['mod-style'] === 'paragraph' && paragraph(props.theme))
  || (props['mod-style'] === 'caption' && caption(props.theme))
  || (props['mod-style'] === 'micro' && micro(props.theme)) }

  ${ (props) =>
    (props['mod-color'] === 'default' && withColor(props.theme.textColors.default))
  || (props['mod-color'] === 'info' && withColor(props.theme.textColors.info))
  || (props['mod-color'] === 'hint' && withColor(props.theme.textColors.hint))
  || (props['mod-color'] === 'disabled-label' && withColor(props.theme.textColors.disabledLabel))
  || (props['mod-color'] === 'disabled' && withColor(props.theme.textColors.disabled))
  || (props['mod-color'] === 'alternative' && withColor(props.theme.textColors.alternative))
  || (props['mod-color'] === 'primary' && withColor(props.theme.textColors.primary))
  || (props['mod-color'] === 'success' && withColor(props.theme.textColors.success))
  || (props['mod-color'] === 'danger' && withColor(props.theme.textColors.danger))
  || (props['mod-color'] === 'warning' && withColor(props.theme.textColors.warning)) }
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

  ${ (props) =>
    (props['mod-style'] === 'headline' && withHeight(props.theme.textStyles.h1.fontSize))
  || (props['mod-style'] === 'subtitle' && withHeight(props.theme.textStyles.s1.fontSize))
  || (props['mod-style'] === 'paragraph' && withHeight(props.theme.textStyles.p1.fontSize))
  || (props['mod-style'] === 'caption' && withHeight(props.theme.textStyles.c1.fontSize))
  || (props['mod-style'] === 'micro' && withHeight(props.theme.textStyles.micro.fontSize)) }

  ${ (props) =>
    (props['mod-color'] === 'default' && withColor(props.theme.textColors.default))
  || (props['mod-color'] === 'info' && withColor(props.theme.textColors.info))
  || (props['mod-color'] === 'hint' && withColor(props.theme.textColors.hint))
  || (props['mod-color'] === 'disabled-label' && withColor(props.theme.textColors.disabledLabel))
  || (props['mod-color'] === 'disabled' && withColor(props.theme.textColors.disabled))
  || (props['mod-color'] === 'alternative' && withColor(props.theme.textColors.alternative))
  || (props['mod-color'] === 'primary' && withColor(props.theme.textColors.primary))
  || (props['mod-color'] === 'success' && withColor(props.theme.textColors.success))
  || (props['mod-color'] === 'danger' && withColor(props.theme.textColors.danger))
  || (props['mod-color'] === 'warning' && withColor(props.theme.textColors.warning)) }

  ${ (props) => props['mod-animated'] && css`
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

  ${ (props) => props['mod-width'] !== undefined && withWidth(props.theme.widths[props['mod-width']]) }
`;

export default {
  'rcx-text': Container,
  'rcx-skeleton__text': SkeletonContainer,
};
