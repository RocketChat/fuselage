import styled from 'styled-components';

import { rebuildClassName } from '../../helpers/rebuildClassName';
import { reset } from '../../mixins/reset';
import { unselectable } from '../../mixins/unselectable';
import theme from './theme';


export const Backdrop = styled.div.attrs(rebuildClassName('rcx-backdrop'))`
  ${ reset }
  ${ unselectable }

  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  background-color: ${ theme.color };
`;
