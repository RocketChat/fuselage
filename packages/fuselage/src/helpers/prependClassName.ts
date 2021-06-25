export const prependClassName = (
  currentClassName: string | string[] | undefined,
  newClassName: string
) => {
  if (Array.isArray(currentClassName)) {
    return ([] as string[]).concat(newClassName, currentClassName);
  }

  if (currentClassName) {
    return `${newClassName} ${currentClassName}`;
  }

  return newClassName;
};
