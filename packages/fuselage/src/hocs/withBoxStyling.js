import { createElement } from 'react';

import { consumeBoxStylingProps } from '../components/Box/props';
import { useArrayLikeClassNameProp } from '../components/Box/useArrayLikeClassNameProp';
import { useStyleSheet } from '../hooks/useStyleSheet';

export const withBoxStyling = (component) => {
  const WithBoxStyling = ({ ...props }) => {
    useStyleSheet();

    props = consumeBoxStylingProps(props);
    props = useArrayLikeClassNameProp(props);

    return createElement(component, props);
  };

  WithBoxStyling.displayName = `WithBoxStyling(${
    component.displayName ?? component.name ?? 'Component'
  })`;

  return WithBoxStyling;
};

export default withBoxStyling;
