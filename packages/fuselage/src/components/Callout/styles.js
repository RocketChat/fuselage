import styled, { css } from 'styled-components';
import colors from '@rocket.chat/fuselage-tokens/colors';

import box from '../../styles/utilities/box';
import { caption, captionBold, truncate } from '../../styles/utilities/typography';

const Container = styled.section`
  ${ box }

  display: flex;

  margin: 0 0 ${ ({ theme }) => theme.spaces.x24 };
  margin-block-start: 0;
  margin-block-end: ${ ({ theme }) => theme.spaces.x24 };
  margin-inline: 0;

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
`;

const Wrapper = styled.div`
  ${ box }

  display: flex;

  overflow: hidden;
  flex: 1 1 0;

  margin: 0 ${ ({ theme }) => theme.spaces.x8 };
  margin-block: 0;
  margin-inline: ${ ({ theme }) => theme.spaces.x8 };

  color: ${ ({ theme }) => theme.textColors.default };
  flex-flow: column nowrap;

  ${ ({ theme }) => caption(theme) }
`;

const Title = styled.h1`
  ${ box }

  ${ ({ theme }) => caption(theme) }
  ${ ({ theme }) => captionBold(theme) }

  ${ ({ modifiers, theme }) => modifiers.hasChildren && css`
    margin-bottom: ${ theme.spaces.x4 };
  ` }
  ${ truncate }
`;

export default {
  'rcx-callout': Container,
  'rcx-callout__wrapper': Wrapper,
  'rcx-callout__title': Title,
};
