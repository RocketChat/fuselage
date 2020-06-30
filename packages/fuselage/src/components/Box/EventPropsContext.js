import React, { createContext, useContext, useMemo } from 'react';

export const EventPropsContext = createContext();

export function EventPropsProvider({ children, value }) {
  const parentValue = useContext(EventPropsProvider);
  const mergedValue = useMemo(() => {
    if (!value) {
      return parentValue;
    }

    return {
      ...value,
      ...parentValue,
    };
  }, [parentValue, value]);

  return <EventPropsContext.Provider children={children} value={mergedValue} />;
}

export const ClassNamesContext = createContext();
