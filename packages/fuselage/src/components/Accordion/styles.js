import colors from '@rocket.chat/fuselage-tokens/colors';
import styled, { css } from 'styled-components';

import box from '../../styles/utilities/box';
import { clickable } from '../../styles/utilities/interactivity';
import { truncate, subtitleBold, subtitle } from '../../styles/utilities/typography';
import { toRem } from '../../styles/utilities/common';
import { Icon } from '../Icon';
import { ToggleSwitch } from '../ToggleSwitch';

const Container = styled.div`
  ${ box }

  display: flex;
  flex-flow: column nowrap;

  border-bottom-width: ${ ({ theme }) => theme.borders.width.x2 };
  border-bottom-color: ${ colors.dark300 };
`;

const ItemContainer = styled.div`
  ${ box }

  display: flex;
  flex-flow: column nowrap;
`;

const ItemBar = styled.div`
  ${ box }

  display: flex;

  min-height: calc(2 * ${ ({ theme }) => theme.spaces.x32 } + ${ ({ theme }) => theme.sizes.x24 });
  padding:
    calc(${ ({ theme }) => theme.spaces.x32 } - ${ ({ theme }) => theme.borders.width.x2 })
    calc(${ ({ theme }) => theme.spaces.x8 } - ${ ({ theme }) => theme.borders.width.x2 });

  text-align: left;
  text-align: start;

  color: ${ ({ theme }) => theme.textColors.default };

  border-width: ${ ({ theme }) => theme.borders.width.x2 };
  border-color: ${ colors.dark300 } transparent transparent;
  flex-flow: row nowrap;

  &[tabindex] {
    ${ clickable }

    &.hover,
    &:hover {
      background-color: ${ colors.dark100 };
    }

    &.focus,
    &:focus {
      border-color: ${ colors.blue500 };
      box-shadow: 0 0 0 ${ toRem(6) } ${ colors.blue100 };
    }
  }

  & > ${ ToggleSwitch.styled } {
    margin: 0 ${ ({ theme }) => theme.sizes.x24 };
  }

  & > ${ Icon.styled } {
    font-size: ${ ({ theme }) => theme.sizes.x24 };
  }

  ${ ({ modifiers }) => modifiers.expanded && css`
    & > ${ Icon.styled } {
      transform: rotate(-180deg);
    }
  ` }

  ${ ({ modifiers, theme }) => modifiers.disabled && css`
    cursor: not-allowed;

    color: ${ theme.textColors.disabled };
    background-color: ${ colors.dark100 };
  ` }
`;

const ItemTitle = styled.h2`
  ${ box }

  flex: 1 1 0;

  ${ ({ theme }) => subtitle(theme) }
  ${ ({ theme }) => subtitleBold(theme) }
  ${ truncate }
`;

const ItemPanel = styled.div`
  ${ box }

  visibility: hidden;

  overflow: hidden;

  height: 0;
  padding: 0 ${ ({ theme }) => theme.spaces.x8 };

  ${ ({ modifiers, theme }) => modifiers.expanded && css`
    visibility: visible;

    height: auto;
    padding:
      ${ theme.spaces.x32 }
      ${ theme.spaces.x8 };
  ` }
`;

export default {
  'rcx-accordion': Container,
  'rcx-accordion-item': ItemContainer,
  'rcx-accordion-item__bar': ItemBar,
  'rcx-accordion-item__title': ItemTitle,
  'rcx-accordion-item__panel': ItemPanel,
};
