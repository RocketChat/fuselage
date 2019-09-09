export const toREM = (length) => {
  if (typeof length === 'number') {
    return `${ length / 16 }rem`;
  }

  return length;
};
