import type { CSSProperties, ComponentType, Ref } from 'react';
import { forwardRef, useMemo } from 'react';

/**
 * Box prop aliases → standard CSS property names.
 *
 * This map covers the shorthand props that Box provided (mie, mis, mi, mb, …)
 * and maps them to their full CSS equivalents so that migrated Tamagui
 * components remain backward-compatible with existing call-sites.
 */
const BOX_PROP_MAP: Record<string, keyof CSSProperties> = {
  // Margin aliases
  m: 'margin',
  mb: 'marginBlock',
  mbs: 'marginBlockStart',
  mbe: 'marginBlockEnd',
  mi: 'marginInline',
  mis: 'marginInlineStart',
  mie: 'marginInlineEnd',
  // Padding aliases
  p: 'padding',
  pb: 'paddingBlock',
  pbs: 'paddingBlockStart',
  pbe: 'paddingBlockEnd',
  pi: 'paddingInline',
  pis: 'paddingInlineStart',
  pie: 'paddingInlineEnd',
  // Size aliases
  w: 'width',
  h: 'height',
  // Other aliases
  bg: 'backgroundColor',
};

/**
 * All prop names that withBoxProps will extract and convert to style.
 * Includes both aliases (above) and full-form props that Box also accepted
 * but Tamagui styled() components may not.
 */
const STYLE_PROPS = new Set([
  // Aliases
  ...Object.keys(BOX_PROP_MAP),

  // Margin full forms
  'margin',
  'marginBlock',
  'marginBlockStart',
  'marginBlockEnd',
  'marginInline',
  'marginInlineStart',
  'marginInlineEnd',

  // Padding full forms
  'paddingBlock',
  'paddingBlockStart',
  'paddingBlockEnd',
  'paddingInline',
  'paddingInlineStart',
  'paddingInlineEnd',

  // Size
  'width',
  'height',
  'minWidth',
  'maxWidth',
  'minHeight',
  'maxHeight',

  // Layout
  'display',
  'flexGrow',
  'flexShrink',
  'flexBasis',
  'flexDirection',
  'flexWrap',
  'alignItems',
  'alignContent',
  'alignSelf',
  'justifyContent',
  'justifyItems',
  'justifySelf',
  'gap',
  'rowGap',
  'columnGap',
  'order',
  'overflow',
  'overflowX',
  'overflowY',
  'verticalAlign',

  // Position
  'position',
  'zIndex',
  'inset',
  'insetBlock',
  'insetBlockStart',
  'insetBlockEnd',
  'insetInline',
  'insetInlineStart',
  'insetInlineEnd',

  // Visual
  'opacity',
  'backgroundColor',
  'color',
  'borderRadius',

  // Text
  'textAlign',
  'textTransform',
  'textDecorationLine',
  'wordBreak',
  'fontStyle',
]);

/**
 * Convert a Box spacing value to a CSS value.
 * Handles: number → `${n}px`, 'x16' → '1rem', string → passthrough.
 */
function toCSS(value: unknown): string | number | undefined {
  if (value == null) return undefined;
  if (typeof value === 'number') return value;
  if (typeof value === 'string') {
    const match = /^x(\d+)$/.exec(value);
    if (match) return `${parseInt(match[1], 10) / 16}rem`;
    if (value === 'none') return 0;
    return value;
  }
  return undefined;
}

/**
 * Extract Box-compatible props from a props object.
 * Returns `{ style, rest }` where style is a CSSProperties object
 * and rest is the remaining props to forward to the component.
 */
export function extractBoxProps<P extends Record<string, unknown>>(
  props: P,
): { style: CSSProperties; rest: Omit<P, string> } {
  const style: Record<string, unknown> = {};
  const rest: Record<string, unknown> = {};

  for (const [key, value] of Object.entries(props)) {
    if (value === undefined) {
      rest[key] = value;
      continue;
    }

    if (STYLE_PROPS.has(key)) {
      const cssProp = BOX_PROP_MAP[key] || key;
      style[cssProp] = toCSS(value);
    } else {
      rest[key] = value;
    }
  }

  return { style: style as CSSProperties, rest: rest as Omit<P, string> };
}

/**
 * HOC that adds Box-compatible prop support to any Tamagui styled() component.
 *
 * Usage:
 *   const Badge = withBoxProps(BadgeFrame);
 *   <Badge mie={4} mb="x8" />  // works — converted to style
 *
 * The HOC extracts Box shorthand props (mie, mis, mi, mb, w, h, etc.),
 * converts them to a `style` object, and merges with any existing style.
 */
export function withBoxProps<P extends object>(
  Component: ComponentType<P & { style?: CSSProperties; ref?: Ref<any> }>,
  displayName?: string,
) {
  const Wrapped = forwardRef<unknown, P & Record<string, unknown>>(
    (props, ref) => {
      const { style: boxStyle, rest } = extractBoxProps(
        props as Record<string, unknown>,
      );

      const existingStyle = (props as Record<string, unknown>).style as
        | CSSProperties
        | undefined;

      const mergedStyle = useMemo(() => {
        if (!Object.keys(boxStyle).length) return existingStyle;
        return existingStyle ? { ...boxStyle, ...existingStyle } : boxStyle;
      }, [boxStyle, existingStyle]);

      return (
        <Component
          ref={ref}
          {...(rest as P)}
          style={mergedStyle}
        />
      );
    },
  );

  Wrapped.displayName =
    displayName ||
    `withBoxProps(${(Component as any).displayName || Component.name || 'Component'})`;

  return Wrapped as ComponentType<P & Partial<BoxCompatProps>>;
}

/**
 * Type for the Box-compatible props that withBoxProps accepts.
 * Use this to extend component prop types.
 */
export type BoxCompatProps = {
  m?: string | number;
  mb?: string | number;
  mbs?: string | number;
  mbe?: string | number;
  mi?: string | number;
  mis?: string | number;
  mie?: string | number;
  p?: string | number;
  pb?: string | number;
  pbs?: string | number;
  pbe?: string | number;
  pi?: string | number;
  pis?: string | number;
  pie?: string | number;
  w?: string | number;
  h?: string | number;
  bg?: string;
  margin?: string | number;
  marginBlock?: string | number;
  marginBlockStart?: string | number;
  marginBlockEnd?: string | number;
  marginInline?: string | number;
  marginInlineStart?: string | number;
  marginInlineEnd?: string | number;
  width?: string | number;
  height?: string | number;
  minWidth?: string | number;
  maxWidth?: string | number;
  minHeight?: string | number;
  maxHeight?: string | number;
  display?: string;
  flexGrow?: number | string;
  flexShrink?: number | string;
  overflow?: string;
  position?: string;
  zIndex?: number | string;
  textAlign?: string;
  opacity?: number | string;
};
