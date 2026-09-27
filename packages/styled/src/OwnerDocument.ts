import { createContext, useContext } from 'react';

export const OwnerDocument = createContext<{
  document: Document;
}>({
  get document() {
    return window.document;
  },
});

export const useOwnerDocument = () => {
  return useContext(OwnerDocument);
};
