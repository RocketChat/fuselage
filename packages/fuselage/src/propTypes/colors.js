import warning from 'warning';
import tokenColors from '@rocket.chat/fuselage-tokens/colors';

const mapTypeToPrefix = {
  neutral: 'n',
  primary: 'b',
  info: 'b',
  success: 'g',
  warning: 'y',
  danger: 'r',
};

const getPaletteColor = (type, grade, alpha) => {
  warning(grade % 100 === 0 && grade / 100 >= 1 && grade / 100 <= 9, 'invalid color grade');
  warning(alpha === undefined || (alpha >= 0 && alpha <= 1), 'invalid color alpha');

  const prefix = mapTypeToPrefix[type];
  warning(!!prefix, 'invalid color type');

  const baseColor = tokenColors[`${ prefix }${ grade }`];

  warning(!!baseColor, 'invalid color reference');

  const matches = /^#([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/.exec(baseColor);

  warning(!!matches, 'invalid color token format');

  if (alpha !== undefined) {
    const [, r, g, b] = matches;
    return [
      `--rcx-color-${ type }-${ grade }-${ (alpha * 100).toFixed(0) }`,
      `rgba(${ parseInt(r, 16) }, ${ parseInt(g, 16) }, ${ parseInt(b, 16) }, ${ alpha * 100 }%)`,
    ];
  }

  return [`--rcx-color-${ type }-${ grade }`, baseColor];
};

const foregroundColors = {
  default: tokenColors.n800,
  info: tokenColors.n700,
  hint: tokenColors.n600,
  disabled: tokenColors.n400,
  alternative: 'white',
  primary: tokenColors.b500,
  success: tokenColors.g500,
  danger: tokenColors.r500,
  warning: tokenColors.y700,
  link: tokenColors.b500,
  'visited-link': tokenColors.p500,
  'active-link': tokenColors.r500,
};

const getForegroundColor = (type) => {
  const color = foregroundColors[type];
  warning(!!color, 'invalid foreground color');

  return [`--rcx-color-foreground-${ type }`, color];
};

const paletteColorRegex = /^(neutral|primary|info|success|warning|danger)-(\d+)(-(\d+))?$/;

export const getColorValue = (propValue) => {
  if (propValue === undefined || propValue === null || typeof propValue !== 'string') {
    return;
  }

  const paletteMatches = paletteColorRegex.exec(String(propValue));

  if (paletteMatches) {
    const [, type, gradeString, , alphaString] = paletteMatches;
    const grade = parseInt(gradeString, 10);
    const alpha = alphaString !== undefined ? parseInt(alphaString, 10) / 100 : undefined;
    return getPaletteColor(type, grade, alpha);
  }

  if (propValue === 'surface') {
    return ['--rcx-color-surface', 'white'];
  }

  if (foregroundColors[String(propValue)]) {
    return getForegroundColor(String(propValue));
  }

  return [undefined, propValue];
};

export const colorPropType = (props, propName, componentName) => {
  const propValue = props[propName];

  if (propValue === undefined || getColorValue(propValue) !== undefined) {
    return;
  }

  return new Error(`Invalid value for prop \`${ propName }\` supplied to \`${ componentName }\`: \`${ propValue }\``);
};

colorPropType.isRequired = (props, propName, componentName) => {
  const propValue = props[propName];

  if (propValue !== undefined && getColorValue(propValue) !== undefined) {
    return;
  }

  return new Error(`Invalid value for prop \`${ propName }\` supplied to \`${ componentName }\`: \`${ propValue }\``);
};
