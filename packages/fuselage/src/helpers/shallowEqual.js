const isObject = (value) => typeof value === 'object' && value !== null;

const compareObjects = (a, b) => {
  const keysA = Object.keys(a);
  const keysB = Object.keys(b);

  if (keysA.length !== keysB.length) {
    return false;
  }

  return !keysA.some((key) => !b.hasOwnProperty(key) || a[key] !== b[key]);
};

export const shallowEqual = (a, b) => {
  if (a === b) {
    return true;
  }

  if ([a, b].every(Number.isNaN)) {
    return true;
  }

  if (![a, b].every(isObject)) {
    return false;
  }

  return compareObjects(a, b);
};
