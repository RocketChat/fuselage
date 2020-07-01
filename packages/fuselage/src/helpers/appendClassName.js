export const appendClassName = (currentClassName, newClassName) =>
  (currentClassName ? `${ currentClassName } ${ newClassName }` : newClassName);
