import styled, { css } from 'styled-components';

import box from '../../styles/box';
import { paragraph, ellipsis } from '../../styles/utilities/typography';

export const StyledLabel = styled.label`
  ${ box }

  display: inline-flex;

  ${ ({ position }) =>
    (position === 'start' && css`
      align-items: flex-start;
      flex-flow: row nowrap;
    `)
    || (position === 'end' && css`
      align-items: flex-start;
      flex-flow: row-reverse nowrap;
    `)
    || css`
      align-items: stretch;
      flex-flow: column nowrap;
    ` }
`;

export const Wrapper = styled.span`
  ${ box }

  display: flex;
  align-items: center;

  ${ ({ theme }) => paragraph(theme) }

  ${ ({ position, theme }) =>
    (position === 'start' && css`
      flex: 1 0 0;
      align-self: stretch;
      margin-right: ${ theme.spaces.x8 };
    `)
    || (position === 'end' && css`
      flex: 1 0 0;
      align-self: stretch;
      margin-left: ${ theme.spaces.x8 };
    `)
    || css`
      flex: 1 0 auto;
      margin-bottom: ${ theme.spaces.x8 };
    ` }
`;

export const Text = styled.span`
  flex: 1 1 0;
  user-select: text;
  color: ${ ({ theme }) => theme.textColors.default };

  ${ ellipsis }

  ${ ({ disabled, theme }) => disabled && css`
    color: ${ theme.textColors.disabledLabel };
  ` }

  ${ ({ required, theme }) => required && css`
    &::before {
      content: '*\0a0';
      color: ${ theme.textColors.danger };
    }
  ` }
`;

export const Error = styled.span`
  flex: 0 1 auto;
  user-select: text;
  color: ${ ({ theme }) => theme.textColors.danger };
  margin-left: ${ ({ theme }) => theme.spaces.x8 };
  ${ ellipsis }
`;
