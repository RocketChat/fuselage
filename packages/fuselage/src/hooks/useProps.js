import React, { createContext, useCallback, useContext } from 'react';

const PropsContext = createContext({});

export const useProps = (fn = () => ({}), deps = []) => [
  useContext(PropsContext),
  useCallback(function PropsProvider({ children }) {
    const ancestorProps = useContext(PropsContext);
    return <PropsContext.Provider children={children} value={fn(ancestorProps)} />;
  }, deps),
];
