import styled, { css } from 'styled-components';
import colors from '@rocket.chat/fuselage-tokens/colors';

import box from '../../styles/box';
import { truncate, caption, captionBold } from '../../styles/utilities/typography';
import { StyledIcon } from '../Icon/styles';

export const StyledCallout = styled.div`
  ${ box }

  display: flex;
  margin: 0 0 ${ ({ theme }) => theme.spaces.x24 };
  padding: ${ ({ theme }) => theme.spaces.x16 };
  border-radius: ${ ({ theme }) => theme.borders.radius.x2 };

  ${ ({ type }) =>
    (type === 'info' && css`
      background-color: ${ colors.blue200 };
    `)
    || (type === 'success' && css`
      background-color: ${ colors.green200 };
    `)
    || (type === 'warning' && css`
      background-color: ${ colors.yellow200 };
    `)
    || (type === 'danger' && css`
      background-color: ${ colors.red200 };
    `) }

  & > ${ StyledIcon } {
    font-size: ${ ({ theme }) => theme.sizes.x16 };
  }
`;

export const Wrapper = styled.div`
  ${ box }
  flex: 1 1 0;
  display: flex;
  flex-flow: column nowrap;
  margin: 0 ${ ({ theme }) => theme.spaces.x8 };
  color: ${ ({ theme }) => theme.textColors.default };
  ${ ({ theme }) => caption(theme) }
`;

export const Title = styled.div`
  ${ box }
  ${ ({ theme }) => captionBold(theme) }
  ${ ({ hasChildren, theme }) => hasChildren && css`
    margin-bottom: ${ theme.spaces.x4 };
  ` }
  ${ truncate }
`;
