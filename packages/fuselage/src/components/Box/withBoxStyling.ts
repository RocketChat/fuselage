import {
  ComponentProps,
  createElement,
  ForwardRefExoticComponent,
} from 'react';

import { Box } from '.';
import { useStyleSheet } from '../../hooks/useStyleSheet';
import { useStylingProps } from './stylingProps';

export const withBoxStyling = (
  component: ForwardRefExoticComponent<typeof Box>
) => {
  const render = (props: ComponentProps<typeof Box>) => {
    if (typeof component === 'function') {
      return component(props);
    }

    return createElement(component, props);
  };

  const WithBoxStyling = (props: ComponentProps<typeof Box>) => {
    useStyleSheet();
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
