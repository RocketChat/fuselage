import { createElement } from 'react';

import { useStyleSheet } from '../../hooks/useStyleSheet';
import { useStylingProps } from './stylingProps';

export const withBoxStyling = (component) => {
  const render = (props) => {
    if (typeof component === 'function') {
      return component(props);
    }

    return createElement(component, props);
  };

  const WithBoxStyling = (props) => {
    useStyleSheet();
    props = useStylingProps(props);
    return render(props);
  };

  if (process.env.NODE_ENV !== 'production') {
    WithBoxStyling.displayName = `WithBoxStyling(${ component.displayName || component.name || 'Component' })`;
  }

  return WithBoxStyling;
};
