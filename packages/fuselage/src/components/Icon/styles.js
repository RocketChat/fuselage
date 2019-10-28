import { css } from 'styled-components';

import box from '../../styles/utilities/box';

const container = css`
  ${ box }

  display: inline-block;

  vertical-align: middle;

  font-family: 'RocketChat';
  font-weight: 400;
  font-style: normal;
  font-variant: normal;
  line-height: 1;
  text-rendering: auto;
`;

export default {
  'rcx-icon': container,
};
