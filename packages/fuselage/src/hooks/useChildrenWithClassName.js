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
 * @param {Children} children - the component children
 * @return {Children} - a patched children with `className` prop attached
 */
export const useChildrenWithClassName = (className, children) => useMemo(
  () => flattenChildren(children)
    .map((child) => (isElement(child)
      ? cloneElement(child, {
        className: child.props.className ? `${ child.props.className } ${ className }` : className,
      })
      : child)),
  [className, children]);
