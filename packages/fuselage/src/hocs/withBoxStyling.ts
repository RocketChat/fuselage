import { ComponentType, createElement, FC } from 'react';

import { BoxStylingProps, useBoxStylingProps } from '../components/Box/props';
import { useStyleSheet } from '../hooks/useStyleSheet';

export const withBoxStyling = <P extends { className?: string }>(
  component: ComponentType<P>
): ComponentType<
  BoxStylingProps & Omit<P, 'className' | keyof BoxStylingProps>
> => {
  const WithBoxStyling: FC<
    BoxStylingProps & Omit<P, 'className' | keyof BoxStylingProps>
  > = (props) => {
    useStyleSheet();

    const mappedProps = useBoxStylingProps<P>(props);

    return createElement(component, mappedProps);
  };

  WithBoxStyling.displayName = `WithBoxStyling(${
    component.displayName ?? component.name ?? 'Component'
  })`;

  return WithBoxStyling;
};

export default withBoxStyling;
