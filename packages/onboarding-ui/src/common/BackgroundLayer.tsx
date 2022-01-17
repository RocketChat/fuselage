import colors from '@rocket.chat/fuselage-tokens/colors.json';
import { ReactElement, ReactNode, useMemo } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

import { Wrapper } from './BackgroundLayer.styles';
import BackgroundImage from './BackgroundLayer/BackgroundImage';
import { useDarkMode } from './DarkModeProvider';

type BackgroundLayerProps = {
  children?: ReactNode;
  context?: string;
};

const BackgroundLayer = ({
  children,
  context,
}: BackgroundLayerProps): ReactElement => {
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
      context={context}
    >
      {children}
    </Wrapper>
  );
};

export default BackgroundLayer;
