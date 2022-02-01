import { FlexContainer as Flex } from './Flex';
import { FlexItem } from './FlexItem';

export * from './Flex';
export * from './FlexItem';

export default Object.assign(Flex, {
  Container: Flex,
  Item: FlexItem,
});
