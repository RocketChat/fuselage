import React, { createContext, useContext, useMemo } from 'react';

export const ClassNamesContext = createContext();

export function ClassNamesProvider({ children, value }) {
  const parentValue = useContext(ClassNamesContext);
  const mergedValue = useMemo(() => {
    if (!value) {
      return parentValue;
    }

    return [
      ...value,
      ...parentValue?.classNames || [],
    ];
  }, [value, parentValue]);

  return <ClassNamesContext.Provider children={children} value={mergedValue} />;
}
