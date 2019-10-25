import colors from '@rocket.chat/fuselage-tokens/colors';
import styled, { css } from 'styled-components';

import box from '../../styles/box';
import { clickable } from '../../styles/utilities/interactivity';
import { truncate, subtitleBold, subtitle } from '../../styles/utilities/typography';
import { toRem } from '../../styles/helpers';
import { Icon } from '../Icon';

export const StyledAccordion = styled.div`
  ${ box }

  display: flex;
  flex-flow: column nowrap;

  border-bottom-width: ${ ({ theme }) => theme.borders.width.x2 };
  border-bottom-color: ${ colors.dark300 };
`;

export const StyledAccordionItem = styled.div`
  ${ box }

  display: flex;
  flex-flow: column nowrap;
`;

export const Bar = styled.div`
  ${ box }

  display: flex;
  flex-flow: row nowrap;

  ${ ({ theme }) => css`
    min-height: calc(2 * ${ theme.spaces.x32 } + ${ theme.sizes.x24 });
  ` }

  border-width: ${ ({ theme }) => theme.borders.width.x2 };
  border-color: ${ colors.dark300 } transparent transparent;
  ${ ({ theme }) => css`
    padding:
      calc(${ theme.spaces.x32 } - ${ theme.borders.width.x2 })
      calc(${ theme.spaces.x8 } - ${ theme.borders.width.x2 });
  ` }

  text-align: left;

  ${ ({ disabled, noncollapsible }) => !disabled && !noncollapsible && css`
    ${ clickable }
  ` }

  & > .rcx-toggle-switch {
    margin: 0 ${ ({ theme }) => theme.sizes.x24 };
  }

  & > ${ Icon.styled } {
    font-size: ${ ({ theme }) => theme.sizes.x24 };

    ${ ({ expanded }) => expanded && css`
      transform: rotate(-180deg);
    ` }
  }

  ${ ({ disabled, noncollapsible }) => !disabled && !noncollapsible && css`
    &.hover,
    &:hover {
      background-color: ${ colors.dark100 };
    }

    &.focus,
    &:focus {
      border-color: ${ colors.blue500 };
      box-shadow: 0 0 0 ${ toRem(6) } ${ colors.blue100 };
    }
  ` }

  ${ ({ disabled, theme }) => disabled && css`
    color: ${ theme.textColors.disabled };
    background-color: ${ colors.dark100 };
  ` }
`;

export const Title = styled.h2`
  ${ box }

  flex: 1 1 0;

  ${ ({ disabled, theme }) => disabled && css`
    color: ${ theme.textColors.disabled };
  ` }

  ${ ({ theme }) => subtitle(theme) }
  ${ ({ theme }) => subtitleBold(theme) }
  ${ truncate }
`;

export const Panel = styled.div`
  ${ box }

  overflow: hidden;

  height: 0;
  ${ ({ theme }) => css`
    padding: 0 ${ theme.spaces.x8 };
    visibility: hidden;
  ` }

  ${ ({ expanded, theme }) => expanded && css`
    height: auto;
    padding: ${ theme.spaces.x32 } ${ theme.spaces.x8 };
    visibility: visible;
  ` }
`;
