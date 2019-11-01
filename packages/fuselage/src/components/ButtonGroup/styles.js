import styled, { css } from 'styled-components';

import box from '../../styles/utilities/box';

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

  ${ ({ modifiers }) => modifiers.wrap && css`
    flex-wrap: wrap;
  ` }

  ${ ({ modifiers }) => modifiers.stretch && css`
    justify-content: stretch;
  ` }

  ${ ({ modifiers }) => modifiers.vertical && css`
    flex-direction: column;

    margin-top: calc(-1 * ${ ({ theme }) => theme.spaces.x8 });
    margin-bottom: calc(-1 * ${ ({ theme }) => theme.spaces.x8 });
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

const ItemContainer = styled.div`
  ${ box }

  display: flex;
  flex-flow: column nowrap;
  align-items: stretch;
  justify-content: center;

  margin:
    ${ ({ theme }) => theme.spaces.x16 }
    ${ ({ theme }) => theme.spaces.x8 };
  margin-block: ${ ({ theme }) => theme.spaces.x16 };
  margin-inline: ${ ({ theme }) => theme.spaces.x8 };

  ${ (props) => props['mod-stretch'] && css`
    flex-grow: 1;
  ` }

  ${ (props) => props['mod-vertical'] && css`
    margin-top: ${ ({ theme }) => theme.spaces.x8 };
    margin-bottom: ${ ({ theme }) => theme.spaces.x8 };
  ` }
`;

export default {
  'rcx-button-group': Container,
  'rcx-button-group__item': ItemContainer,
};
