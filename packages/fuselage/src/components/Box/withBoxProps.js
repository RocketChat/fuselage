import React, { forwardRef, memo, createElement } from 'react';

import { appendClassName } from '../../helpers/appendClassName';
import { useClassNameMapping } from '../../hooks/useClassNameMapping';
import { stylingPropsStyles, stylingPropsAliases } from './stylingProps';
import { useBoxTransform, BoxTransforms } from './transforms';

export const withBoxProps = (component) => {
  const enhancedComponent = memo(forwardRef((props, ref) => {
    const transformFn = useBoxTransform();
    const mapClassName = useClassNameMapping(props);

    let mutableProps = Object.assign(ref ? { ref } : {}, props);

    if (transformFn) {
      mutableProps = transformFn(mutableProps);
    }

    Object.entries(mutableProps).forEach(([key, value]) => {
      if (key === 'htmlSize') {
        if (value !== undefined) {
          mutableProps.size = value;
        }

        delete mutableProps[key];
        return;
      }

      if (stylingPropsAliases[key]) {
        if (value !== undefined) {
          const effectiveKey = stylingPropsAliases[key];
          const newClassName = mapClassName(stylingPropsStyles[effectiveKey](value));
          mutableProps.className = appendClassName(mutableProps.className, newClassName);
        }

        delete mutableProps[key];
        return;
      }

      if (stylingPropsStyles[key]) {
        if (value !== undefined) {
          const newClassName = mapClassName(stylingPropsStyles[key](value));
          mutableProps.className = appendClassName(mutableProps.className, newClassName);
        }

        delete mutableProps[key];
      }
    });

    if (mutableProps.className) {
      mutableProps.className = [].concat(mutableProps.className).reduce((className, value) => {
        if (typeof value === 'function') {
          value = mapClassName(value);
        }

        if (typeof value === 'string') {
          return appendClassName(className, value);
        }

        return className;
      }, '');
    }

    const element = createElement(component, mutableProps);

    if (transformFn) {
      return <BoxTransforms.Provider children={element} />;
    }

    return element;
  }));

  enhancedComponent.displayName = `WithBoxProps(${ component.displayName || component.name || 'Component' })`;

  return enhancedComponent;
};
