import { createElement, forwardRef } from 'react';

import { ClassNamesConsumer as collectClassNames } from './classNames';
import { EventPropsConsumer as collectEventProps } from './events';
import { StylingPropsConsumer as collectStylingProps } from './stylingProps';
import { injectProps } from './transferProps';

export const consumeBoxContexts = (component, props, sourceProps, targetProps) =>
  collectStylingProps({
    props,
    sourceProps,
    targetProps,
    children: (sourceProps, targetProps) => collectClassNames({
      props,
      sourceProps,
      targetProps,
      children: (sourceProps, targetProps) => collectEventProps({
        sourceProps,
        targetProps,
        children: (sourceProps, targetProps) => {
          injectProps(targetProps, sourceProps);
          return createElement(component, targetProps);
        },
      }),
    }),
  });

export const withBoxContexts = forwardRef((component, ref) => {
  const enhancedComponent = (props) =>
    consumeBoxContexts(component, props, Object.assign({}, props), ref ? { ref } : {});

  enhancedComponent.displayName = `withBoxContexts(${ component.displayName || component.name || 'Component' })`;
});
