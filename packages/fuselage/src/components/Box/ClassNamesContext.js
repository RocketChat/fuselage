import React, { createContext, useContext, useMemo } from 'react';

import { appendClassName } from '../../helpers/appendClassName';

export const ClassNamesContext = createContext();

export function ClassNamesProvider({ children, value }) {
  const parentValue = useContext(ClassNamesContext);

  const mergedValue = useMemo(() => {
    if (!value) {
      return parentValue;
    }

    if (!parentValue) {
      return value;
    }

    return [].concat(value, parentValue);
  }, [value, parentValue]);

  return <ClassNamesContext.Provider children={children} value={mergedValue} />;
}

export const ClassNamesConsumer = ({
  children,
  sourceProps: {
    className,
    ...remainingProps
  },
  props,
  createClassName,
}) => {
  const extraClassNames = useContext(ClassNamesContext);

  if (extraClassNames) {
    props.className = extraClassNames.reduce((className, value) => {
      if (typeof value === 'function') {
        value = createClassName(value);
      }

      if (typeof value === 'string') {
        return appendClassName(className, value);
      }

      return className;
    }, props.className);
  }

  if (className) {
    props.className = [].concat(className).reduce((className, value) => {
      if (typeof value === 'function') {
        value = createClassName(value);
      }

      if (typeof value === 'string') {
        return appendClassName(className, value);
      }

      return className;
    }, props.className);
  }

  if (extraClassNames) {
    return <ClassNamesContext.Provider children={children(props, remainingProps)} />;
  }

  return children(props, remainingProps);
};
