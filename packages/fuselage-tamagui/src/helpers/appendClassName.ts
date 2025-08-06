export const appendClassName = (existingClassName: string | undefined, newClassName: string): string => {
  if (!existingClassName) {
    return newClassName;
  }

  return `${existingClassName} ${newClassName}`;
};
