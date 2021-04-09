import { string } from 'prop-types';
import { createContext } from 'react';

type UnregisterItem = () => void;

export type OnDispatchAction = (e: Event) => any;

export type ItemId = string;

export type ItemOrder = Array<string>;

type DropdownContextType = {
  updateItemOrder: (newOrder: ItemOrder) => void;
  getItemState: (id: ItemId) => boolean;
  registerItem: (id: ItemId, action: OnDispatchAction) => UnregisterItem;
  hide: () => void,
}

const DropdownContext = createContext<DropdownContextType>({
  updateItemOrder: () => {},
  getItemState: () => false,
  registerItem: () => () => {},
  hide: () => {},
});

export default DropdownContext;
