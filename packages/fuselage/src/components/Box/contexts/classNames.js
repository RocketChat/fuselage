import React, { createContext, useContext, useMemo } from 'react';

import { appendClassName } from '../../../helpers/appendClassName';
import { consumeProp } from './transferProps';
import { useClassNameMapping } from '../../../hooks/useClassNameMapping';

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

const reduceClassNames = (className, mapClassName, values) =>
  [].concat(values).reduce((className, value) => {
    if (typeof value === 'function') {
      value = mapClassName(value);
    }

    if (typeof value === 'string') {
      return appendClassName(className, value);
    }

    return className;
  }, className);

export const ClassNamesConsumer = ({
  children,
  props,
  sourceProps,
  targetProps,
}) => {
  const mapClassName = useClassNameMapping(props);
  const extraClassNames = useContext(ClassNamesContext);

  consumeProp(sourceProps, targetProps, 'className', (sourceClassName, set) => {
    if (extraClassNames) {
      set((className) => reduceClassNames(className, mapClassName, extraClassNames));
    }

    set((className) => reduceClassNames(className, mapClassName, sourceClassName));
  });

  const element = children(sourceProps, targetProps);

  if (extraClassNames) {
    return <ClassNamesContext.Provider children={element} />;
  }

  return element;
};
