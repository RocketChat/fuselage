export const partitionObject = (object, predicate) =>
  Object.keys(object)
    .reduce((result, key) => {
      result[predicate(key, object[key]) ? 0 : 1][key] = object[key];
      return result;
    }, [{}, {}]);
