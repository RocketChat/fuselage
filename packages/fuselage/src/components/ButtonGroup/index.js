import styled, { css } from 'styled-components';

import { rebuildClassName } from '../../helpers/rebuildClassName';
import { reset } from '../../mixins/reset';
import { Button } from '../Button';
import theme from './theme';


export const ButtonGroup = styled.div.attrs(rebuildClassName('rcx-button-group'))`
  ${ reset }

  display: flex;

  margin: calc(-1 * ${ theme.gutter }) 0 0 calc(-1 * ${ theme.gutter });

  align-items: center;

  flex-flow: row nowrap;
  justify-content: center;

  & > ${ Button } {
    flex: 0 0 auto;

    margin: ${ theme.gutter } 0 0 ${ theme.gutter };
  }

  ${ ({ wrap }) => wrap && css`flex-wrap: wrap;` }

  ${ ({ stretch }) => stretch && css`
    justify-content: stretch;

    & > ${ Button } {
      flex-grow: 1;
    }
  ` }

  ${ ({ vertical }) => vertical && css`
    flex-direction: column;

    ${ ({ stretch }) => stretch && css`align-items: stretch;` }
  ` }

  ${ ({ align }) =>
    (align === 'start' && css`justify-content: flex-start;`)
    || (align === 'end' && css`justify-content: flex-end;`) }
`;
ButtonGroup.displayName = 'ButtonGroup';
