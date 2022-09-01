import colors from '@rocket.chat/fuselage-tokens/colors.json';
import type { ReactElement, ReactNode } from 'react';
import { useMemo } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

import { useDarkMode } from '../DarkModeProvider';
import { useLayoutContext } from '../contexts/LayoutContext';
import BackgroundImage from './BackgroundImage';
import { Wrapper } from './BackgroundLayer.styles';

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
          <BackgroundImage backgroundColor={backgroundColor} />
        )
      )}`,
    [backgroundColor]
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
