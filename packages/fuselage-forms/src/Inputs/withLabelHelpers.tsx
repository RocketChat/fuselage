// Disabled this flag since we need to wrap multiple components
/* eslint-disable react/no-multi-comp */
import type { ForwardRefExoticComponent } from 'react';
import { VisuallyHidden } from 'react-aria';

import {
  useFieldReferencedByInput,
  useFieldReferencedByLabel,
  useFieldWrappedByInputLabel,
} from '../Field/FieldContext.js';

export type WithLabelId = { id?: string };

function withLabelId<TProps>(
  Component: ForwardRefExoticComponent<TProps & WithLabelId>,
) {
  const WrappedComponent = function (props: TProps) {
    const labelProps = useFieldReferencedByInput();
    return <Component {...props} {...labelProps} />;
  };

  WrappedComponent.displayName = `withLabelId(${Component.displayName ?? Component.name ?? 'InputComponent'})`;

  return WrappedComponent;
}

type WithLablledBy = { 'aria-labelledby'?: string };

function withAriaLabelledBy<TProps>(
  Component: ForwardRefExoticComponent<TProps & WithLablledBy>,
) {
  const WrappedComponent = function (props: TProps) {
    const labelProps = useFieldReferencedByLabel();
    return <Component {...props} {...labelProps} />;
  };

  WrappedComponent.displayName = `withAriaLabelledBy(${Component.displayName ?? Component.name ?? 'InputComponent'})`;

  return WrappedComponent;
}

type WithChildrenLabel = { labelChildren: JSX.Element };

function withVisuallyHiddenLabel<TProps>(
  Component: ForwardRefExoticComponent<TProps & WithChildrenLabel>,
) {
  const WrappedComponent = function (props: TProps) {
    const [label, labelProps, labelRef] = useFieldWrappedByInputLabel();
    return (
      <Component
        {...props}
        {...labelProps}
        ref={labelRef}
        labelChildren={<VisuallyHidden>{label}</VisuallyHidden>}
      />
    );
  };

  WrappedComponent.displayName = `withVisuallyHiddenLabel(${Component.displayName ?? Component.name ?? 'InputComponent'})`;

  return WrappedComponent;
}

export { withLabelId, withAriaLabelledBy, withVisuallyHiddenLabel };
