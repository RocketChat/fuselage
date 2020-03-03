import React, { createContext, useCallback, useContext } from 'react';

const noProps = {};

const PropsContext = createContext(noProps);

export const useProps = (fn, deps = []) => [
  useContext(PropsContext),
  useCallback(function PropsProvider({ children }) {
    if (!fn) {
      return <PropsContext.Provider children={children} value={noProps} />;
    }

    const ancestorProps = useContext(PropsContext);
    const props = fn(ancestorProps);

    return <PropsContext.Provider children={children} value={props} />;
  }, deps),
];
