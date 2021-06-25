import { styled } from '@rocket.chat/fuselage';

const filterWrapperProps = ({
  backgroundColor,
  lowerCorner,
  upperCorner,
  ...props
}: {
  backgroundColor: string;
  lowerCorner: string;
  upperCorner: string;
}) => props;

export const Wrapper = styled('div', filterWrapperProps)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: ${(p) => p.backgroundColor};
  background-image: url('data:image/svg+xml,${(p) => p.lowerCorner}'),
    url('data:image/svg+xml,${(p) => p.upperCorner}');
  background-repeat: no-repeat;
  background-position: left bottom, right top;
  background-size: 87px auto, 73px auto;

  @media (min-width: 768px) {
    background-size: 98px auto, 166px auto;
  }

  @media (min-width: 1440px) {
    background-size: auto, auto;
  }
`;
