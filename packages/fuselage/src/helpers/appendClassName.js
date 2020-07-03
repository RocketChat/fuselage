export const appendClassName = (currentClassName, newClassName) => {
  if (Array.isArray(currentClassName)) {
    return [].concat(currentClassName, newClassName);
  }

  if (currentClassName) {
    return `${ currentClassName } ${ newClassName }`;
  }

  return newClassName;
};
