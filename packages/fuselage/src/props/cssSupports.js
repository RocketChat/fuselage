export const cssSupports = (value) => {
  if (!cssSupports.cache || !cssSupports.cache[value]) {
    cssSupports.cache = cssSupports.cache || [];
    cssSupports.cache[value] = typeof window !== 'undefined' && window.CSS && window.CSS.supports(value);
  }

  return cssSupports.cache[value];
};
