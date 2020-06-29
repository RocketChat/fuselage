import { createPropType } from '../../helpers/createPropType';
import { memoize } from '../../helpers/memoize';

export const getSizeValue = memoize((propValue) => {
  if (propValue === undefined || propValue === null) {
    return;
  }

  if (typeof propValue === 'number') {
    return `${ propValue }px`;
  }

  if (typeof propValue !== 'string') {
    return;
  }

  if (propValue === 'none') {
    return '0px';
  }

  if (propValue === 'full') {
    return '100%';
  }

  if (propValue === 'sw') {
    return '100vw';
  }

  if (propValue === 'sh') {
    return '100vh';
  }

  const matches = /^x(\d+)$/.exec(propValue);

  if (matches) {
    const value = parseInt(matches[1], 10);

    if (Number.isInteger(value) && (value % 4 === 0 || value === 1 || value === 2)) {
      return `${ value / 16 }rem`;
    }
  }
});

export const sizePropType = createPropType(getSizeValue);
