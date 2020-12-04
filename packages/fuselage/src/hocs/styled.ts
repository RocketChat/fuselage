import { css } from '@rocket.chat/css-in-js';
import { ComponentType, createElement, FC } from 'react';

import { appendClassName } from '../helpers/appendClassName';
import { useStyle } from '../hooks/useStyle';

type PropsWithClassName = {
  className?: string;
};

const styled = <P extends PropsWithClassName>(component: ComponentType<P>) => (
  slices: TemplateStringsArray,
  ...values: unknown[]
): ComponentType<P> => {
  const style = css(slices, ...values);

  const StyledComponent: FC<P> = (props) => {
    const className = useStyle(style, props);

    return createElement(component, {
      ...props,
      className: appendClassName(props.className, className),
    });
  };

  StyledComponent.displayName = `styled(${
    component.name ?? component.displayName ?? 'Component'
  })`;

  return StyledComponent;
};

export default styled;
