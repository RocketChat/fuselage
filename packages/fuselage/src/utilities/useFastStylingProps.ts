/**
 * Fast-path alternative to useStylingProps.
 *
 * Instead of going through the runtime CSS-in-JS pipeline:
 *   prop → toCSSValue → css`` template → hash → stylis transpile → insertRule
 *
 * We do a simple Map.get() for each prop → className.
 *
 * When ALL styling props resolve to known utility classes, we skip the runtime
 * entirely. When ANY prop has a value that doesn't map to a utility, we fall
 * back to the original useStylingProps for that render.
 */

import { appendClassName } from '../helpers/appendClassName';
import { useStyle } from '../hooks/useStyle';
import type { StylingProps } from '../components/Box/stylingProps';
import { extractStylingProps } from '../components/Box/stylingProps';
import { resolveUtilityClass } from './classNameMap';

// Props that are recognized as styling props (same set as in stylingProps.ts)
const stylingPropNames = new Set<string>([
  'border', 'borderBlock', 'borderBlockStart', 'borderBlockEnd',
  'borderInline', 'borderInlineStart', 'borderInlineEnd',
  'borderWidth', 'borderBlockWidth', 'borderBlockStartWidth', 'borderBlockEndWidth',
  'borderInlineWidth', 'borderInlineStartWidth', 'borderInlineEndWidth',
  'borderStyle', 'borderBlockStyle', 'borderBlockStartStyle', 'borderBlockEndStyle',
  'borderInlineStyle', 'borderInlineStartStyle', 'borderInlineEndStyle',
  'borderColor', 'borderBlockColor', 'borderBlockStartColor', 'borderBlockEndColor',
  'borderInlineColor', 'borderInlineStartColor', 'borderInlineEndColor',
  'borderRadius', 'borderStartStartRadius', 'borderStartEndRadius',
  'borderEndStartRadius', 'borderEndEndRadius',
  'color', 'backgroundColor', 'bg', 'opacity',
  'alignItems', 'alignContent', 'justifyItems', 'justifyContent',
  'flexWrap', 'flexDirection', 'flexGrow', 'flexShrink', 'flexBasis',
  'justifySelf', 'alignSelf', 'order',
  'w', 'width', 'minWidth', 'maxWidth', 'h', 'height', 'minHeight', 'maxHeight',
  'display', 'verticalAlign', 'overflow', 'overflowX', 'overflowY',
  'position', 'zIndex',
  'inset', 'insetBlock', 'insetBlockStart', 'insetBlockEnd',
  'insetInline', 'insetInlineStart', 'insetInlineEnd',
  'm', 'margin', 'mb', 'marginBlock', 'mbs', 'marginBlockStart',
  'mbe', 'marginBlockEnd', 'mi', 'marginInline', 'mis', 'marginInlineStart',
  'mie', 'marginInlineEnd', 'p', 'padding', 'pb', 'paddingBlock',
  'pbs', 'paddingBlockStart', 'pbe', 'paddingBlockEnd', 'pi', 'paddingInline',
  'pis', 'paddingInlineStart', 'pie', 'paddingInlineEnd',
  'fontFamily', 'fontSize', 'fontStyle', 'fontWeight', 'letterSpacing',
  'lineHeight', 'textAlign', 'textTransform', 'textDecorationLine', 'wordBreak',
  'elevation', 'invisible', 'withTruncatedText', 'size', 'minSize', 'maxSize',
  'fontScale',
]);

/**
 * Attempts to resolve all styling props to utility class names.
 * Returns [remainingProps, utilityClassNames] if fast-path succeeds,
 * or null if any prop requires the runtime fallback.
 */
function tryFastPath<TProps extends Record<string, unknown>>(
  props: TProps,
): [cleanProps: TProps, classNames: string] | null {
  const classNames: string[] = [];
  const newProps: Record<string, unknown> = {};
  let hasStylingProps = false;

  for (const [key, value] of Object.entries(props)) {
    if (!stylingPropNames.has(key)) {
      newProps[key] = value;
      continue;
    }

    if (value === undefined) {
      continue;
    }

    hasStylingProps = true;
    const cls = resolveUtilityClass(key, value);
    if (cls === undefined) {
      // This value doesn't have a utility class — bail to runtime
      return null;
    }
    classNames.push(cls);
  }

  if (!hasStylingProps) {
    return null; // no styling props, nothing to do
  }

  return [newProps as TProps, classNames.join(' ')];
}

/**
 * Drop-in replacement for useStylingProps that tries the fast-path first.
 *
 * Usage in Box.tsx:
 *   const propsWithoutStylingProps = useFastStylingProps(propsWithStringClassName);
 */
export const useFastStylingProps = <TProps extends { className?: string }>(
  originalProps: TProps,
): Omit<TProps, keyof StylingProps> => {
  // Try fast-path first (pure Map lookups, no hooks)
  const fastResult = tryFastPath(originalProps);

  if (fastResult !== null) {
    const [props, utilityClasses] = fastResult;
    if (utilityClasses) {
      props.className = props.className
        ? appendClassName(props.className, utilityClasses)
        : utilityClasses;
    }
    return props;
  }

  // Fallback: original runtime CSS-in-JS path
  const [props, styles] = extractStylingProps(originalProps);
  const newClassName = useStyle(styles, undefined);

  if (newClassName) {
    props.className = props.className
      ? appendClassName(props.className, newClassName)
      : newClassName;
  }

  return props;
};
