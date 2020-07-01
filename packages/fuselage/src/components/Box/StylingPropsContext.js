import React, { createContext, useContext, useMemo } from 'react';

export const StylingPropsContext = createContext();

export function StylingPropsProvider({ children, value }) {
  const parentValue = useContext(StylingPropsContext);

  const mergedValue = useMemo(() => {
    if (!value) {
      return parentValue;
    }

    if (!parentValue) {
      return value;
    }

    return Object.assign({}, value, parentValue);
  }, [parentValue, value]);

  return <StylingPropsContext.Provider children={children} value={mergedValue} />;
}
