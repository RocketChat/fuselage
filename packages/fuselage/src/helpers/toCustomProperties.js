import { fromCameltoKebabCase } from './fromCamelToKebabCase';


export const toCustomProperties = (prefix, properties) =>
  Object.entries(properties).reduce((obj, [name, value]) => ({
    ...obj,
    [name]: (typeof value === 'object' && toCustomProperties(`${ prefix }-${ name }`, value))
      || `var(--rcx-${ prefix }-${ fromCameltoKebabCase(name) }, ${ value })`,
  }), {});
