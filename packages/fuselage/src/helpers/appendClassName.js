import { cloneElement } from 'react';

export const appendClassName = (element, className) => {
  if (!element.props.className) {
    return cloneElement(element, { className });
  }

  if (Array.isArray(element.props.className)) {
    const classList = [...element.props.className, className];
    return cloneElement(element, { className: classList });
  }

  if (typeof element.props.className === 'string') {
    return cloneElement(element, { className: `${ element.props.className } ${ className }` });
  }

  return element;
};
