// Disabled this flag since we need to wrap multiple components
/* eslint-disable react/no-multi-comp */
import { useMergedRefs } from '@rocket.chat/fuselage-hooks';
import type {
  ReactNode,
  ForwardRefExoticComponent,
  Ref,
  RefAttributes,
} from 'react';
import { forwardRef } from 'react';
import { VisuallyHidden } from 'react-aria';

import {
  useFieldReferencedByInput,
  useFieldReferencedByLabel,
  useFieldWrappedByInputLabel,
} from '../Field/FieldContext';

type WithLabelId = { id?: string };

function withLabelId<TProps, TRef>(
  Component: ForwardRefExoticComponent<
    TProps & WithLabelId & RefAttributes<TRef>
  >,
) {
  const WrappedComponent = forwardRef<TRef, TProps>(function (props, ref) {
    const labelProps = useFieldReferencedByInput();
    return (
      <Component
        {...(props as TProps & WithLabelId)}
        {...labelProps}
        ref={ref}
      />
    );
  });

  WrappedComponent.displayName = `withLabelId(${Component.displayName ?? Component.name ?? 'InputComponent'})`;

  return WrappedComponent;
}

type WithLabelledBy = { 'aria-labelledby'?: string };

function withAriaLabelledBy<TProps, TRef>(
  Component: ForwardRefExoticComponent<
    TProps & WithLabelledBy & RefAttributes<TRef>
  >,
) {
  const WrappedComponent = forwardRef<TRef, TProps>(function (props, ref) {
    const labelProps = useFieldReferencedByLabel();
    return (
      <Component
        {...(props as TProps & WithLabelledBy)}
        {...labelProps}
        ref={ref}
      />
    );
  });

  WrappedComponent.displayName = `withAriaLabelledBy(${Component.displayName ?? Component.name ?? 'InputComponent'})`;

  return WrappedComponent;
}

type WithChildrenLabel = { labelChildren: ReactNode };

function withVisuallyHiddenLabel<TProps, TRef>(
  Component: ForwardRefExoticComponent<
    TProps & WithChildrenLabel & RefAttributes<TRef>
  >,
) {
  const WrappedComponent = forwardRef<TRef, TProps>(function (props, ref) {
    const [label, labelProps, labelRef] = useFieldWrappedByInputLabel();
    const mergedRef = useMergedRefs(ref, labelRef as Ref<TRef>);
    return (
      <Component
        {...(props as TProps & WithChildrenLabel)}
        {...labelProps}
        ref={mergedRef}
        labelChildren={<VisuallyHidden>{label}</VisuallyHidden>}
      />
    );
  });

  WrappedComponent.displayName = `withVisuallyHiddenLabel(${Component.displayName ?? Component.name ?? 'InputComponent'})`;

  return WrappedComponent;
}

export { withLabelId, withAriaLabelledBy, withVisuallyHiddenLabel };
