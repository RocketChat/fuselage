import React, { createContext, useContext, memo } from 'react';

export const noProps = {};

export const PropsContext = createContext(noProps);

export const useProps = () => useContext(PropsContext);

function DirectPropsProvider({ children, ...props }) {
  return <PropsContext.Provider children={children} value={props} />;
}

const MemoizedPropsProvider = memo(DirectPropsProvider);

export function PropsProvider({ children, fn, memoized = false }) {
  const props = fn(useContext(PropsContext));

  if (memoized) {
    return <MemoizedPropsProvider children={children} {...props} />;
  }

  return <DirectPropsProvider children={children} {...props} />;
}
