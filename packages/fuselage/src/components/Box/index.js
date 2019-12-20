import PropTypes from 'prop-types';
import React, { createElement, forwardRef, memo } from 'react';

import { useStyleSheet, useProps } from '../../hooks';

const getClassNamesFromModifiers = (element, modifiers) => {
  const modifierClassNames = [];

  for (const [name, value] of Object.entries(modifiers)) {
    if (!value) {
      continue;
    }

    if (typeof value === 'boolean') {
      modifierClassNames.push(`${ element }--${ name }`);
      continue;
    }

    if (typeof value === 'object') {
      Object.entries(value).filter(([, value]) => !!value).forEach(([breakpointName, value]) => {
        modifierClassNames.push(`${ element }--${ breakpointName }:${ name }-${ value }`);
      });
      continue;
    }

    modifierClassNames.push(`${ element }--${ name }-${ value }`);
  }

  return modifierClassNames;
};

const filterModifierClassNames = (componentClassName, props) => {
  if (!componentClassName) {
    return [[], props];
  }

  const nameRegex = /^mod-(.*)$/;

  const [modifierProps, otherProps] = Object.entries(props)
    .reduce(([modifierProps, otherProps], [name, value]) => {
      const matches = nameRegex.exec(name);

      if (!matches) {
        return [modifierProps, { ...otherProps, [name]: value }];
      }

      if (!value) {
        return [modifierProps, otherProps];
      }

      return [{ ...modifierProps, [matches[1]]: value }, otherProps];
    }, [{}, {}]);

  const modifierClassNames = getClassNamesFromModifiers(componentClassName, modifierProps);

  return [modifierClassNames, otherProps];
};

export const Box = memo(forwardRef(function Box({
  className,
  componentClassName,
  invisible,
  is = 'div',
  richText,
  style,
  textColor,
  textStyle,
  ...props
}, ref) {
  useStyleSheet();
  const [{
    className: contextualClassName,
    style: contextualStyle,
    ...contextualProps
  }, PropsProvider] = useProps();
  const [modifiersClasses, otherProps] = filterModifierClassNames(componentClassName, { ...contextualProps, ...props });

  const children = createElement(is, {
    className: [
      'rcx-box',
      ...getClassNamesFromModifiers('rcx-box', {
        invisible,
        inline: richText === 'inline',
        block: richText === 'block',
        'text-color': textColor,
        'text-style': textStyle,
      }),
      componentClassName,
      ...modifiersClasses,
      contextualClassName,
      className,
    ].filter(Boolean).join(' '),
    ref,
    style: {
      ...contextualStyle,
      ...style,
    },
    ...otherProps,
  });

  return <PropsProvider children={children} />;
}));

Box.defaultProps = {
  invisible: false,
  is: 'div',
};

Box.displayName = 'Box';

Box.propTypes = {
  className: PropTypes.string,
  componentClassName: PropTypes.string,
  invisible: PropTypes.bool,
  is: PropTypes.elementType.isRequired,
  richText: PropTypes.oneOf(['inline', 'block']),
  style: PropTypes.object,
  textColor: PropTypes.oneOf([
    'default', 'info', 'hint', 'disabled-label', 'disabled', 'alternative',
    'primary', 'success', 'danger', 'warning',
  ]),
  textStyle: PropTypes.oneOf([
    'h1', 's1', 's2', 'p1', 'p2', 'c1', 'c2', 'micro', 'mono',
    'headline', 'subtitle', 'paragraph', 'caption',
  ]),
};

Box.extend = (componentClassName, is) => {
  const BoxExtension = forwardRef((props, ref) =>
    <Box is={is} componentClassName={componentClassName} ref={ref} {...props} />);

  BoxExtension.displayName = componentClassName;

  return BoxExtension;
};

export * from './Flex';
export * from './Margins';
export * from './Scrollable';
export * from './Animated';
