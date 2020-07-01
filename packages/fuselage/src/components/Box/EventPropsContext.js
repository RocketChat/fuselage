import React, { createContext, useContext, useMemo } from 'react';

export const EventPropsContext = createContext();

export function EventPropsProvider({ children, value }) {
  const parentValue = useContext(EventPropsProvider);

  const mergedValue = useMemo(() => {
    if (!value) {
      return parentValue;
    }

    if (!parentValue) {
      return value;
    }

    return Object.assign({}, value, parentValue);
  }, [parentValue, value]);

  return <EventPropsContext.Provider children={children} value={mergedValue} />;
}
