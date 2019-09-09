export const fromCamelToKebabCase = (camelCaseString) => camelCaseString.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();
