import {
  attachRules,
  createClassName,
  css,
  escapeName,
  transpile,
} from '@rocket.chat/css-in-js';
import {
  createElement,
  DetailedHTMLProps,
  forwardRef,
  ForwardRefExoticComponent,
  Fragment,
  HTMLAttributes,
  PropsWithoutRef,
  Ref,
  RefAttributes,
  SVGProps,
  useDebugValue,
  useLayoutEffect,
} from 'react';

export const attachClassName = <P extends { className?: string }>(
  props: P,
  additionalClassName: string
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

type PropsTypes = {
  [K in keyof JSX.IntrinsicElements]: JSX.IntrinsicElements[K];
};

const styled = <K extends keyof JSX.IntrinsicElements, P>(
  type: K,
  filter?: (p: P) => PropsTypes[K]
) => (
  slices: TemplateStringsArray,
  ...values: readonly (string | ((props: P) => string))[]
): ForwardRefExoticComponent<
  PropsWithoutRef<PropsTypes[K] & P> & RefAttributes<RefTypes[K]>
> => {
  const cssFn = css(slices, ...values);
  const fn =
    typeof window === 'undefined'
      ? {
          [type](props: PropsTypes[K] & P, ref: Ref<RefTypes[K]>) {
            const content = cssFn(props);
            const computedClassName = createClassName(content);
            const escapedClassName = escapeName(computedClassName);
            const transpiledContent = transpile(
              `.${escapedClassName}`,
              content
            );

            const newProps = attachClassName(
              { ref, ...props },
              computedClassName
            );

            return createElement(
              Fragment,
              {},
              createElement('style', {}, transpiledContent),
              createElement(type, filter ? filter(newProps) : newProps)
            );
          },
        }
      : {
          [type](props: PropsTypes[K] & P, ref: Ref<RefTypes[K]>) {
            const content = cssFn(props);
            const computedClassName = createClassName(content);

            useDebugValue(computedClassName);

            useLayoutEffect(() => {
              const escapedClassName = escapeName(computedClassName);
              const transpiledContent = transpile(
                `.${escapedClassName}`,
                content
              );
              const detach = attachRules(transpiledContent);

              return () => {
                setTimeout(detach, 1000);
              };
            }, [computedClassName, content]);

            const newProps = attachClassName(
              { ref, ...props },
              computedClassName
            );
            return createElement(type, filter ? filter(newProps) : newProps);
          },
        };

  const component = forwardRef(fn[type]);
  component.displayName = `StyledComponent(${type})`;
  return component;
};

export default styled;
