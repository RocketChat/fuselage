import { useSpaceProps } from './useSpaceProps';

const useBoxClassNames = ({ className, invisible, richText, textColor, textStyle, ...props }) => ({
  className: [
    'rcx-box',
    !!invisible && 'rcx-box--invisible',
    richText === 'inline' && 'rcx-box--inline',
    richText === 'block' && 'rcx-box--block',
    textColor && `rcx-box--text-color-${ textColor }`,
    textStyle && `rcx-box--text-style-${ textStyle }`,
    ...className,
  ],
  ...props,
});

const useModifierClassNames = ({ className, componentClassName, ...props }) => {
  const modifierClassNames = [];

  for (const [name, value] of Object.entries(props)) {
    if (name.slice(0, 4) === 'mod-') {
      delete props[name];

      if (value === true) {
        modifierClassNames.push(`${ componentClassName }--${ name.slice(4) }`);
        continue;
      }

      if (value) {
        modifierClassNames.push(`${ componentClassName }--${ name.slice(4) }-${ value }`);
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

export const useMergedProps = (props, contextProps, ref) => {
  const initialProps = {
    ref,
    ...contextProps,
    ...props,
    className: [
      ...Array.isArray(contextProps?.className) ? contextProps?.className : [contextProps?.className],
      ...Array.isArray(props.className) ? props.className : [props.className],
    ],
    style: {
      ...contextProps?.style,
      ...props.style,
    },
  };

  return [
    useBoxClassNames,
    useModifierClassNames,
    useSpaceProps,
  ].reduceRight((props, transform) => transform(props), initialProps);
};
