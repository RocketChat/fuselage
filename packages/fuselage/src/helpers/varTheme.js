import { fromCamelToKebabCase } from './fromCamelToKebabCase';

const isIE11 = !!window.MSInputMethodContext && !!document.documentMode;


export const varTheme = (component, name, value) => {
  if (isIE11) {
    return value;
  }

  return `var(--rcx-${ fromCamelToKebabCase(component) }-${ fromCamelToKebabCase(name) }, ${ value })`;
};
