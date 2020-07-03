const store = new WeakMap<(arg: unknown) => unknown, Map<unknown, unknown>>();

export const memoize = <A, R>(fn: (arg: A) => R): typeof fn => {
  const cache = new Map<A, R>();

  const memoized: typeof fn = function(this: unknown, arg) {
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

export const clear = <A, R>(fn: (arg: A) => R): void => {
  if (store.has(fn)) {
    store.get(fn)!.clear();
  }
};
