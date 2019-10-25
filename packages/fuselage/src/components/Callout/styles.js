import styled, { css } from 'styled-components';
import colors from '@rocket.chat/fuselage-tokens/colors';

import box from '../../styles/box';
import { caption, captionBold, truncate } from '../../styles/utilities/typography';
import { Icon } from '../Icon';

const container = styled.section`
  ${ box }

  display: flex;

  margin: 0 0 ${ ({ theme }) => theme.spaces.x24 };
  padding: ${ ({ theme }) => theme.spaces.x16 };

  border-radius: ${ ({ theme }) => theme.borders.radius.x2 };

  ${ ({ modifiers }) => modifiers.type === 'info' && css`
    background-color: ${ colors.blue200 };
  ` }

  ${ ({ modifiers }) => modifiers.type === 'success' && css`
    background-color: ${ colors.green200 };
  ` }

  ${ ({ modifiers }) => modifiers.type === 'warning' && css`
    background-color: ${ colors.yellow200 };
  ` }

  ${ ({ modifiers }) => modifiers.type === 'danger' && css`
    background-color: ${ colors.red200 };
  ` }

  & > ${ Icon.styled } {
    font-size: ${ ({ theme }) => theme.sizes.x16 };
  }
`;

const wrapper = styled.div`
  ${ box }

  display: flex;

  overflow: hidden;
  flex: 1 1 0;

  margin: 0 ${ ({ theme }) => theme.spaces.x8 };

  color: ${ ({ theme }) => theme.textColors.default };
  flex-flow: column nowrap;

  ${ ({ theme }) => caption(theme) }
`;

const title = styled.h1`
  ${ box }

  ${ ({ theme }) => caption(theme) }
  ${ ({ theme }) => captionBold(theme) }

  ${ ({ modifiers, theme }) => modifiers.hasChildren && css`
    margin-bottom: ${ theme.spaces.x4 };
  ` }
  ${ truncate }
`;

export default {
  'rcx-callout': container,
  'rcx-callout__wrapper': wrapper,
  'rcx-callout__title': title,
};
