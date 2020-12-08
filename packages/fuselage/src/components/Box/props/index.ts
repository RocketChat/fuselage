/* eslint-disable prettier/prettier */
import { css } from '@rocket.chat/css-in-js';
import { AllHTMLAttributes, ElementType, SVGAttributes } from 'react';

import { prependClassName } from '../../../helpers/prependClassName';
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

type BoxOnlyProps = {
  animated?: boolean;
  className?:
    | string
    | ReturnType<typeof css>
    | (string | ReturnType<typeof css>)[];
  is?: ElementType;
};

export type BoxProps = BoxStylingProps &
  BoxOnlyProps &
  Omit<AllHTMLAttributes<HTMLOrSVGElement>, keyof BoxOnlyProps> &
  Omit<SVGAttributes<HTMLOrSVGElement>, keyof BoxOnlyProps>;

export const consumeBoxStylingProps = (
  props: BoxProps
): Record<string, unknown> => {
  for (const [propName, propValue] of Object.entries(props)) {
    if (isPreAlias(propName)) {
      delete props[propName];
      consumePreAlias(propName, propValue, props);
      continue;
    }

    if (isSpecialStylingProp(propName)) {
      delete props[propName];
      consumeSpecialStylingProp(propName, propValue, props);
      continue;
    }

    if (isCssPropertyProp(propName)) {
      delete props[propName];
      consumeCssPropertyProp(propName, propValue, props);
      continue;
    }

    if (isPostAlias(propName)) {
      delete props[propName];
      consumePostAlias(propName, propValue, props);
      continue;
    }
  }

  return props;
};

export const consumeBoxProps = (props: BoxProps): Record<string, unknown> => {
  for (const [propName, propValue] of Object.entries(props)) {
    if (isRcxProp(propName)) {
      delete props[propName];
      consumeRcxProp(propName, propValue, props);
      continue;
    }

    if (isPreAlias(propName)) {
      delete props[propName];
      consumePreAlias(propName, propValue, props);
      continue;
    }

    if (isSpecialStylingProp(propName)) {
      delete props[propName];
      consumeSpecialStylingProp(propName, propValue, props);
      continue;
    }

    if (isCssPropertyProp(propName)) {
      delete props[propName];
      consumeCssPropertyProp(propName, propValue, props);
      continue;
    }

    if (isPostAlias(propName)) {
      delete props[propName];
      consumePostAlias(propName, propValue, props);
      continue;
    }
  }

  if (props.animated) {
    props.className = prependClassName(props.className, 'rcx-box--animated');
    delete props.animated;
  }
  props.className = prependClassName(props.className, 'rcx-box--full');
  props.className = prependClassName(props.className, 'rcx-box');

  return props;
};
