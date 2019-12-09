import React, { createContext, useCallback, useContext } from 'react';

const PropsContext = createContext({});

export const useProps = (fn = () => ({})) => {
  const ancestorProps = useContext(PropsContext);

  return [
    ancestorProps,
    useCallback(({ children }) =>
      <PropsContext.Provider children={children} value={fn(ancestorProps)} />, [ancestorProps]),
  ];
};
