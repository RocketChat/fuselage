import colors from '@rocket.chat/fuselage-tokens/colors.json';
import { Wrapper } from '@rocket.chat/layout/src/BackgroundLayer.styles';
import BackgroundImage from '@rocket.chat/layout/src/BackgroundLayer/BackgroundImage';
import { useDarkMode } from '@rocket.chat/layout/src/DarkModeProvider';
import type { ReactElement, ReactNode } from 'react';
import { useMemo } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

type BackgroundLayerProps = {
  children?: ReactNode;
};

const BackgroundLayer = ({ children }: BackgroundLayerProps): ReactElement => {
  const darkMode = useDarkMode();
  const backgroundColor = darkMode ? colors.n800 : colors.n200;
  const color = darkMode ? colors.white : colors.n800;
  const backgroundImage = useMemo(
    () =>
      encodeURIComponent(
        renderToStaticMarkup(
          <BackgroundImage backgroundColor={backgroundColor} />
        )
      ),
    [backgroundColor]
  );

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
