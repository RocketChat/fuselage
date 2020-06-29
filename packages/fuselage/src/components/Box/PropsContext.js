import React, { createContext, useContext, useMemo } from 'react';

export const PropsContext = createContext();

export const usePropsTransform = () => useContext(PropsContext);

export function PropsProvider({ children, fn }) {
  const parentFn = useContext(PropsContext);
  const newFn = useMemo(() => (parentFn ? (props) => parentFn(fn(props)) : fn), [fn, parentFn]);

  return <PropsContext.Provider children={children} value={newFn} />;
}
