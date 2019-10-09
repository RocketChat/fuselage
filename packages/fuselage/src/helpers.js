export const fromCamelToKebabCase = (camelCaseString) =>
  camelCaseString.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();

export const debounce = (fn, delay) => {
  let timer;
  let callback;

  function f(...args) {
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
