export const prependClassName = (currentClassName, newClassName) => {
  if (
    Array.isArray(currentClassName) ||
    typeof currentClassName === 'function' ||
    typeof newClassName === 'function'
  ) {
    return [].concat(newClassName, currentClassName);
  }

  if (currentClassName) {
    return `${newClassName} ${currentClassName}`;
  }

  return newClassName;
};
