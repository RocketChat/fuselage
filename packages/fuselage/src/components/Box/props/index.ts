/* eslint-disable prettier/prettier */
import { css } from '@rocket.chat/css-in-js';
import { ElementType, PropsWithChildren } from 'react';

import { prependClassName } from '../../../helpers/prependClassName';
import { useStyle } from '../../../hooks/useStyle';
import {
  consumePostAlias,
  consumePreAlias,
  isPostAlias,
  isPreAlias,
  PostAliasTypes,
  PreAliasTypes,
} from './alias';
import {
  consumeCssPropertyProp,
  CssPropertyPropTypes,
  isCssPropertyProp,
} from './css';
import { consumeRcxProp, isRcxProp } from './rcx';
import {
  consumeSpecialStylingProp,
  isSpecialStylingProp,
  SpecialStylingPropTypes,
} from './specialStyling';

export type BoxStylingProps = SpecialStylingPropTypes &
  CssPropertyPropTypes &
  PreAliasTypes &
  PostAliasTypes;

type BoxOnlyProps<P extends { className?: string }> = {
  animated?: boolean;
  className?:
    | string
    | ReturnType<typeof css>
    | (string | ReturnType<typeof css>)[];
  is?: ElementType<P>;
};

export const useBoxStylingProps = <P extends { className?: string }>(
  props: BoxStylingProps & Omit<P, 'className' | keyof BoxStylingProps>
): P => {
  const targetProps: Partial<P> = {};
  const targetClassNames: (string | ReturnType<typeof css>)[] = [];

  for (const [propName, propValue] of Object.entries(props)) {
    if (isPreAlias(propName)) {
      consumePreAlias(propName, propValue, targetProps, targetClassNames);
      continue;
    }

    if (isSpecialStylingProp(propName)) {
      consumeSpecialStylingProp(
        propName,
        propValue,
        targetProps,
        targetClassNames
      );
      continue;
    }

    if (isCssPropertyProp(propName)) {
      consumeCssPropertyProp(
        propName,
        propValue,
        targetProps,
        targetClassNames
      );
      continue;
    }

    if (isPostAlias(propName)) {
      consumePostAlias(propName, propValue, targetProps, targetClassNames);
      continue;
    }

    targetProps[propName] = propValue;
  }

  const styles = targetClassNames.filter(
    (value): value is ReturnType<typeof css> => typeof value === 'function'
  );
  const stylesClassName = useStyle(
    css`
      ${styles}
    `,
    props
  );

  const classNames = targetClassNames.filter(
    (value): value is string => typeof value === 'string'
  );

  if (stylesClassName) {
    classNames.push(stylesClassName);
  }

  return Object.assign(targetProps, {
    className: classNames.join(' '),
  }) as P;
};

export type BoxProps<P> = PropsWithChildren<BoxStylingProps & BoxOnlyProps<P>> &
  Omit<P, 'className' | keyof (BoxStylingProps & BoxOnlyProps<P>)>;

export const useBoxProps = <P extends { className?: string }>(
  props: BoxProps<P>
): P => {
  const targetProps: Partial<P> = {};
  const targetClassNames: (string | ReturnType<typeof css>)[] = [
    'rcx-box',
    'rcx-box--full',
  ];

  for (const [propName, propValue] of Object.entries(props)) {
    if (isRcxProp(propName)) {
      consumeRcxProp(propName, propValue, targetProps, targetClassNames);
      continue;
    }

    if (isPreAlias(propName)) {
      consumePreAlias(propName, propValue, targetProps, targetClassNames);
      continue;
    }

    if (isSpecialStylingProp(propName)) {
      consumeSpecialStylingProp(
        propName,
        propValue,
        targetProps,
        targetClassNames
      );
      continue;
    }

    if (isCssPropertyProp(propName)) {
      consumeCssPropertyProp(
        propName,
        propValue,
        targetProps,
        targetClassNames
      );
      continue;
    }

    if (isPostAlias(propName)) {
      consumePostAlias(propName, propValue, targetProps, targetClassNames);
      continue;
    }

    targetProps[propName] = propValue;
  }

  if (props.animated) {
    props.className = prependClassName(props.className, 'rcx-box--animated');
    delete props.animated;
  }
  props.className = prependClassName(props.className, 'rcx-box--full');
  props.className = prependClassName(props.className, 'rcx-box');

  const styles = targetClassNames.filter(
    (value): value is ReturnType<typeof css> => typeof value === 'function'
  );
  const stylesClassName = useStyle(
    css`
      ${styles}
    `,
    props
  );

  const classNames = targetClassNames.filter(
    (value): value is string => typeof value === 'string'
  );

  if (stylesClassName) {
    classNames.push(stylesClassName);
  }

  return Object.assign(targetProps, {
    className: classNames.join(' '),
  }) as P;
};
