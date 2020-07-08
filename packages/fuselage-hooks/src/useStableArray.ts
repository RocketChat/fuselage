import { useRef, MutableRefObject } from 'react';

/**
 * @hidden
 */
type Comparator = <T>(a: T, b: T) => boolean;

const hasChanged = <T extends unknown[]>(
  ref: MutableRefObject<T>,
  array: T,
  compare: Comparator,
): boolean => {
  if (!Array.isArray(array)) {
    return true;
  }

  if (ref.current === array) {
    return false;
  }

  if (ref.current.length !== array.length) {
    return true;
  }

  return ref.current.some((a, i) => !compare(a, array[i]));
};

const getCurrentArray = <T extends unknown[]>(
  ref: MutableRefObject<T>,
  array: T,
  compare: Comparator,
): T => {
  if (hasChanged(ref, array, compare)) {
    ref.current = array;
  }

  return ref.current;
};

/**
 * Hook to create an array with stable identity if its elements are equal.
 *
 * @param array - the array
 * @param compare - the equality function that checks if two array elements are
 *        equal
 * @returns the passed array if the elements are NOT equals; the previously
 *          stored array otherwise
 */
export const useStableArray = <T extends unknown[]>(array: T, compare: Comparator = Object.is): T => {
  const ref = useRef(Array.isArray(array) ? array : [] as T);
  return getCurrentArray<T>(ref, array, compare);
};
