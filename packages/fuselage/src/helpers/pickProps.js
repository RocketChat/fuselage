import { partitionObject } from './partitionObject';

export const pickProps = (props, propNames) =>
  partitionObject(props, (name) => propNames.includes(name));
