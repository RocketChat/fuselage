export const length = (value: string): string | undefined => {
  const xRegExp = /^(neg-|-)?x(\d+)$/;
  const matches = xRegExp.exec(value);
  if (!matches) {
    return undefined;
  }

  const [, negativeMark, measureInPixelsAsString] = matches;
  const measureInPixels =
    (negativeMark ? -1 : 1) * parseInt(measureInPixelsAsString, 10);
  return `${measureInPixels}px`;
};
