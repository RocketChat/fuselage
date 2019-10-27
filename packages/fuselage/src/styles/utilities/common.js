export const toPx = (length) => {
  if (typeof length === 'number') {
    return `${ length }px`;
  }

  return length;
};

export const toEm = (length) => {
  if (typeof length === 'number') {
    return `${ length / 16 }em`;
  }

  return length;
};

export const toRem = (length) => {
  if (typeof length === 'number') {
    return `${ length / 16 }rem`;
  }

  return length;
};

const isCustomPropertiesSupported = window.CSS && CSS.supports('color', 'var(--fake-var)');

export const theme = (varName, value) => (isCustomPropertiesSupported ? `var(--rcx-${ varName }, ${ value })` : value);
