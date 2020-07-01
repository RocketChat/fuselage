export const prependClassName = (currentClassName, newClassName) => {
  if (Array.isArray(currentClassName)) {
    return [newClassName].concat(currentClassName);
  }

  if (currentClassName) {
    return `${ newClassName } ${ currentClassName }`;
  }

  return newClassName;
};
