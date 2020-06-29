import React, { createContext, useContext, useMemo } from 'react';

export const StylingPropsContext = createContext();

export function StylingPropsProvider({ children, value }) {
  const parentValue = useContext(StylingPropsContext);
  const mergedValue = useMemo(() => {
    if (!value) {
      return parentValue;
    }

    return {
      ...value,
      ...parentValue,
    };
  }, [parentValue, value]);

  return <StylingPropsContext.Provider children={children} value={mergedValue} />;
}

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

export function ClassNamesProvider({ children, value }) {
  const parentValue = useContext(ClassNamesContext);
  const mergedValue = useMemo(() => {
    if (!value) {
      return parentValue;
    }

    return [
      ...value || [],
      ...parentValue?.classNames || [],
    ];
  }, [value, parentValue]);

  return <ClassNamesContext.Provider children={children} value={mergedValue} />;
}
