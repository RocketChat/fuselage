import { createContext } from 'react';

const DropdownContext = createContext({
  registerItemOrder: () => {},
  getItemState: () => {},
  registerItem: () => {},
  hide: () => {},
});

export default DropdownContext;
