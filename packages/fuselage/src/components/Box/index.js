import PropTypes from 'prop-types';
import React, { createElement, memo, forwardRef } from 'react';

import { useStyleSheet, useProps } from '../../hooks';

export const Box = memo(forwardRef(
  function Box({
    is = 'div',
    componentClassName,
    className,
    invisible,
    style,
    ...props
  }, ref) {
    useStyleSheet();
    const [contextualProps, PropsProvider] = useProps();

    const newComponent = is;

    const [modifiersClasses, otherProps] = Object.entries(props)
      .reduce(([modifiersClasses, otherProps], [name, value]) => {
        if (name.slice(0, 4) === 'mod-') {
          if (!value) {
            return [modifiersClasses, otherProps];
          }

          return [
            [
              ...modifiersClasses,
              componentClassName && typeof value === 'boolean'
                ? `${ componentClassName }--${ name.slice(4) }`
                : `${ componentClassName }--${ name.slice(4) }-${ value }`,
            ],
            otherProps,
          ];
        }

        return [modifiersClasses, { ...otherProps, [name]: value }];
      }, [[], {}]);

    const newProps = {
      className: [
        componentClassName,
        componentClassName && invisible && `${ componentClassName }--invisible`,
        ...modifiersClasses,
        contextualProps.className,
        className,
      ].filter(Boolean).join(' '),
      ref,
      style: {
        ...contextualProps.style,
        ...style,
      },
      ...otherProps,
    };

    return <PropsProvider children={createElement(newComponent, newProps)} />;
  },
));

Box.defaultProps = {
  is: 'div',
  invisible: false,
};

Box.displayName = 'Box';

Box.propTypes = {
  is: PropTypes.elementType,
  componentClassName: PropTypes.string,
  className: PropTypes.string,
  invisible: PropTypes.bool,
  style: PropTypes.object,
};

Box.extend = (componentClassName, is) => {
  const BoxExtension = forwardRef(function StyledComponent(props, ref) {
    return <Box is={is} componentClassName={componentClassName} ref={ref} {...props} />;
  });

  BoxExtension.displayName = componentClassName;

  return BoxExtension;
};
