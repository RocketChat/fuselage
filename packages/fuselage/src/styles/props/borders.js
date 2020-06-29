import { memoize } from '../../helpers/memoize';

export const getBorderWidthValue = memoize((propValue) => {
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

  const matches = /^x(\d+)$/.exec(propValue);

  if (matches) {
    const value = parseInt(matches[1], 10);

    if (Number.isInteger(value) && (value === 1 || value === 2 || value === 4)) {
      return `${ value / 16 }rem`;
    }
  }
});

export const getBorderRadiusValue = memoize((propValue) => {
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
    return '9999px';
  }

  const matches = /^x(\d+)$/.exec(propValue);

  if (matches) {
    const value = parseInt(matches[1], 10);

    if (Number.isInteger(value) && (value === 2 || value === 4)) {
      return `${ value / 16 }rem`;
    }
  }
});
