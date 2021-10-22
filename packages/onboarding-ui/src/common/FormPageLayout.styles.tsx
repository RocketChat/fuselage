import styled from '@rocket.chat/styled';

import { sans } from '../helpers/tokenFontFamilies';

export const Wrapper = styled('div')`
  width: 100%;
  box-sizing: border-box;
  padding: 28px 16px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: stretch;

  @media (min-width: 1440px) {
    flex-flow: row nowrap;
    padding-inline: 0;
    width: 100%;
    max-width: 1152px;
  }
`;

const asideProps = ({
  justifyContent,
  ...props
}: {
  justifyContent?: string;
}) => props;

export const Aside = styled('div', asideProps)`
  box-sizing: border-box;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  padding-block-end: 16px;
  justify-content: ${(p) => (p.justifyContent ? p.justifyContent : '')};
  max-width: 576px;

  @media (min-width: 1440px) {
    align-items: flex-start;
    min-height: 40rem;
    flex: 1 0 50%;
    padding-inline: 32px;
  }
`;

export const Content = styled('div')`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  @media (min-width: 1440px) {
    flex: 1 0 50%;
  }
`;

export const Logo = styled('div')`
  padding-block-end: 28px;

  @media (min-width: 1440px) {
    padding-block-end: 32px;
  }
`;

export const Title = styled('div')`
  padding-block-end: 24px;
  font-size: ${String(40 / 16)}rem;
  font-family: ${sans};
  font-weight: 500;
  line-height: ${String(42 / 16)}rem;
  text-align: center;

  @media (min-width: 1440px) {
    text-align: start;
    font-size: ${String(52 / 16)}rem;
    line-height: ${String(62 / 16)}rem;
  }
`;

export const TitleHighlight = styled(
  'span',
  ({ fontColor, ...props }: { fontColor?: string }) => props
)`
  color: ${(p) => (p.fontColor ? p.fontColor : '#1D74F5')};
  display: inline-block;
`;

const SubTitleFormPageProps = ({
  fontColor,
  fontWeight,
  ...props
}: {
  fontColor?: string;
  fontWeight?: string;
}) => props;

export const Subtitle = styled('div', SubTitleFormPageProps)`
  font-size: ${String(16 / 16)}rem;
  line-height: ${String(22 / 16)}rem;
  font-family: ${sans};
  color: ${(p) => (p.fontColor ? p.fontColor : '')};
  font-weight: ${(p) => (p.fontWeight ? p.fontWeight : '500')};
  text-align: center;

  @media (min-width: 1440px) {
    padding-block-end: 20px;
    text-align: start;
  }
`;

export const Description = styled('div')`
  display: none;
  font-family: ${sans};

  @media (min-width: 1440px) {
    display: unset;
  }
`;
