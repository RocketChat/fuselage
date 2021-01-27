type MemoizableFunction<T, A, R> = (this: T, arg: A) => R;
type MemoizedFunction<T, A, R> = (this: T, arg: A) => R;

const store = new WeakMap<
  MemoizableFunction<unknown, unknown, unknown>,
  Map<unknown, unknown>
>();

const isCachedValue = <A, R>(
  cachedValue: R | undefined,
  arg: A,
  cache: Map<A, R>
): cachedValue is R => cache.has(arg) && cache.get(arg) === cachedValue;

export const memoize = <T, A, R>(
  fn: MemoizableFunction<T, A, R>
): MemoizedFunction<T, A, R> => {
  const cache = new Map<A, R>();

  const memoized: MemoizedFunction<T, A, R> = function (this, arg) {
    const cachedValue = cache.get(arg);

    if (isCachedValue(cachedValue, arg, cache)) {
      return cachedValue;
    }

    const result = fn.call(this, arg);

    cache.set(arg, result);

    return result;
  };

  store.set(memoized as MemoizableFunction<unknown, unknown, unknown>, cache);

  return memoized;
};

export const clear = (
  fn: MemoizableFunction<unknown, unknown, unknown>
): void => {
  const x = store.get(fn);

  if (x) {
    x.clear();
  }
};
