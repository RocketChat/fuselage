import styled, { css } from 'styled-components';


const mapProps = ({
  baseClassName,
  className,
  ...props
}) => ({
  className: [
    baseClassName,
    ...Object.entries(props).map(([modifier, value]) =>
      typeof value === 'boolean' && value && `${ baseClassName }--${ modifier }`,
    ),
    className,
  ].filter(Boolean).join(' '),
  ...props,
});

export const Box = styled.span.attrs(mapProps)`
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
