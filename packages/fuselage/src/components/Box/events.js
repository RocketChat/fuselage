import React, { createContext, useContext, useMemo } from 'react';

import { injectProps } from './transferProps';

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

export const EventPropsConsumer = ({
  children,
  props,
  sourceProps = Object.assign({}, props),
  targetProps = {},
}) => {
  const extraEventProps = useContext(EventPropsContext);

  if (extraEventProps) {
    injectProps(targetProps, extraEventProps);
  }

  const element = children(sourceProps, targetProps);

  if (extraEventProps) {
    return <EventPropsContext.Provider children={element} />;
  }

  return element;
};
