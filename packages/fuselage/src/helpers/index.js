import { css } from 'styled-components';


export const fromCamelToKebabCase = (camelCaseString) =>
  camelCaseString.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();

export const toPX = (length) => {
  if (typeof length === 'number') {
    return `${ length }px`;
  }

  return length;
};

export const toREM = (length) => {
  if (typeof length === 'number') {
    return `${ length / 16 }rem`;
  }

  return length;
};

export const extendClassName = (baseClassName, className, props) =>
  [
    `rcx-${ baseClassName }`,
    ...Object.entries(props).map(([modifier, value]) =>
      typeof value === 'boolean' && value && `rcx-${ baseClassName }--${ modifier }`,
    ),
    className,
  ].filter(Boolean).join(' ');

export const rebuildClassName = (baseClassName) => ({
  className,
  ...props
}) => ({
  className: extendClassName(baseClassName, className, props),
  ...props,
});

export const isIE11 = !!window.MSInputMethodContext && !!document.documentMode;

const defaultTheme = {};

const getThemeValue = (varName, fallbackValue, { rem } = {}) => {
  const get = (fallbackValue) => ({ theme }) => {
    if (theme[varName]) {
      return theme[varName];
    }

    if (!defaultTheme[varName]) {
      defaultTheme[varName] = fallbackValue;
    }

    return defaultTheme[varName];
  };

  if (rem) {
    const getBoth = get({ unitless: fallbackValue, rem: isIE11 ? toPX(fallbackValue) : toREM(fallbackValue) });
    const withUnit = (props) => getBoth(props).rem;
    const unitless = (props) => getBoth(props).unitless;

    return Object.assign(withUnit, { unitless });
  }

  return get(fallbackValue);
};

export const theme = (varName, ...args) => {
  if (isIE11) {
    return getThemeValue(varName, ...args);
  }

  return css(['var(--rcx-', ', ', ')'], varName, getThemeValue(varName, ...args));
};

// Helper to replace calc() calls in CSS transform property
export const calc = (expr, args) => (props) => {
  const mappedArgs = args.map((arg) => {
    if (arg.unitless) {
      return arg.unitless(props);
    }

    if (arg.call) {
      return arg.call(null, props);
    }

    return arg;
  });

  return toPX(expr(...mappedArgs));
};

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
