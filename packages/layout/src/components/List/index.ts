import List from './List.js';
import ListItem from './ListItem.js';

export default Object.assign(List, {
  /**
   * @deprecated prefer using named imports
   * */
  Item: ListItem,
});

export { List, ListItem };
