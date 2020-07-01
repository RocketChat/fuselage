export const prependClassName = (currentClassName, newClassName) =>
  (currentClassName ? `${ newClassName } ${ currentClassName }` : newClassName);
