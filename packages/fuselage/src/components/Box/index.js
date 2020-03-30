import PropTypes from 'prop-types';
import React, { createElement, forwardRef, memo } from 'react';

import { useProps, PropsContext, noProps } from './PropsContext';
import { useStyleSheet } from './useStyleSheet';

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

    modifierClassNames.push(`${ element }--${ name }-${ value }`);
  }

  return modifierClassNames;
};

const nameRegex = /^mod-(.*)$/;

const filterModifierProps = (props) => {
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

  return [modifierProps, otherProps];
};

export const Box = memo(forwardRef(function Box(props, ref) {
  useStyleSheet();

  const contextProps = useProps();

  const transforms = [
    ({ className, invisible, richText, textColor, textStyle, ...props }) => ({
      className: [
        'rcx-box',
        ...getClassNamesFromModifiers('rcx-box', {
          invisible,
          inline: richText === 'inline',
          block: richText === 'block',
          'text-color': textColor,
          'text-style': textStyle,
        }),
        ...className,
      ],
      ...props,
    }),
    ({ className, componentClassName, ...props }) => {
      const [modifiers, remainingProps] = filterModifierProps(props);
      return {
        className: [
          componentClassName,
          ...getClassNamesFromModifiers(componentClassName, modifiers),
          ...className,
        ],
        ...remainingProps,
      };
    },
  ];

  const mergedProps = transforms.reduce((props, transform) => transform(props), {
    ref,
    ...contextProps,
    ...props,
    className: [
      ...Array.isArray(contextProps.className) ? contextProps.className : [contextProps.className],
      ...Array.isArray(props.className) ? props.className : [props.className],
    ],
    style: {
      ...contextProps.style,
      ...props.style,
    },
  });

  const children = createElement(mergedProps.is || 'div', {
    ...mergedProps,
    is: undefined,
    className: Array.from(new Set(mergedProps.className)).filter(Boolean).join(' '),
    style: mergedProps.style,
  });

  if (contextProps === noProps) {
    return children;
  }

  return <PropsContext.Provider children={children} value={noProps} />;
}));

Box.defaultProps = {
  invisible: false,
  is: 'div',
};

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

export * from './PropsContext';
export * from './AnimatedVisibility';
export * from './Flex';
export * from './Margins';
export * from './Position';
export * from './Scrollable';
export * from './Size';
