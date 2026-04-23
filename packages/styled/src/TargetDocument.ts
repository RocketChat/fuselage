import { createContext, useContext } from 'react';

export const TargetDocument = createContext<{
  document: Document;
}>({ document: window.document });

export const useTargetDocument = () => {
  return useContext(TargetDocument);
};
