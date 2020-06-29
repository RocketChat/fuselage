import { createPropType } from '../../helpers/createPropType';
import { memoize } from '../../helpers/memoize';

export const getMarginValue = memoize((propValue) => {
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

  const matches = /^(neg-)?x(\d+)$/.exec(String(propValue));

  if (matches) {
    const value = (matches[1] === 'neg-' ? -1 : 1) * parseInt(matches[2], 10);

    if (Number.isInteger(value) && (Math.abs(value) % 4 === 0 || Math.abs(value) === 1 || Math.abs(value) === 2)) {
      return `${ value / 16 }rem`;
    }
  }
});

export const marginPropType = createPropType(getMarginValue);

export const getPaddingValue = memoize((propValue) => {
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

  const matches = /^x(\d+)$/.exec(String(propValue));

  if (matches) {
    const value = parseInt(matches[1], 10);

    if (Number.isInteger(value) && (value % 4 === 0 || value === 1 || value === 2)) {
      return `${ value / 16 }rem`;
    }
  }
});

export const paddingPropType = createPropType(getPaddingValue);
