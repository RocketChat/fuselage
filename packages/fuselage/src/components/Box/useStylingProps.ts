import { appendClassName } from '../../helpers/appendClassName';
import { useAtomicStyle } from '../../hooks/useAtomicStyle';
import { useStyle } from '../../hooks/useStyle';

import type { StylingProps } from './stylingProps';
import { extractAtomicStylingProps, extractStylingProps } from './stylingProps';

/**
 * Opt into the experimental atomic styling path (one class per prop) to compare
 * it against the default per-combination path. Run in the browser console then
 * reload:
 *   localStorage.setItem('fuselage-styling', 'atomic')  // atomic (experimental)
 *   localStorage.removeItem('fuselage-styling')         // per-combination (default)
 *
 * Read once at module load so the branch stays stable across renders and the
 * two paths never mix their hooks.
 */
const ATOMIC_STYLING = (() => {
  try {
    return globalThis.localStorage?.getItem('fuselage-styling') === 'atomic';
  } catch {
    return false;
  }
})();

const useAtomicStylingProps = <TProps extends { className?: string }>(
  originalProps: TProps,
): Omit<TProps, keyof StylingProps> => {
  const [props, styles] = extractAtomicStylingProps(originalProps);

  const newClassName = useAtomicStyle(styles);

  if (newClassName) {
    props.className = props.className
      ? appendClassName(props.className, newClassName)
      : newClassName;
  }

  return props;
};

const useMergedStylingProps = <TProps extends { className?: string }>(
  originalProps: TProps,
): Omit<TProps, keyof StylingProps> => {
  const [props, styles] = extractStylingProps(originalProps);

  const newClassName = useStyle(styles, undefined);

  if (newClassName) {
    props.className = props.className
      ? appendClassName(props.className, newClassName)
      : newClassName;
  }

  return props;
};

export const useStylingProps = ATOMIC_STYLING
  ? useAtomicStylingProps
  : useMergedStylingProps;
