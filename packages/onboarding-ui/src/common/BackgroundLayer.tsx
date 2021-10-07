import colors from '@rocket.chat/fuselage-tokens/colors.json';
import { ReactElement, ReactNode, useMemo } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

import { Wrapper } from './BackgroundLayer.styles';
import BackgroundImage from './BackgroundLayer/BackgroundImage';
import { useDarkMode } from './DarkModeProvider';

type BackgroundLayerProps = {
  children?: ReactNode;
};

const BackgroundLayer = ({ children }: BackgroundLayerProps): ReactElement => {
  const darkMode = useDarkMode();

  const backgroundImage = useMemo(
    () => encodeURIComponent(renderToStaticMarkup(<BackgroundImage />)),
    []
  );

  const backgroundColor = darkMode ? colors.n800 : colors.n200;
  const color = darkMode ? colors.white : colors.n800;

  return (
    <Wrapper
      backgroundColor={backgroundColor}
      color={color}
      backgroundImage={backgroundImage}
    >
      {children}
    </Wrapper>
  );
};

export default BackgroundLayer;
