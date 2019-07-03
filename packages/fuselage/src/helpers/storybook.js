import React from 'react';
import centered from '@storybook/addon-centered/react';
import { boolean, text } from '@storybook/addon-knobs/react';


export const horizontallyCentered = (storyFn) => centered(() => (
  <div style={{
    height: '100vh',
  }}>
    {storyFn()}
  </div>
));

export const verticallyCentered = (storyFn) => centered(() => (
  <div style={{
    width: '100vw',
  }}>
    {storyFn()}
  </div>
));

export const createPropsFromKnobs = (defaults = {}, itemName = null) => () =>
  Object.entries(defaults).reduce((props, [propName, defaultValue]) => {
    if (propName === 'children' && React.isValidElement(defaultValue)) {
      return { ...props, [propName]: defaultValue };
    }

    const knobName = itemName ? `${ itemName } / ${ propName }` : propName;

    if (typeof defaultValue === 'boolean') {
      return { ...props, [propName]: boolean(knobName, defaultValue) };
    }

    return { ...props, [propName]: text(knobName, defaultValue) };
  }, {});
