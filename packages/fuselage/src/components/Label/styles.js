import styled, { css } from 'styled-components';

import box from '../../styles/utilities/box';
import { ellipsis, paragraph } from '../../styles/utilities/typography';

const Container = styled.label`
  ${ box }

  cursor: inherit;

  display: inline-flex;
  align-items: stretch;
  flex-flow: column nowrap;

  ${ (props) => props['mod-position'] === 'top' && css`
    align-items: stretch;
    flex-flow: column nowrap;
  ` }

  ${ (props) => props['mod-position'] === 'start' && css`
    align-items: flex-start;
    flex-flow: row nowrap;
  ` }

  ${ (props) => props['mod-position'] === 'end' && css`
    align-items: flex-start;
    flex-flow: row-reverse nowrap;
  ` }
`;

const Wrapper = styled.span`
  ${ box }

  display: flex;
  align-items: center;

  ${ (props) => props['mod-position'] === 'top' && css`
    flex: 1 0 auto;

    ${ props['mod-has-children'] && css`
      margin-bottom: ${ ({ theme }) => theme.spaces.x8 };
      margin-block-end: ${ ({ theme }) => theme.spaces.x8 };
    ` }
  ` }

  ${ (props) => props['mod-position'] === 'start' && css`
    flex: 1 0 0;
    align-self: stretch;

    ${ props['mod-has-children'] && css`
      margin-right: ${ ({ theme }) => theme.spaces.x8 };
      margin-inline-end: ${ ({ theme }) => theme.spaces.x8 };
    ` }
  ` }

  ${ (props) => props['mod-position'] === 'end' && css`
      flex: 1 0 0;
      align-self: stretch;

      ${ props['mod-has-children'] && css`
        margin-left: ${ ({ theme }) => theme.spaces.x8 };
        margin-inline-start: ${ ({ theme }) => theme.spaces.x8 };
      ` }
  ` }
`;

const TextContainer = styled.span`
 ${ box }

  flex: 1 1 0;

  user-select: text;

  color: ${ ({ theme }) => theme.textColors.default };

  ${ ({ theme }) => paragraph(theme) }

  ${ ellipsis }

  ${ (props) => props['mod-disabled'] && css`
    color: ${ ({ theme }) => theme.textColors.disabledLabel };
  ` }

  ${ (props) => props['mod-required'] && css`
    &::before {
      content: '*\0a0';
      color: ${ ({ theme }) => theme.textColors.danger };
    }
  ` }
`;

export default {
  'rcx-label': Container,
  'rcx-label__wrapper': Wrapper,
  'rcx-label__text': TextContainer,
};
