import React, { createContext, useContext, useMemo } from 'react';

import { appendClassName } from '../../helpers/appendClassName';
import { stylingPropsStyles, stylingPropsAliases } from './stylingProps';

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

export const StylingPropsConsumer = ({
  sourceProps: {
    htmlSize,
    ...sourceProps
  },
  props,
  createClassName,
  children,
}) => {
  const extraStylingProps = useContext(StylingPropsContext);

  const stylingProps = {};

  if (extraStylingProps) {
    Object.assign(stylingProps, extraStylingProps);
  }

  const remainingProps = {};

  for (const [key, value] of Object.entries(sourceProps)) {
    if (stylingPropsAliases[key]) {
      if (value !== undefined) {
        const effectiveKey = stylingPropsAliases[key];
        stylingProps[effectiveKey] = value;
      }
      continue;
    }

    if (stylingPropsStyles[key]) {
      if (value !== undefined) {
        stylingProps[key] = value;
      }
      continue;
    }

    remainingProps[key] = value;
  }

  for (const [key, value] of Object.entries(stylingProps)) {
    if (value !== undefined) {
      const className = createClassName(stylingPropsStyles[key](value));
      props.className = appendClassName(props.className, className);
    }
  }

  if (htmlSize !== undefined) {
    remainingProps.size = htmlSize;
  }

  if (extraStylingProps) {
    return <StylingPropsContext.Provider children={children(props, remainingProps)} />;
  }

  return children(props, remainingProps);
};
