export const createPropType = (getValue) => {
  const propType = (props, propName, componentName) => {
    const propValue = props[propName];

    if (propValue === undefined || getValue(propValue) !== undefined) {
      return;
    }

    return new Error(
      `Invalid value for prop \`${propName}\` supplied to \`${componentName}\`: \`${propValue}\``
    );
  };

  propType.isRequired = (props, propName, componentName) => {
    const propValue = props[propName];

    if (propValue !== undefined && getValue(propValue) !== undefined) {
      return;
    }

    return new Error(
      `Invalid value for prop \`${propName}\` supplied to \`${componentName}\`: \`${propValue}\``
    );
  };

  return propType;
};
