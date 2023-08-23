import type { Context, ReactElement } from 'react';
import { useContext } from 'react';

type WithErrorWrapperProps<T> = {
  context: Context<T>;
  children: ReactElement;
  componentName: string;
  parentComponent: 'Field';
};

function WithErrorWrapper<T>({
  context,
  componentName,
  children,
  parentComponent,
}: WithErrorWrapperProps<T>) {
  const isInsideParent = useContext(context);
  if (!isInsideParent) {
    throw new Error(
      `${componentName} should be used as children of ${parentComponent} Component`
    );
  }

  return children;
}

export default WithErrorWrapper;
