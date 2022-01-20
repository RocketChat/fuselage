const isStringArray = (
  value: string | string[] | undefined
): value is string[] => Array.isArray(value);

export const prependClassName = (
  currentClassName: string | string[] | undefined,
  newClassName: string
) => {
  if (isStringArray(currentClassName)) {
    return [newClassName, ...currentClassName];
  }

  if (currentClassName) {
    return `${newClassName} ${currentClassName}`;
  }

  return newClassName;
};
