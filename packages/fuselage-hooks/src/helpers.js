// @flow

export const debounce = (fn: (...Array<any>) => any, delay: ?number) => {
  if (delay === undefined || delay === null) {
    return fn;
  }

  let timer;
  let callback;

  function f(...args: Array<any>) {
    const context = this;
    clearTimeout(timer);
    callback = () => fn.apply(context, args);
    timer = setTimeout(callback, delay);
    return context;
  }

  f.flush = () => {
    clearTimeout(timer);
    callback();
  };

  f.cancel = () => clearTimeout(timer);

  return f;
};

export const isRunningOnBrowser = typeof window !== 'undefined' && window.document;
