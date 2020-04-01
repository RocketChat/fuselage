const none = '0px';
const full = '100%';
const sw = '100vw';
const sh = '100vh';
const x1 = `${ 1 / 16 }rem`;
const x2 = `${ 2 / 16 }rem`;

const specialValues = {
  none,
  full,
  sw,
  sh,
  x1,
  x2,
};

export const getSizeValue = (propValue) => {
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

  const matches = /^x(\d+)$/.exec(propValue);

  if (matches) {
    const value = parseInt(matches[1], 10);

    if (Number.isInteger(value) && value % 4 === 0) {
      return `${ value / 16 }rem`;
    }
  }

  return propValue;
};

export const sizePropType = (props, propName, componentName) => {
  const propValue = props[propName];

  if (propValue === undefined || getSizeValue(propValue) !== undefined) {
    return;
  }

  return new Error(`Invalid value for prop \`${ propName }\` supplied to \`${ componentName }\`: \`${ propValue }\``);
};

sizePropType.isRequired = (props, propName, componentName) => {
  const propValue = props[propName];

  if (propValue !== undefined && getSizeValue(propValue) !== undefined) {
    return;
  }

  return new Error(`Invalid value for prop \`${ propName }\` supplied to \`${ componentName }\`: \`${ propValue }\``);
};
