import styled, { css } from 'styled-components';


export const Box = styled.span`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: none;
  font-weight: normal;
  appearance: none;
  list-style: none;
  transition: all 230ms;

  &[hidden] {
    display: none;
  }

  ${ ({ invisible }) => invisible && css`
    visibility: hidden;

    opacity: 0;
  ` }
`;
