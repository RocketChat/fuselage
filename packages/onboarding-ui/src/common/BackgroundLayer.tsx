import { css } from '@rocket.chat/css-in-js';
import colors from '@rocket.chat/fuselage-tokens/colors.json';
import { ReactElement, ReactNode, useMemo } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

import { useDarkMode } from '../hooks/useDarkMode';
import { useStyle } from '../hooks/useStyle';
import LowerCornerStripes from './BackgroundLayer/LowerCornerStripes';
import UpperCornerStripes from './BackgroundLayer/UpperCornerStripes';

type BackgroundLayerProps = {
  children?: ReactNode;
  forceDarkMode?: boolean;
};

const BackgroundLayer = ({
  children,
  forceDarkMode,
}: BackgroundLayerProps): ReactElement => {
  const darkMode = useDarkMode(forceDarkMode);

  const upperCorner = useMemo(
    () =>
      encodeURIComponent(
        renderToStaticMarkup(<UpperCornerStripes darkMode={darkMode} />)
      ),
    [darkMode]
  );

  const lowerCorner = useMemo(
    () =>
      encodeURIComponent(
        renderToStaticMarkup(<LowerCornerStripes darkMode={darkMode} />)
      ),
    [darkMode]
  );

  const backgroundColor = darkMode ? colors.n800 : colors.n200;

  const className = useStyle(
    css`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100vw;
      height: 100vh;
      background-color: ${backgroundColor};
      background-image: url('data:image/svg+xml,${lowerCorner}'),
        url('data:image/svg+xml,${upperCorner}');
      background-repeat: no-repeat;
      background-position: left bottom, right top;
    `
  );

  return <div className={className}>{children}</div>;
};

export default BackgroundLayer;
