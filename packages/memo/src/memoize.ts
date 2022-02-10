type MemoizableFunction<T, A, R> = (this: T, arg: A) => R;
type MemoizedFunction<T, A, R> = (this: T, arg: A) => R;

interface Options {
  maxAge: number;
}

const store = new WeakMap<
  MemoizableFunction<unknown, unknown, unknown>,
  Map<unknown, unknown>
>();

const isCachedValue = <A, R>(
  cachedValue: R | undefined,
  arg: A,
  cache: Map<A, R>
): cachedValue is R => cache.has(arg) && cache.get(arg) === cachedValue;

const noTimedMemoize = <T, A, R>(
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

const timedMemoize = <T, A, R>(
  fn: MemoizableFunction<T, A, R>,
  maxAge: number
): MemoizedFunction<T, A, R> => {
  const cache = new Map<A, R>();
  const cacheTimers = new Map<A, ReturnType<typeof setTimeout>>();

  const memoized: MemoizedFunction<T, A, R> = function (this, arg) {
    const cleanUp = (): void => {
      cache.delete(arg);
      cacheTimers.delete(arg);
    };

    const cachedValue = cache.get(arg);

    // return cachedValue if already cached
    if (isCachedValue(cachedValue, arg, cache)) {
      // reset timer for `arg`
      const oldTimer = cacheTimers.get(arg);
      if (oldTimer) {
        clearTimeout(oldTimer);
      }

      const timer = setTimeout(cleanUp, maxAge);
      cacheTimers.set(arg, timer);

      return cachedValue;
    }

    const result = fn.call(this, arg);

    cache.set(arg, result);

    // set timer for `arg`
    const timer = setTimeout(cleanUp, maxAge);
    cacheTimers.set(arg, timer);

    return result;
  };

  store.set(memoized as MemoizableFunction<unknown, unknown, unknown>, cache);

  return memoized;
};

export const memoize = <T, A, R>(
  fn: MemoizableFunction<T, A, R>,
  _options?: Options
): MemoizedFunction<T, A, R> => {
  if (_options) {
    return timedMemoize(fn, _options.maxAge);
  }
  return noTimedMemoize(fn);
};

export const clear = (
  fn: MemoizedFunction<unknown, unknown, unknown>
): void => {
  const cache = store.get(fn);
  cache?.clear();
};
