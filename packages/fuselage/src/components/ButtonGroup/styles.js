import { css } from 'styled-components';

import box from '../../styles/box';
import { Button } from '../Button';

const container = css`
  ${ box }

  display: flex;

  align-items: center;

  flex-flow: row nowrap;
  justify-content: center;

  ${ ({ theme }) => css`
  margin:
    calc(-1 * ${ theme.spaces.x16 })
    calc(-1 * ${ theme.spaces.x8 });
  ` }

  & > ${ Button.styled } {
    ${ ({ theme }) => css`
    margin:
      ${ theme.spaces.x16 }
      ${ theme.spaces.x8 };
    ` }
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
  'rcx-button-group': container,
};
