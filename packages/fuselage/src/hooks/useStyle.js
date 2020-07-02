import { useClassNameMapping } from './useClassNameMapping';

export const useStyle = (cssFn, ...args) => {
  const mapClassName = useClassNameMapping(...args);
  return mapClassName(cssFn);
};
