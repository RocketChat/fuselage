import FlexContainer from './FlexContainer';
import FlexItem from './FlexItem';

/**
 * @public
 * @deprecated prefer using the intrinsic style of the container component or the styling props of `Box`
 */
const Flex = {
  Container: FlexContainer,
  Item: FlexItem,
} as const;

export default Flex;
