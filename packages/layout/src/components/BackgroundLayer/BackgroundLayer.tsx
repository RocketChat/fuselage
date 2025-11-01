import colors from '@rocket.chat/fuselage-tokens/colors.json' with { type: 'json' };
import type { ReactElement, ReactNode } from 'react';
import { useMemo } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

import { useDarkMode } from '../../DarkModeProvider.js';
import { useLayoutContext } from '../../contexts/LayoutContext.js';

import BackgroundImage from './BackgroundImage.js';
import { Wrapper } from './BackgroundLayer.styles.js';

type BackgroundLayerProps = {
  children?: ReactNode;
};

const BackgroundLayer = ({ children }: BackgroundLayerProps): ReactElement => {
  const { background, backgroundDark = background } = useLayoutContext();
  const darkMode = useDarkMode();
  const backgroundColor = darkMode ? colors.n800 : colors.n200;
  const color = darkMode ? colors.white : colors.n800;
  const backgroundImage = useMemo(
    () =>
      (darkMode ? backgroundDark : background) ||
      `data:image/svg+xml,${encodeURIComponent(
        renderToStaticMarkup(
          <BackgroundImage backgroundColor={backgroundColor} />,
        ),
      )}`,
    [background, backgroundColor, backgroundDark, darkMode],
  );

  return (
    <Wrapper
      color={color}
      backgroundImage={backgroundImage}
      backgroundColor={backgroundColor}
    >
      {children}
    </Wrapper>
  );
};

export default BackgroundLayer;
