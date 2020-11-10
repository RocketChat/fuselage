const store = new WeakMap();

export const memoize = (fn) => {
  const cache = new Map();

  const memoized = function (arg) {
    if (cache.has(arg)) {
      return cache.get(arg);
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
