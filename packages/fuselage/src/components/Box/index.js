import styled, { css } from 'styled-components';

import dimensions from '../../tokens/dimensions';


export const Box = styled.span.attrs(({
  baseClassName,
  className,
  invisible,
  modifiers = {},
  ...props
}) => ({
  className: [
    baseClassName,
    ...Object.entries(modifiers).map(([modifier, value]) =>
      typeof value === 'boolean' && value && `${ baseClassName }--${ modifier }`,
    ),
    className,
  ].filter(Boolean).join(' '),
  ...props,
}))`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: none;
  font-weight: normal;
  appearance: none;
  list-style: none;
  transition: all ${ dimensions.shortTransitionDuration };
  outline: none;

  &[hidden] {
    display: none;
  }

  ${ ({ invisible }) => invisible && css`
    visibility: hidden;

    opacity: 0;
  ` }
`;
