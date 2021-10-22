import styled from '@rocket.chat/styled';

const containerProps = ({ width, ...props }: { width?: string }) => props;

export const LogoContainer = styled('div', containerProps)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
