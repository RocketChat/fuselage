import { css } from '@rocket.chat/css-in-js';

import { memoize } from '../memoize';

export const cssSupports = memoize((value) => typeof window !== 'undefined' && window.CSS && window.CSS.supports(value));

export const createLogicalProperties = ({
  blockPropertyName,
  blockStartPropertyName,
  blockStartFallbackPropertyName,
  blockEndPropertyName,
  blockEndFallbackPropertyName,
  inlinePropertyName,
  inlineStartPropertyName,
  inlineStartFallbackPropertyName,
  inlineEndPropertyName,
  inlineEndFallbackPropertyName,
}) => {
  const blockProperty = (block) => {
    if (cssSupports(`${ blockPropertyName }: inherit`)) {
      return css`${ blockPropertyName }: ${ block } !important;`;
    }

    if (cssSupports(`${ blockStartPropertyName }: inherit`) && cssSupports(`${ blockEndPropertyName }: inherit`)) {
      return css`
        ${ blockStartPropertyName }: ${ block } !important;
        ${ blockEndPropertyName }: ${ block } !important;
      `;
    }

    return css`
      ${ blockStartFallbackPropertyName }: ${ block } !important;
      ${ blockEndFallbackPropertyName }: ${ block } !important;
    `;
  };

  const blockStartProperty = (blockStart) => {
    if (cssSupports(`${ blockStartPropertyName }: inherit`)) {
      return css`${ blockStartPropertyName }: ${ blockStart } !important;`;
    }

    return css`${ blockStartFallbackPropertyName }: ${ blockStart } !important;`;
  };

  const blockEndProperty = (blockEnd) => {
    if (cssSupports(`${ blockEndPropertyName }: inherit`)) {
      return css`${ blockEndPropertyName }: ${ blockEnd } !important;`;
    }

    return css`${ blockEndFallbackPropertyName }: ${ blockEnd } !important;`;
  };

  const inlineProperty = (inline) => {
    if (cssSupports(`${ inlinePropertyName }: inherit`)) {
      return css`${ inlinePropertyName }: ${ inline } !important;`;
    }

    if (cssSupports(`${ inlineStartPropertyName }: inherit`) && cssSupports(`${ inlineEndPropertyName }: inherit`)) {
      return css`
        ${ inlineStartPropertyName }: ${ inline } !important;
        ${ inlineEndPropertyName }: ${ inline } !important;
      `;
    }

    return css`
      ${ inlineStartFallbackPropertyName }: ${ inline } !important;
      ${ inlineEndFallbackPropertyName }: ${ inline } !important;
    `;
  };

  const inlineStartProperty = (inlineStart) => {
    if (cssSupports(`${ inlineStartPropertyName }: inherit`)) {
      return css`${ inlineStartPropertyName }: ${ inlineStart } !important;`;
    }

    return css`
      *:not([dir=rtl]) & {
        ${ inlineStartFallbackPropertyName }: ${ inlineStart } !important;
      }

      [dir=rtl] & {
        ${ inlineEndFallbackPropertyName }: ${ inlineStart } !important;
      }
    `;
  };

  const inlineEndProperty = (inlineEnd) => {
    if (cssSupports(`${ inlineEndPropertyName }: inherit`)) {
      return css`${ inlineEndPropertyName }: ${ inlineEnd } !important;`;
    }

    return css`
      *:not([dir=rtl]) & {
        ${ inlineEndFallbackPropertyName }: ${ inlineEnd } !important;
      }

      [dir=rtl] & {
        ${ inlineStartFallbackPropertyName }: ${ inlineEnd } !important;
      }
    `;
  };

  return [
    blockProperty,
    blockStartProperty,
    blockEndProperty,
    inlineProperty,
    inlineStartProperty,
    inlineEndProperty,
  ];
};

export const createPropType = (getValue) => {
  const propType = (props, propName, componentName) => {
    const propValue = props[propName];

    if (propValue === undefined || getValue(propValue) !== undefined) {
      return;
    }

    return new Error(`Invalid value for prop \`${ propName }\` supplied to \`${ componentName }\`: \`${ propValue }\``);
  };

  propType.isRequired = (props, propName, componentName) => {
    const propValue = props[propName];

    if (propValue !== undefined && getValue(propValue) !== undefined) {
      return;
    }

    return new Error(`Invalid value for prop \`${ propName }\` supplied to \`${ componentName }\`: \`${ propValue }\``);
  };

  return propType;
};
