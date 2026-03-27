/**
 * rcx() — Token-enforced component factory.
 *
 * Replacement for `styled()` that:
 * 1. Only accepts values from the design system tokens (enforced via TypeScript)
 * 2. Resolves to utility class names at render time (zero runtime CSS generation)
 * 3. Produces minimal output — just className composition
 *
 * Usage:
 *   const Card = rcx('div', { p: 'x16', bg: 'surface-tint', elevation: '1' });
 *   <Card className="custom" />                     // adds custom class
 *   <Card p="x24" />                                // override via props
 */

import type {
  ComponentPropsWithRef,
  ElementType,
  ForwardRefExoticComponent,
} from 'react';
import { createElement, forwardRef, memo } from 'react';

import { resolveUtilityClass } from './classNameMap';

// ─── Token-constrained types ─────────────────────────────────

type SpacingToken =
  | 'none'
  | 'x0' | 'x1' | 'x2' | 'x4' | 'x8' | 'x12' | 'x16'
  | 'x20' | 'x24' | 'x28' | 'x32' | 'x36' | 'x40' | 'x44' | 'x48'
  | 'x52' | 'x56' | 'x60' | 'x64' | 'x80' | 'x96' | 'x112' | 'x128'
  | `neg-x${number}` | `-x${number}`;

type SizeToken = SpacingToken | 'full' | 'sw' | 'sh';

type SurfaceColorToken =
  | 'surface-light' | 'surface-tint' | 'surface-room' | 'surface-neutral'
  | 'surface-disabled' | 'surface-hover' | 'surface-selected' | 'surface-dark'
  | 'surface-featured' | 'surface-featured-hover' | 'surface-sidebar'
  | 'surface-overlay' | 'surface-transparent'
  | 'light' | 'tint' | 'room' | 'neutral' | 'disabled' | 'hover'
  | 'selected' | 'dark' | 'featured' | 'featured-hover' | 'sidebar'
  | 'overlay' | 'transparent';

type StatusBgToken =
  | 'status-background-info' | 'status-background-success'
  | 'status-background-danger' | 'status-background-warning'
  | 'status-background-warning-2' | 'status-background-service-1'
  | 'status-background-service-2';

type BadgeBgToken =
  | 'badge-background-level-0' | 'badge-background-level-1'
  | 'badge-background-level-2' | 'badge-background-level-3'
  | 'badge-background-level-4';

type BackgroundColorToken = SurfaceColorToken | StatusBgToken | BadgeBgToken;

type FontColorToken =
  | 'font-white' | 'font-disabled' | 'font-annotation' | 'font-hint'
  | 'font-secondary-info' | 'font-default' | 'font-titles-labels'
  | 'font-info' | 'font-danger' | 'font-pure-white' | 'font-pure-black'
  | 'white' | 'disabled' | 'annotation' | 'hint' | 'secondary-info'
  | 'default' | 'titles-labels' | 'info' | 'danger' | 'pure-white' | 'pure-black';

type StrokeColorToken =
  | 'stroke-extra-light' | 'stroke-light' | 'stroke-medium'
  | 'stroke-dark' | 'stroke-extra-dark'
  | 'stroke-extra-light-highlight' | 'stroke-highlight'
  | 'stroke-extra-light-error' | 'stroke-error'
  | 'extra-light' | 'light' | 'medium' | 'dark' | 'extra-dark'
  | 'extra-light-highlight' | 'highlight' | 'extra-light-error' | 'error';

type FontScaleToken =
  | 'hero' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5'
  | 'p1' | 'p1m' | 'p1b' | 'p2' | 'p2m' | 'p2b'
  | 'c1' | 'c2' | 'micro';

type ElevationToken = '0' | '1' | '1nb' | '2' | '2nb';

type BorderRadiusToken = 'none' | 'full' | 'x0' | 'x2' | 'x4' | 'x8' | 'x12' | 'x16' | 'x20';

type BorderWidthToken = 'none' | 'default' | 'x1' | 'x2' | 'x4';

type DisplayToken = 'none' | 'block' | 'inline' | 'inline-block' | 'flex' | 'inline-flex' | 'grid';

type FlexDirectionToken = 'row' | 'row-reverse' | 'column' | 'column-reverse';

type FlexWrapToken = 'nowrap' | 'wrap' | 'wrap-reverse';

type AlignItemsToken = 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline';

type JustifyContentToken = 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';

type OverflowToken = 'hidden' | 'auto' | 'scroll' | 'visible';

type PositionToken = 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky';

/**
 * All styling props that rcx() accepts — constrained to token values only.
 */
export type RcxStylingProps = {
  // Spacing
  m?: SpacingToken;
  margin?: SpacingToken;
  mb?: SpacingToken;
  marginBlock?: SpacingToken;
  mbs?: SpacingToken;
  marginBlockStart?: SpacingToken;
  mbe?: SpacingToken;
  marginBlockEnd?: SpacingToken;
  mi?: SpacingToken;
  marginInline?: SpacingToken;
  mis?: SpacingToken;
  marginInlineStart?: SpacingToken;
  mie?: SpacingToken;
  marginInlineEnd?: SpacingToken;
  p?: SpacingToken;
  padding?: SpacingToken;
  pb?: SpacingToken;
  paddingBlock?: SpacingToken;
  pbs?: SpacingToken;
  paddingBlockStart?: SpacingToken;
  pbe?: SpacingToken;
  paddingBlockEnd?: SpacingToken;
  pi?: SpacingToken;
  paddingInline?: SpacingToken;
  pis?: SpacingToken;
  paddingInlineStart?: SpacingToken;
  pie?: SpacingToken;
  paddingInlineEnd?: SpacingToken;

  // Sizing
  w?: SizeToken;
  width?: SizeToken;
  h?: SizeToken;
  height?: SizeToken;
  minWidth?: SizeToken;
  maxWidth?: SizeToken;
  minHeight?: SizeToken;
  maxHeight?: SizeToken;

  // Colors
  bg?: BackgroundColorToken;
  backgroundColor?: BackgroundColorToken;
  color?: FontColorToken;
  borderColor?: StrokeColorToken;

  // Typography
  fontScale?: FontScaleToken;

  // Border
  borderRadius?: BorderRadiusToken;
  borderWidth?: BorderWidthToken;

  // Layout
  display?: DisplayToken;
  flexDirection?: FlexDirectionToken;
  flexWrap?: FlexWrapToken;
  alignItems?: AlignItemsToken;
  justifyContent?: JustifyContentToken;
  overflow?: OverflowToken;
  position?: PositionToken;

  // Elevation
  elevation?: ElevationToken;

  // Boolean
  withTruncatedText?: boolean;
  invisible?: boolean;
};

const rcxStylingPropNames = new Set<string>([
  'm', 'margin', 'mb', 'marginBlock', 'mbs', 'marginBlockStart',
  'mbe', 'marginBlockEnd', 'mi', 'marginInline', 'mis', 'marginInlineStart',
  'mie', 'marginInlineEnd', 'p', 'padding', 'pb', 'paddingBlock',
  'pbs', 'paddingBlockStart', 'pbe', 'paddingBlockEnd', 'pi', 'paddingInline',
  'pis', 'paddingInlineStart', 'pie', 'paddingInlineEnd',
  'w', 'width', 'h', 'height', 'minWidth', 'maxWidth', 'minHeight', 'maxHeight',
  'bg', 'backgroundColor', 'color', 'borderColor',
  'fontScale', 'borderRadius', 'borderWidth',
  'display', 'flexDirection', 'flexWrap', 'alignItems', 'justifyContent',
  'overflow', 'position', 'elevation', 'withTruncatedText', 'invisible',
]);

function resolveProps(
  defaults: Partial<RcxStylingProps>,
  overrides: Partial<RcxStylingProps>,
): string {
  const merged = { ...defaults, ...overrides };
  const classes: string[] = [];

  for (const [key, value] of Object.entries(merged)) {
    if (value === undefined) continue;
    const cls = resolveUtilityClass(key, value);
    if (cls) {
      classes.push(cls);
    } else if (process.env['NODE_ENV'] !== 'production') {
      console.warn(
        `[rcx] Unknown token value for "${key}": ${JSON.stringify(value)}. ` +
        `Only design system tokens are allowed.`,
      );
    }
  }

  return classes.join(' ');
}

/**
 * Create a token-enforced styled component.
 *
 * @example
 * const Card = rcx('div', { p: 'x16', bg: 'surface-tint', elevation: '1' });
 * <Card />                           // uses defaults
 * <Card p="x24" bg="surface-hover" /> // overrides at render time
 */
export function rcx<T extends ElementType>(
  type: T,
  defaults: Partial<RcxStylingProps> = {},
): ForwardRefExoticComponent<
  Omit<ComponentPropsWithRef<T>, keyof RcxStylingProps> &
    Partial<RcxStylingProps> &
    { className?: string }
> {
  const defaultClasses = resolveProps(defaults, {});

  const Component = forwardRef<any, any>(function RcxComponent(props, ref) {
    // Separate styling props from HTML props
    const htmlProps: Record<string, unknown> = {};
    const stylingOverrides: Record<string, unknown> = {};
    let hasOverrides = false;

    for (const [key, value] of Object.entries(props)) {
      if (rcxStylingPropNames.has(key) && value !== undefined) {
        stylingOverrides[key] = value;
        hasOverrides = true;
      } else {
        htmlProps[key] = value;
      }
    }

    const utilityClasses = hasOverrides
      ? resolveProps(defaults, stylingOverrides as Partial<RcxStylingProps>)
      : defaultClasses;

    const existingClassName = htmlProps['className'];
    const className = existingClassName
      ? `${existingClassName} ${utilityClasses}`
      : utilityClasses;

    return createElement(type, { ...htmlProps, ref, className });
  });

  Component.displayName = `rcx(${typeof type === 'string' ? type : type.displayName || type.name || 'Component'})`;

  return memo(Component) as any;
}

export default rcx;
