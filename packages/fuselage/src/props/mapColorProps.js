import { css } from '@rocket.chat/css-in-js';

import { getColorValue } from '../propTypes/colors';
import { cssSupports } from './cssSupports';

const colorProperty = (value) => {
  const [customProperty, color] = getColorValue(value);

  if (customProperty && cssSupports('(--foo: bar)')) {
    return css`color: var(${ customProperty }, ${ color }) !important;`;
  }

  return css`color: ${ color } !important;`;
};

const backgroundColorProperty = (value) => {
  const [customProperty, color] = getColorValue(value);

  if (customProperty && cssSupports('(--foo: bar)')) {
    return css`background-color: var(${ customProperty }, ${ color }) !important;`;
  }

  return css`background-color: ${ color } !important;`;
};

const opacityProperty = (value) => css`opacity: ${ value } !important;`;

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
    color !== undefined && colorProperty(color),
    backgroundColor !== undefined && backgroundColorProperty(backgroundColor),
    opacity !== undefined && opacityProperty(opacity),
  ],
  ...props,
});
