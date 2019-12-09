import React, { forwardRef, memo, useMemo } from 'react';

import { useStyleSheet, useProps } from '../hooks';

export const createStyledComponent = (componentClassName, component = 'div') => {
  const StyledComponent = memo(forwardRef(function StyledComponent(props, ref) {
    useStyleSheet();
    const [stylingProps, PropsProvider] = useProps();

    const {
      as,
      className,
      invisible,
      style,
      ...filteredProps
    } = props;

    const newComponent = useMemo(() => as || component, [as]);

    const modifiersClasses = [].concat(
      Object.keys(filteredProps)
        .filter((name) => name.slice(0, 4) === 'mod-' && !!filteredProps[name])
        .map((name) => (typeof filteredProps[name] === 'boolean'
          ? `${ componentClassName }--${ name.slice(4) }`
          : `${ componentClassName }--${ name.slice(4) }-${ filteredProps[name] }`)),
    );

    const newClassName = [
      componentClassName,
      invisible && `${ componentClassName }--invisible`,
      modifiersClasses.join(' '),
      stylingProps.className,
      className,
    ].filter(Boolean).join(' ');

    for (const key of Object.keys(filteredProps)) {
      if (key.slice(0, 4) === 'mod-') {
        delete filteredProps[key];
      }
    }

    const newStyle = {
      ...stylingProps.style,
      ...style,
    };

    const newProps = {
      ...filteredProps,
      className: newClassName,
      ref,
      style: newStyle,
    };

    return <PropsProvider children={React.createElement(newComponent, newProps)} />;
  }));

  StyledComponent.displayName = componentClassName;

  return StyledComponent;
};
