import styled from '@rocket.chat/styled';

const tagStyleProps = ({ color, ...props }: { color: string }) => props;

export const RocketChatTag = styled('div', tagStyleProps)`
  border-radius: 90px;
  margin: 0;
  margin-inline-start: 0.5rem;
  font-size: 8px;
  font-weight: 700;
  line-height: 100%;
  padding: 3px 8px;
  text-align: center;
  background-color: ${(p) => p.color};
  border-width: 0;
  border-style: solid;
  border-color: currentColor;
  outline: none;
`;
