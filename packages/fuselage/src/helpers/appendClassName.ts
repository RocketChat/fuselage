export const appendClassName = (
  currentClassName: string | string[] | undefined,
  newClassName: string
) => {
  if (Array.isArray(currentClassName)) {
    return ([] as string[]).concat(currentClassName, newClassName);
  }

  if (currentClassName) {
    return `${currentClassName} ${newClassName}`;
  }

  return newClassName;
};
