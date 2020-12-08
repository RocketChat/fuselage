export const appendClassName = (currentClassName, newClassName) => {
  if (
    Array.isArray(currentClassName) ||
    typeof currentClassName === 'function' ||
    typeof newClassName === 'function'
  ) {
    return [].concat(currentClassName, newClassName);
  }

  if (currentClassName) {
    return `${currentClassName} ${newClassName}`;
  }

  return newClassName;
};
