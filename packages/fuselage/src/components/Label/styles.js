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

  flex: 1 0 auto;

  margin-bottom: ${ ({ theme }) => theme.spaces.x8 };
  margin-block-end: ${ ({ theme }) => theme.spaces.x8 };
  align-items: center;

  ${ ({ modifiers, theme }) => modifiers.position === 'top' && css`
    flex: 1 0 auto;

    margin-bottom: ${ theme.spaces.x8 };
    margin-block-end: ${ theme.spaces.x8 };
  ` }

  ${ ({ modifiers, theme }) => modifiers.position === 'start' && css`
    flex: 1 0 0;

    margin-bottom: unset;
    margin-block-end: unset;
    margin-right: ${ theme.spaces.x8 };
    margin-inline-end: ${ theme.spaces.x8 };
    align-self: stretch;
  ` }

  ${ ({ modifiers, theme }) => modifiers.position === 'end' && css`
      flex: 1 0 0;

      margin-bottom: unset;
      margin-block-end: unset;
      margin-left: ${ theme.spaces.x8 };
      margin-inline-start: ${ theme.spaces.x8 };
      align-self: stretch;
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

const ErrorContainer = styled.span`
  flex: 0 1 auto;

  margin-left: ${ ({ theme }) => theme.spaces.x8 };
  margin-inline-start: ${ ({ theme }) => theme.spaces.x8 };

  user-select: text;

  ${ ellipsis }
`;

export default {
  'rcx-label': Container,
  'rcx-label__wrapper': Wrapper,
  'rcx-label__text': TextContainer,
  'rcx-label__error': ErrorContainer,
};
