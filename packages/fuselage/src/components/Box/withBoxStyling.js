import { useStyleSheet } from '@rocket.chat/fuselage-box';
import { createElement } from 'react';

import globalStyleSheet from '../../index.scss';
import { useStylingProps } from './stylingProps';

export const withBoxStyling = (component) => {
  const render = (props) => {
    if (typeof component === 'function') {
      return component(props);
    }

    return createElement(component, props);
  };

  const WithBoxStyling = (props) => {
    useStyleSheet(globalStyleSheet);
    props = useStylingProps(props);
    return render(props);
  };

  if (process.env.NODE_ENV !== 'production') {
    WithBoxStyling.displayName = `WithBoxStyling(${
      component.displayName || component.name || 'Component'
    })`;
  }

  return WithBoxStyling;
};
