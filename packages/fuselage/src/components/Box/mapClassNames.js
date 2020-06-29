import { partitionObject } from '../../helpers/partitionObject';

export const mapClassNames = (props) => {
  const [rcxProps, rest] = partitionObject(props, (key) => key.slice(0, 4) === 'rcx-');

  const modifierClassNames = [];

  for (const [name, value] of Object.entries(rcxProps)) {
    if (value === true) {
      modifierClassNames.push(name);
      continue;
    }

    if (value) {
      modifierClassNames.push(`${ name }-${ value }`);
    }
  }

  return {
    ...rest,
    className: [
      ...modifierClassNames,
      ...rest.className,
    ],
  };
};
