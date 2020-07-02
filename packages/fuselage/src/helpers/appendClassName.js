export const appendClassName = (currentClassName, newClassName) => {
  if (currentClassName) {
    return `${ currentClassName } ${ newClassName }`;
  }

  return newClassName;
};
