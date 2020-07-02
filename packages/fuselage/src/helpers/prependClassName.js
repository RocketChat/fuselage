export const prependClassName = (currentClassName, newClassName) => {
  if (currentClassName) {
    return `${ newClassName } ${ currentClassName }`;
  }

  return newClassName;
};
