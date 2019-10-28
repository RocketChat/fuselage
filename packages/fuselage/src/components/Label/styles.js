import styled, { css } from 'styled-components';

import box from '../../styles/utilities/box';
import { ellipsis } from '../../styles/utilities/typography';

const Container = styled.label`
  ${ box }

  display: inline-flex;
  align-items: stretch;
  flex-flow: column nowrap;

  ${ ({ modifiers }) => modifiers.position === 'top' && css`
    align-items: stretch;
    flex-flow: column nowrap;
  ` }

  ${ ({ modifiers }) => modifiers.position === 'start' && css`
    align-items: flex-start;
    flex-flow: row nowrap;
  ` }

  ${ ({ modifiers }) => modifiers.position === 'end' && css`
    align-items: flex-start;
    flex-flow: row-reverse nowrap;
  ` }
`;

const Wrapper = styled.span`
  ${ box }

  display: flex;
  align-items: center;

  ${ ({ modifiers, theme }) => modifiers.position === 'top' && css`
    flex: 1 0 auto;

    ${ modifiers.hasChildren && css`
      margin-bottom: ${ theme.spaces.x8 };
      margin-block-end: ${ theme.spaces.x8 };
    ` }
  ` }

  ${ ({ modifiers, theme }) => modifiers.position === 'start' && css`
    flex: 1 0 0;
    align-self: stretch;

    ${ modifiers.hasChildren && css`
      margin-right: ${ theme.spaces.x8 };
      margin-inline-end: ${ theme.spaces.x8 };
    ` }
  ` }

  ${ ({ modifiers, theme }) => modifiers.position === 'end' && css`
      flex: 1 0 0;
      align-self: stretch;

      ${ modifiers.hasChildren && css`
        margin-left: ${ theme.spaces.x8 };
        margin-inline-start: ${ theme.spaces.x8 };
      ` }
  ` }
`;

const TextContainer = styled.span`
  flex: 1 1 0;

  user-select: text;

  ${ ellipsis }

  ${ ({ modifiers, theme }) => modifiers.required && css`
    &::before {
      content: '*\0a0';
      color: ${ theme.textColors.danger };
    }
  ` }
`;

export default {
  'rcx-label': Container,
  'rcx-label__wrapper': Wrapper,
  'rcx-label__text': TextContainer,
};
