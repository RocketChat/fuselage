import React, { createContext, useContext, memo } from 'react';

export const noProps = {};

export const PropsContext = createContext(noProps);

export const useProps = () => useContext(PropsContext);

const MemoizedPropsProvider = memo(function MemoizedProps({ children, ...props }) {
  return <PropsContext.Provider children={children} value={props} />;
});

export function PropsProvider({ children, fn, memoized = false }) {
  if (!fn) {
    return <PropsContext.Provider children={children} value={noProps} />;
  }

  const props = fn(useContext(PropsContext));

  if (memoized) {
    return <MemoizedPropsProvider children={children} {...props} />;
  }

  return <PropsContext.Provider children={children} value={props} />;
}
