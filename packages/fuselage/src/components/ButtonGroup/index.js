import styled, { css } from 'styled-components';

import { extendClassName } from '../../helpers';
import { normalized } from '../../mixins';
import { Button } from '../Button';
import { spacing } from './theme';


export const ButtonGroup = styled.div.attrs(({
  className,
  ...props
}) => ({
  className: extendClassName('button-group', className, props),
  role: 'group',
}))`
  ${ normalized }

  display: flex;

  margin: calc(-1 * ${ spacing }) 0 0 calc(-1 * ${ spacing });

  align-items: center;

  flex-flow: row nowrap;
  justify-content: center;

  & > ${ Button } {
    flex: 0 0 auto;

    margin: ${ spacing } 0 0 ${ spacing };
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
