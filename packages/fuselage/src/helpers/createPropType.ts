import { Requireable, Validator } from 'prop-types';

export const createPropType = <T>(
  getValue: (propValue: unknown) => unknown
): Requireable<T> => {
  const propType: Validator<T> = (props, propName, componentName) => {
    const propValue = props[propName];

    if (propValue === undefined || getValue(propValue) !== undefined) {
      return null;
    }

    return new Error(
      `Invalid value for prop \`${propName}\` supplied to \`${componentName}\`: \`${propValue}\``
    );
  };

  const isRequired: Validator<NonNullable<T>> = (
    props,
    propName,
    componentName
  ) => {
    const propValue = props[propName];

    if (propValue !== undefined && getValue(propValue) !== undefined) {
      return null;
    }

    return new Error(
      `Invalid value for prop \`${propName}\` supplied to \`${componentName}\`: \`${propValue}\``
    );
  };

  return Object.assign(propType, { isRequired });
};
