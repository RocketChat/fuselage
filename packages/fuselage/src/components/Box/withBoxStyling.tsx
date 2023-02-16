import type { ComponentType } from 'react';
import React from 'react';

import { useStyleSheet } from '../../hooks/useStyleSheet';
import type { StylingProps } from './stylingProps';
import { useStylingProps } from './useStylingProps';

export const withBoxStyling = <
  TProps extends {
    className?: string;
  }
>(
  Component: ComponentType<TProps>
): ComponentType<TProps & Partial<StylingProps>> => {
  const WithBoxStyling = (props: TProps & Partial<StylingProps>) => {
    useStyleSheet();
    const propsWithoutStylingProps = useStylingProps(props);
    return <Component {...propsWithoutStylingProps} />;
  };

  WithBoxStyling.displayName = `WithBoxStyling(${
    Component.displayName || Component.name || 'Component'
  })`;

  return WithBoxStyling;
};
