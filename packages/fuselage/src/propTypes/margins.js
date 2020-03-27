const none = '0px';
const auto = 'auto';
const x1 = `${ 1 / 16 }rem`;
const x2 = `${ 2 / 16 }rem`;

const specialValues = {
  none,
  auto,
  x1,
  x2,
};

export const getMarginValue = (propValue) => {
  if (propValue === undefined || propValue === null) {
    return;
  }

  if (specialValues[propValue]) {
    return specialValues[propValue];
  }

  if (typeof propValue === 'number') {
    return `${ propValue }px`;
  }

  if (typeof propValue !== 'string') {
    return;
  }

  const matches = /^(neg-)?x(\d+)$/.exec(String(propValue));

  if (matches) {
    const value = (matches[1] === 'neg-' ? -1 : 1) * parseInt(matches[2], 10);

    if (Number.isInteger(value) && value % 4 === 0) {
      return `${ value / 16 }rem`;
    }
  }

  return propValue;
};

export const marginPropType = (props, propName, componentName) => {
  const propValue = props[propName];

  if (propValue === undefined || getMarginValue(propValue) !== undefined) {
    return;
  }

  return new Error(`Invalid value for prop \`${ propName }\` supplied to \`${ componentName }\`: \`${ propValue }\``);
};

marginPropType.isRequired = (props, propName, componentName) => {
  const propValue = props[propName];

  if (propValue !== undefined && getMarginValue(propValue) !== undefined) {
    return;
  }

  return new Error(`Invalid value for prop \`${ propName }\` supplied to \`${ componentName }\`: \`${ propValue }\``);
};
