import React, { createContext, useContext, useLayoutEffect, useMemo } from 'react';

import css from '../index.scss';

const StylingContext = createContext([]);

export const createStylingComponent = (fn) => function StylingComponent(props) {
  const ancestorStylingProps = useContext(StylingContext);

  const stylingProps = [
    ...ancestorStylingProps.filter(({ depth }) => depth === undefined),
    ...ancestorStylingProps.filter(({ depth }) => depth > 0),
    fn(props),
  ];

  return <StylingContext.Provider children={props.children} value={stylingProps} />;
};

const useStylesheet = () => {
  useLayoutEffect(() => {
    css.use();

    return () => {
      css.unuse();
    };
  }, [css]);
};

export const createStyledComponent = (componentClassName, component = 'div') => {
  const StyledComponent = React.memo(React.forwardRef(function StyledComponent(props, ref) {
    useStylesheet();

    const {
      as,
      className,
      invisible,
      style,
      ...filteredProps
    } = props;

    const newComponent = useMemo(() => as || component, [as]);

    const stylingProps = useContext(StylingContext);

    const modifiersClasses = [].concat(
      Object.keys(filteredProps)
        .filter((name) => name.slice(0, 4) === 'mod-' && !!filteredProps[name])
        .map((name) => (typeof filteredProps[name] === 'boolean'
          ? `${ componentClassName }--${ name.slice(4) }`
          : `${ componentClassName }--${ name.slice(4) }-${ filteredProps[name] }`)),
    );

    const inheritedClasses = stylingProps.filter(({ className }) => !!className)
      .map(({ className }) => className);

    const newClassName = [
      componentClassName,
      invisible && `${ componentClassName }--invisible`,
      modifiersClasses.join(' '),
      inheritedClasses.join(' '),
      className,
    ].filter(Boolean).join(' ');

    for (const key of Object.keys(filteredProps)) {
      if (key.slice(0, 4) === 'mod-') {
        delete filteredProps[key];
      }
    }

    const newStyle = stylingProps.filter(({ style }) => !!style)
      .reduce((styleProp, style) => ({ ...styleProp, ...style }), style);

    const newProps = {
      ...filteredProps,
      className: newClassName,
      ref,
      style: newStyle,
    };

    const newStyles = stylingProps.map(({ depth, ...props }) => ({ depth: depth > 0 ? depth - 1 : depth, ...props }));

    return <StylingContext.Provider children={React.createElement(newComponent, newProps)} value={newStyles} />;
  }));

  StyledComponent.displayName = componentClassName;

  return StyledComponent;
};
