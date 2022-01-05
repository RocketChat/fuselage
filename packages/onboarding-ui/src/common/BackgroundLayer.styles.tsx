import styled from '@rocket.chat/styled';

const filterWrapperProps = ({
  backgroundColor,
  color,
  backgroundImage,
  ...props
}: {
  backgroundColor: string;
  color: string;
  backgroundImage: string;
}) => props;

export const Wrapper = styled('div', filterWrapperProps)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
  background-image: url('data:image/svg+xml,${(p) => p.backgroundImage}');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  color: ${(p) => p.color};
`;
