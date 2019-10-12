import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import defaultTheme from '../styles/variables';

export const withTheme = (Component) => {
  const ThemedComponent = React.forwardRef((props, ref) => {
    const theme = useContext(ThemeContext) || defaultTheme;

    return <Component ref={ref} theme={theme} {...props} />;
  });

  ThemedComponent.displayName = `Themed.${ Component.displayName || Component.name || 'Component' }`;

  return ThemedComponent;
};
