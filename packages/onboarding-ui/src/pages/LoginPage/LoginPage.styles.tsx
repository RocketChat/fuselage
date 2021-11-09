import styled from '@rocket.chat/styled';

export const Wrapper = styled('div')`
  width: 100%;
  box-sizing: border-box;
  padding: 2rem 1rem;
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
