export const prependClassName = (currentClassName, newClassName) => {
  if (Array.isArray(currentClassName)) {
    return [].concat(newClassName, currentClassName);
  }

  if (currentClassName) {
    return `${newClassName} ${currentClassName}`;
  }

  return newClassName;
};
