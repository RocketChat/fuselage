const store = new WeakMap();

const getKey = (arg) => arg;

export const memoize = (fn) => {
  const cache = new Map();
  const memoized = function(arg) {
    const key = getKey(arg);

    if (cache.has(key)) {
      return cache.get(key);
    }

    const result = fn.call(this, arg);

    cache.set(arg, result);

    return result;
  };
  store.set(memoized, cache);
  return memoized;
};

export const clear = (fn) => {
  if (store.has(fn)) {
    store.get(fn).clear();
  }
};
