export const appendClassName = (currentClassName, newClassName) => {
  if (Array.isArray(currentClassName)) {
    return currentClassName.concat(newClassName);
  }

  if (currentClassName) {
    return `${ currentClassName } ${ newClassName }`;
  }

  return newClassName;
};
