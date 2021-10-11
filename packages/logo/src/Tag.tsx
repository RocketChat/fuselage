import styled from '@rocket.chat/styled';

const tagStyleProps = ({ color, ...props }: { color: string }) => props;

export const Tag = styled('div', tagStyleProps)`
  width: 3rem;
  height: 0.7rem;
  border-radius: 9999px;
  margin: 0;
  margin-left: 0.5rem;
  font-size: 8px;
  font-weight: 600;
  letter-spacing: 0.0125rem;
  line-height: 0.75rem;
  padding: 0px;
  text-align: center;
  background-color: #f5455c;
  padding: 0;
  border-width: 0;
  border-style: solid;
  border-color: currentColor;
  outline: none;
`;
