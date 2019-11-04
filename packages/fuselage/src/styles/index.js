import React, { useLayoutEffect, useMemo } from 'react';

import css from '../index.scss';

export const createStyledComponent = (styles, componentClassName, component = 'div') => {
  const Component = React.forwardRef(function Component(props, ref) {
    useLayoutEffect(() => {
      css.use();

      return () => {
        css.unuse();
      };
    }, []);

    const {
      as,
      className,
      forwardedAs,
      forwardedRef,
      invisible,
      ...filteredProps
    } = props;

    const newComponent = useMemo(() => forwardedAs || as || component, [forwardedAs, as]);

    const newProps = useMemo(() => {
      const modifiersClasses = [].concat(
        Object.keys(filteredProps)
          .filter((name) => name.slice(0, 4) === 'mod-' && !!filteredProps[name])
          .map((name) => (typeof filteredProps[name] === 'boolean'
            ? `${ componentClassName }--${ name.slice(4) }`
            : `${ componentClassName }--${ name.slice(4) }-${ filteredProps[name] }`))
      );

      const newClassName = [
        componentClassName,
        invisible && `${ componentClassName }--invisible`,
        modifiersClasses.join(' '),
        className,
      ].filter(Boolean).join(' ');

      const newRef = forwardedRef || ref;

      for (const key of Object.keys(filteredProps)) {
        if (key.slice(0, 4) === 'mod-') {
          delete filteredProps[key];
        }
      }

      return {
        ...filteredProps,
        className: newClassName,
        ref: newRef,
      };
    });

    return React.createElement(newComponent, newProps);
  });

  Component.displayName = componentClassName;

  return Component;
};
