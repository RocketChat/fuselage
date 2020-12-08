import { createElement } from 'react';

import {
  consumeCssPropertiesProps,
  consumePostAliases,
  consumePreAliases,
  consumeSpecialStylingProps,
} from '../components/Box/props';
import { useArrayLikeClassNameProp } from '../components/Box/useArrayLikeClassNameProp';
import { useStyleSheet } from '../hooks/useStyleSheet';

export const withBoxStyling = (component) => {
  const WithBoxStyling = ({ ...props }) => {
    useStyleSheet();
    props = consumePreAliases(props);
    props = consumeSpecialStylingProps(props);
    props = consumeCssPropertiesProps(props);
    props = consumePostAliases(props);
    props = useArrayLikeClassNameProp(props);
    return createElement(component, props);
  };

  WithBoxStyling.displayName = `WithBoxStyling(${
    component.displayName ?? component.name ?? 'Component'
  })`;

  return WithBoxStyling;
};
