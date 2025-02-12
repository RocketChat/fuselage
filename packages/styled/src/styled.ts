import {
  attachRules,
  createClassName,
  css,
  escapeName,
  transpile,
} from '@rocket.chat/css-in-js';
import type {
  DetailedHTMLProps,
  ForwardRefExoticComponent,
  ForwardRefRenderFunction,
  HTMLAttributes,
  PropsWithoutRef,
  RefAttributes,
  SVGProps,
} from 'react';
import {
  createElement,
  forwardRef,
  Fragment,
  useDebugValue,
  useInsertionEffect,
} from 'react';

export const attachClassName = <P extends { className?: string }>(
  props: P,
  additionalClassName: string,
): P => ({
  ...props,
  className: props.className
    ? `${props.className} ${additionalClassName}`
    : additionalClassName,
});

type RefTypes = {
  [K in keyof JSX.IntrinsicElements]: JSX.IntrinsicElements[K] extends DetailedHTMLProps<
    HTMLAttributes<infer T>,
    any
  >
    ? T
    : JSX.IntrinsicElements[K] extends SVGProps<infer T>
      ? T
      : never;
};

const styled =
  <K extends keyof JSX.IntrinsicElements, P>(
    type: K,
    filter?: (
      p: PropsWithoutRef<JSX.IntrinsicElements[K] & P>,
    ) => JSX.IntrinsicElements[K],
  ) =>
  (
    slices: TemplateStringsArray,
    ...values: readonly (string | ((props: P) => string))[]
  ): ForwardRefExoticComponent<
    PropsWithoutRef<JSX.IntrinsicElements[K] & P> & RefAttributes<RefTypes[K]>
  > => {
    const cssFn = css(slices, ...values);
    const fn: ForwardRefRenderFunction<
      RefTypes[K],
      PropsWithoutRef<JSX.IntrinsicElements[K] & P>
    > = typeof window === 'undefined'
      ? (props, ref) => {
          const content = cssFn(props);
          const computedClassName = createClassName(content);
          const escapedClassName = escapeName(computedClassName);
          const transpiledContent = transpile(`.${escapedClassName}`, content);

          const newProps = attachClassName(
            { ref, ...props },
            computedClassName,
          );

          return createElement(
            Fragment,
            {},
            createElement('style', {}, transpiledContent),
            createElement(type, filter ? filter(newProps) : newProps),
          );
        }
      : (props, ref) => {
          const content = cssFn(props);
          const computedClassName = createClassName(content);

          useDebugValue(computedClassName);

          useInsertionEffect(() => {
            const escapedClassName = escapeName(computedClassName);
            const transpiledContent = transpile(
              `.${escapedClassName}`,
              content,
            );
            const detach = attachRules(transpiledContent);

            return () => {
              setTimeout(detach, 1000);
            };
          }, [computedClassName, content]);

          const newProps = attachClassName(
            { ref, ...props },
            computedClassName,
          );
          return createElement(type, filter ? filter(newProps) : newProps);
        };

    const component = forwardRef(fn);
    component.displayName = `StyledComponent(${type})`;
    return component;
  };

export default styled;
