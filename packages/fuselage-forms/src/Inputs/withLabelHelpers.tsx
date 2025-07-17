// Disabled this flag since we need to wrap multiple components
/* eslint-disable react/no-multi-comp */
import type { ReactNode, ForwardRefExoticComponent } from 'react';
import { VisuallyHidden } from 'react-aria';

import {
  useFieldReferencedByInput,
  useFieldReferencedByLabel,
  useFieldWrappedByInputLabel,
} from '../Field/FieldContext';

function withLabelId<TProps>(
  Component: ForwardRefExoticComponent<TProps & { id?: string }>,
) {
  const WrappedComponent = function (props: TProps) {
    const labelProps = useFieldReferencedByInput();
    return <Component {...props} {...labelProps} />;
  };

  WrappedComponent.displayName = `withLabelId(${Component.displayName ?? Component.name ?? 'InputComponent'})`;

  return WrappedComponent;
}

function withAriaLabelledBy<TProps>(
  Component: ForwardRefExoticComponent<TProps & { 'aria-labelledby'?: string }>,
) {
  const WrappedComponent = function (props: TProps) {
    const labelProps = useFieldReferencedByLabel();
    return <Component {...props} {...labelProps} />;
  };

  WrappedComponent.displayName = `withAriaLabelledBy(${Component.displayName ?? Component.name ?? 'InputComponent'})`;

  return WrappedComponent;
}

function withVisuallyHiddenLabel<TProps>(
  Component: ForwardRefExoticComponent<TProps & { labelChildren: ReactNode }>,
) {
  const WrappedComponent = function (props: TProps) {
    const [label, labelProps] = useFieldWrappedByInputLabel();
    return (
      <Component
        {...props}
        {...labelProps}
        labelChildren={<VisuallyHidden>{label}</VisuallyHidden>}
      />
    );
  };

  WrappedComponent.displayName = `withVisuallyHiddenLabel(${Component.displayName ?? Component.name ?? 'InputComponent'})`;

  return WrappedComponent;
}

export { withLabelId, withAriaLabelledBy, withVisuallyHiddenLabel };
