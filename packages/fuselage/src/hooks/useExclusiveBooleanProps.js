import invariant from 'invariant';

/**
 * Hook for asserting mutually exclusive boolean props. Useful for components that use boolean props
 * to choose styling variants.
 *
 * @param {Object} props - the mutually exclusive boolean props
 * @throws {Error} if two or more booleans props are set as true
 */
export const useExclusiveBooleanProps = (props) =>
  invariant(
    Object.values(props).filter(Boolean).length <= 1,
    `Only one property of [${ Object.keys(props).join(', ') }] should be true`
  );
