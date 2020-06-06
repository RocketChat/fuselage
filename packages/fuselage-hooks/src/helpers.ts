export type DebounceableFunction = (...args: any[]) => unknown;
export type DebouncedFunction = ((...args: any[]) => void) & {
  flush: () => void;
  cancel: () => void;
};

export const debounce = (fn: DebounceableFunction, delay: number): DebouncedFunction => {
  let timer: ReturnType<typeof setTimeout>;
  let callback: () => void;

  function f<T>(this: T, ...args: any[]): T {
    clearTimeout(timer);
    callback = (): void => fn.apply(this, args);
    timer = setTimeout(callback, delay);
    return this;
  }

  f.flush = (): void => {
    clearTimeout(timer);
    callback();
  };

  f.cancel = (): void => {
    clearTimeout(timer);
  };

  return f;
};

export const isRunningOnBrowser = typeof window !== 'undefined' && window.document;
