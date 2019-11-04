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

  ${ (props) => props['mod-wrap'] && css`
    flex-wrap: wrap;
  ` }

  ${ (props) => props['mod-stretch'] && css`
    justify-content: stretch;
  ` }

  ${ (props) => props['mod-vertical'] && css`
    flex-direction: column;

    margin-top: calc(-1 * ${ ({ theme }) => theme.spaces.x8 });
    margin-bottom: calc(-1 * ${ ({ theme }) => theme.spaces.x8 });
  ` }

  ${ (props) => props['mod-vertical'] && props['mod-stretch'] && css`
    align-items: stretch;
  ` }

  ${ (props) => props['mod-align'] === 'start' && css`
    justify-content: flex-start;
  ` }

  ${ (props) => props['mod-align'] === 'end' && css`
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
