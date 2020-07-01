import React, { createContext, useContext, useMemo } from 'react';

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
