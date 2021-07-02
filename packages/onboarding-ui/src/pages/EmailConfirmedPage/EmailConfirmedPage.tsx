import { Box, Margins } from '@rocket.chat/fuselage';
import colors from '@rocket.chat/fuselage-tokens/colors.json';
import { FC } from 'react';

import BackgroundLayer from '../../common/BackgroundLayer';
import { useDarkMode } from '../../common/DarkModeProvider';
import RocketChatLogo from '../../common/RocketChatLogo';

type EmailConfirmedPageProps = {
  title?: string;
  subtitle?: string;
};

const EmailConfirmedPage: FC<{
  title?: string;
  subtitle?: string;
  forceDarkMode?: boolean;
}> = ({ title, subtitle }: EmailConfirmedPageProps) => {
  const darkMode = useDarkMode();
  const color = darkMode ? colors.white : colors.n900;

  return (
    <BackgroundLayer>
      <Box
        display='flex'
        flexDirection='column'
        alignItems='center'
        textAlign='center'
        maxWidth='523px'
      >
        <Margins blockEnd='x32'>
          <Box width='x180'>
            <RocketChatLogo />
          </Box>

          {title && (
            <Box fontWeight={800} fontSize='x32' color={color}>
              {title}
            </Box>
          )}

          {subtitle && (
            <Box fontScale='s1' color={color}>
              {subtitle}
            </Box>
          )}
        </Margins>
      </Box>
    </BackgroundLayer>
  );
};

export default EmailConfirmedPage;
