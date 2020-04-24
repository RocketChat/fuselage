import { css } from '@rocket.chat/css-in-js';

export const mapColorProps = ({
  className,
  color,
  bg,
  backgroundColor = bg,
  opacity,
  ...props
}) => ({
  className: [
    ...className,
    color !== undefined && css`color: ${ color } !important;`,
    backgroundColor !== undefined && css`background-color: ${ backgroundColor } !important;`,
    opacity !== undefined && css`opacity: ${ opacity } !important;`,
  ],
  ...props,
});
