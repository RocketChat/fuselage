import { prependClassName } from '../../helpers/prependClassName';

export const useBoxOnlyProps = (props) => {
  Object.entries(props).forEach(([key, value]) => {
    if (key.slice(0, 4) === 'rcx-') {
      if (!value) {
        delete props[key];
        return;
      }

      const newClassName = value === true ? key : `${ key }-${ value }`;
      props.className = prependClassName(props.className, newClassName);
      delete props[key];
    }
  });

  props.className = prependClassName(props.className, 'rcx-box rcx-box--full');

  return props;
};
