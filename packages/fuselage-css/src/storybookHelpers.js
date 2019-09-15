import styled from 'styled-components';


const ArbitraryBox = styled.div`
  background-image: repeating-linear-gradient(
    45deg,
    lightgray,
    lightgray 10px,
    white 10px,
    white 20px
  );
  border: 1px solid lightgray;
`;

export const PseudoInput = styled(ArbitraryBox)`
  width: 100%;
  min-width: 6rem;
  height: 2rem;
`;
