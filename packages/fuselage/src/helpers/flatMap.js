export const flatMap = (arr, map = (x) => x) => {
  if (arr.flatMap) {
    return arr.flatMap(map);
  }

  const result = [];

  for (const [index, elem] of arr.entries()) {
    const x = map(elem, index, arr);

    if (Array.isArray(x)) {
      result.push(...x);
    } else {
      result.push(x);
    }
  }

  return result;
};
