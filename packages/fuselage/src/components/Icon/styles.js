import styled, { css } from 'styled-components';

import box from '../../styles/utilities/box';

const Container = styled.i`
  ${ box }

  display: inline-block;

  vertical-align: middle;

  font-family: 'RocketChat';
  font-weight: 400;
  font-style: normal;
  font-variant: normal;
  line-height: 1;
  text-rendering: auto;

  ${ (props) => props['mod-size'] && css`
    font-size: ${ ({ theme }) => theme.sizes[props['mod-size']] };
  ` }

  ${ (props) => props['mod-x44'] && css`
    font-size: ${ ({ theme }) => theme.sizes.x44 };
  ` }

  ${ (props) => props['mod-x40'] && css`
    font-size: ${ ({ theme }) => theme.sizes.x40 };
  ` }

  ${ (props) => props['mod-x32'] && css`
    font-size: ${ ({ theme }) => theme.sizes.x32 };
  ` }

  ${ (props) => props['mod-x24'] && css`
    font-size: ${ ({ theme }) => theme.sizes.x24 };
  ` }

  ${ (props) => props['mod-x20'] && css`
    font-size: ${ ({ theme }) => theme.sizes.x20 };
  ` }

  ${ (props) => props['mod-x16'] && css`
    font-size: ${ ({ theme }) => theme.sizes.x16 };
  ` }

  ${ (props) => props['mod-x8'] && css`
    font-size: ${ ({ theme }) => theme.sizes.x8 };
  ` }

  ${ (props) => props['mod-x4'] && css`
    font-size: ${ ({ theme }) => theme.sizes.x4 };
  ` }

  ${ (props) => props['mod-x2'] && css`
    font-size: ${ ({ theme }) => theme.sizes.x2 };
  ` }
`;

export default {
  'rcx-icon': Container,
};
