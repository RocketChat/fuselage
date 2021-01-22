import React, { createContext, useContext } from 'react';

export const SurfaceContext = createContext();

export const Surface = ({ children, type }) => (
  <SurfaceContext.Provider value={type}>{children}</SurfaceContext.Provider>
);

export const useSurfaceType = () => useContext(SurfaceContext);
