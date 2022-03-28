import type { ComponentType } from 'react';
import { createElement } from 'react';

import { useStyleSheet } from '../../hooks/useStyleSheet';
import type { StylingProps } from './stylingProps';
import { useStylingProps } from './useStylingProps';

export const withBoxStyling = <TProps>(
  component: ComponentType<TProps>
): ComponentType<TProps> => {
  const WithBoxStyling = (props: TProps & Partial<StylingProps>) => {
    useStyleSheet();
    const propsWithoutStylingProps = useStylingProps(props);
    return createElement(component, propsWithoutStylingProps);
  };

  WithBoxStyling.displayName = `WithBoxStyling(${
    component.displayName || component.name || 'Component'
  })`;

  return WithBoxStyling;
};
