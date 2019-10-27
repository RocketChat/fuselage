import { css } from 'styled-components';

export default css`
  box-sizing: border-box;
  margin: 0;
  padding: 0;

  list-style-type: none;

  user-select: none;
  transition: all ${ ({ theme }) => theme.transitions.shortDuration };

  border-width: 0;
  border-style: solid;
  border-color: currentColor;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-variant-numeric: tabular-nums;

  &::before,
  &::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;

    list-style-type: none;

    user-select: none;
    transition: all ${ ({ theme }) => theme.transitions.shortDuration };

    border-width: 0;
    border-style: solid;
    border-color: currentColor;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-variant-numeric: tabular-nums;
  }

  ${ ({ invisible }) => invisible && css`
    visibility: hidden;

    opacity: 0;
  ` }
`;
