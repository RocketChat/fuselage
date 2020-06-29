export const partitionArray = (array, predicate) =>
  array.reduce((result, value) => {
    result[predicate(value) ? 0 : 1].push(value);
    return result;
  }, [[], []]);
