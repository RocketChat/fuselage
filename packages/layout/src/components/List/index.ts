import List from './List';
import ListItem from './ListItem';

export default Object.assign(List, {
  /**
   * @deprecated prefer using named imports
   * */
  Item: ListItem,
});

export { List, ListItem };
