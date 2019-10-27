import styled, { css } from 'styled-components';

import box from '../../styles/utilities/box';
import { Button } from '../Button';

const Container = styled.div`
  ${ box }

  display: flex;

  align-items: center;

  flex-flow: row nowrap;
  justify-content: center;

  margin:
    calc(-1 * ${ ({ theme }) => theme.spaces.x16 })
    calc(-1 * ${ ({ theme }) => theme.spaces.x8 });
  margin-block: calc(-1 * ${ ({ theme }) => theme.spaces.x16 });
  margin-inline: calc(-1 * ${ ({ theme }) => theme.spaces.x8 });

  & > ${ Button.styled } {
    margin:
      ${ ({ theme }) => theme.spaces.x16 }
      ${ ({ theme }) => theme.spaces.x8 };
    margin-block: ${ ({ theme }) => theme.spaces.x16 };
    margin-inline: ${ ({ theme }) => theme.spaces.x8 };
  }

  ${ ({ modifiers }) => modifiers.wrap && css`
    flex-wrap: wrap;
  ` }

  ${ ({ modifiers }) => modifiers.stretch && css`
    justify-content: stretch;

    & > ${ Button.styled } {
      flex-grow: 1;
    }
  ` }

  ${ ({ modifiers }) => modifiers.vertical && css`
    flex-direction: column;

    ${ ({ theme }) => css`
    margin-top: calc(-1 * ${ theme.spaces.x8 });
    margin-bottom: calc(-1 * ${ theme.spaces.x8 });
    ` }

    & > ${ Button.styled } {
      ${ ({ theme }) => css`
      margin-top: ${ theme.spaces.x8 };
      margin-bottom: ${ theme.spaces.x8 };
      ` }
    }
  ` }

  ${ ({ modifiers }) => modifiers.vertical && modifiers.stretch && css`
    align-items: stretch;
  ` }

  ${ ({ modifiers }) => modifiers.align === 'start' && css`
    justify-content: flex-start;
  ` }

  ${ ({ modifiers }) => modifiers.align === 'end' && css`
    justify-content: flex-end;
  ` }
`;

export default {
  'rcx-button-group': Container,
};
