import styled from '@rocket.chat/styled';

const containerProps = ({ width, ...props }: { width?: string }) => props;

export const Container = styled('div', containerProps)`
  width: ${(p) => (p.width ? p.width : '14')}rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
