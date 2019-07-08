import { createContext } from 'react';


export const SideBarContext = createContext({
  docked: true,
  trigger: () => {},
});
