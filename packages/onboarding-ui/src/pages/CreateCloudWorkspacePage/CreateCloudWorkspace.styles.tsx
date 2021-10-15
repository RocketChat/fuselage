import styled from '@rocket.chat/styled';

import { sans } from '../../helpers/tokenFontFamilies';

const filterTitleProps = ({ fontColor, ...props }: { fontColor: string }) =>
  props;

export const Title = styled('div', filterTitleProps)`
  font-size: ${String(40 / 16)}rem;
  font-family: ${sans};
  font-weight: 500;
  line-height: ${String(42 / 16)}rem;
  display: inline-block;
  text-align: left;
  color: ${(p) => p.fontColor};

  @media (min-width: 1440px) {
    text-align: start;
    font-size: ${String(52 / 16)}rem;
    line-height: ${String(62 / 16)}rem;
  }
`;
