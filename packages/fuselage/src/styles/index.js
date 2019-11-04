import nanoMemoize from 'nano-memoize';
import styled from 'styled-components';

import variables from './variables';

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

const mapTheme = nanoMemoize(() => ({ theme: variables }));

const mapAs = (component) => nanoMemoize(() => ({ as: component }));

export const createStyledComponent = (styles, componentClassName, component = 'div') => {
  const StyledComponent = styled(styles[componentClassName])
    .attrs(mapModifiers(componentClassName))
    .attrs(mapTheme)
    .attrs(mapAs(component))
    .withConfig({ componentId: componentClassName })([], []);

  StyledComponent.displayName = componentClassName;

  return StyledComponent;
};
