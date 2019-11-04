// import nanoMemoize from 'nano-memoize';
import React, { useLayoutEffect, useMemo } from 'react';
// import styled from 'styled-components';

import css from '../index.scss';
// import variables from './variables';

const mapModifiers = (componentClassName) => (props) => {
  const classNames = [];

  if (props.invisible) {
    classNames.push(`${ componentClassName }--invisible`);
  }

  for (const propName of Object.keys(props)) {
    if (!props[propName] || propName.slice(0, 4) !== 'mod-') {
      continue;
    }

    const modifierName = propName.slice(4);

    if (typeof props[propName] === 'boolean') {
      classNames.push(`${ componentClassName }--${ modifierName }`);
      continue;
    }

    classNames.push(`${ componentClassName }--${ modifierName }-${ props[propName] }`);
  }
  return {
    className: classNames.join(' '),
  };
};

// const mapTheme = nanoMemoize(() => ({ theme: variables }));

// const mapAs = (component) => nanoMemoize(() => ({ forwardedAs: component }));

export const createStyledComponent = (styles, componentClassName, component = 'div') => {
  // const StyledComponent = styled(styles[componentClassName])
  //   .attrs(mapModifiers(componentClassName))
  //   .attrs(mapTheme)
  //   .attrs(mapAs(component))
  //   .withConfig({ componentId: componentClassName })([], []);

  const Component = React.forwardRef(function Component({
    as: _as,
    className: _className,
    forwardedAs,
    forwardedRef,
    invisible,
    ...props
  }, _ref) {
    useLayoutEffect(() => {
      css.use();

      return () => {
        css.unuse();
      };
    }, []);

    const className = [
      componentClassName,
      invisible && `${ componentClassName }--invisible`,
      useMemo(() => mapModifiers(componentClassName)(props).className),
      _className,
    ].filter(Boolean).join(' ');

    const as = forwardedAs || _as || component;

    const ref = forwardedRef || _ref;

    const filteredProps = Object.entries(props)
      .filter(([name]) => name.slice(0, 4) !== 'mod-')
      .reduce((props, [name, value]) => ({ ...props, [name]: value }), {});

    return React.createElement(as, { ...filteredProps, className, ref });
  });

  Component.displayName = componentClassName;

  return Component;
};
