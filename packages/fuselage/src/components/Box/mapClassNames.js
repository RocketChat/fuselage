export const mapClassNames = ({ className, componentClassName, ...props }) => {
  const modifierClassNames = [];

  if (componentClassName) {
    console.warn('The `componentClassName` property is deprecated; prefer `rcx-*` properties');
  }

  for (const [name, value] of Object.entries(props)) {
    if (name.slice(0, 4) === 'mod-') {
      console.warn('`mod-*` properties are deprecated; prefer `rcx-*` properties');

      delete props[name];

      if (value === true) {
        modifierClassNames.push(`${ componentClassName }--${ name.slice(4) }`);
        continue;
      }

      if (value) {
        modifierClassNames.push(`${ componentClassName }--${ name.slice(4) }-${ value }`);
      }

      continue;
    }

    if (name.slice(0, 4) === 'rcx-') {
      delete props[name];

      if (value === true) {
        modifierClassNames.push(name);
        continue;
      }

      if (value) {
        modifierClassNames.push(`${ name }-${ value }`);
      }
    }
  }

  return {
    className: [
      componentClassName,
      ...modifierClassNames,
      ...className,
    ],
    ...props,
  };
};
