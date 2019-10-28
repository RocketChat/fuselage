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

  ${ ({ modifiers }) => modifiers.elevation === 0 && css`
    box-shadow: none;
  ` }

  ${ ({ modifiers }) => modifiers.elevation === 1 && css`
    box-shadow: 0px 0px 12px 0px rgba(47, 52, 61, 0.1);
  ` }

  ${ ({ modifiers }) => modifiers.elevation === 2 && css`
    box-shadow:
      0px 0px 2px 0px rgba(47, 52, 61, 0.08),
      0px 0px 12px 0px rgba(47, 52, 61, 0.12);
  ` }
`;

export default {
  'rcx-tile': Container,
};
