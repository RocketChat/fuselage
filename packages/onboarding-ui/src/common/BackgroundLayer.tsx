import { useDarkMode } from '@rocket.chat/fuselage-hooks';
import colors from '@rocket.chat/fuselage-tokens/colors.json';
import { ReactElement, ReactNode, useMemo } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

import { Wrapper } from './BackgroundLayer.styles';
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

  return (
    <Wrapper
      backgroundColor={backgroundColor}
      lowerCorner={lowerCorner}
      upperCorner={upperCorner}
    >
      {children}
    </Wrapper>
  );
};

export default BackgroundLayer;
