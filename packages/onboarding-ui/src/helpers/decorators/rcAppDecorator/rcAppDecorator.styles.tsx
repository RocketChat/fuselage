import styled from '@rocket.chat/styled';

export const RcBodyWrapper = styled('body')`
  position: fixed;
  margin: 0;
`;

export const RcReactRootWrapper = styled('div')`
  position: relative;

  display: flex;
  overflow: visible;
  flex-direction: column;

  width: 100vw;
  height: 100vh;
  padding: 0;

  block-size: -webkit-fill-available;
`;
