import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import defaultTheme from '../styles/variables';

export const useTheme = () => useContext(ThemeContext) || defaultTheme;
