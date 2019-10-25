// @flow

export const fromCamelToKebabCase = (camelCaseString: string) =>
  camelCaseString.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();

export const debounce = (fn: (...Array<any>) => any, delay: number) => {
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
