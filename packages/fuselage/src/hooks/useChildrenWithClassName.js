import { Children, cloneElement, useMemo } from 'react';
import { isElement, isFragment } from 'react-is';

const flattenChildren = (children) => Children.toArray(children).reduce((elements, element) => {
  if (isFragment(element)) {
    elements.push(...flattenChildren(element.props.children));
  } else if (element) {
    elements.push(element);
  }

  return elements;
}, []);

/**
 * Hook to patch component children with an additional `className` value attached to the `className` prop.
 *
 * @param {string} className - the `className` to be attached to the children
 * @param {*} children - the component children
 * @param {function|undefined} matcher - if present, filters which child elements will be patched
 * @return {*} - a patched children with `className` prop attached
 */
export const useChildrenWithClassName = (className, children, matcher = undefined) => useMemo(
  () => flattenChildren(children)
    .map((child) => (isElement(child) && (matcher ? matcher(child) : true)
      ? cloneElement(child, {
        className: child.props.className ? `${ child.props.className } ${ className }` : className,
      })
      : child)),
  [className, children]);
