import colors from '@rocket.chat/fuselage-tokens/colors';
import styled, { css } from 'styled-components';

import box from '../../styles/utilities/box';
import { paragraph } from '../../styles/utilities/typography';

const Container = styled.div`
  ${ box }
  ${ ({ theme }) => paragraph(theme) }

  display: block;

  padding: ${ ({ theme }) => theme.spaces.x40 };
  background-color: ${ colors.white };
  border-radius: ${ ({ theme }) => theme.borders.radius.x2 };

  color: ${ ({ theme }) => theme.textColors.default };

  ${ (props) => props['mod-elevation'] === 0 && css`
    box-shadow: none;
  ` }

  ${ (props) => props['mod-elevation'] === 1 && css`
    box-shadow: 0 0 12px 0 rgba(47, 52, 61, 0.1);
  ` }

  ${ (props) => props['mod-elevation'] === 2 && css`
    box-shadow:
      0 0 2px 0 rgba(47, 52, 61, 0.08),
      0 0 12px 0 rgba(47, 52, 61, 0.12);
  ` }
`;

export default {
  'rcx-tile': Container,
};
