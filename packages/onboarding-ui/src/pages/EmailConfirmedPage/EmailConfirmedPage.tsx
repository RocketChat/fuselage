import { Box, Margins } from '@rocket.chat/fuselage';
import { useDarkMode } from '@rocket.chat/fuselage-hooks';
import colors from '@rocket.chat/fuselage-tokens/colors.json';
import { FC } from 'react';

import BackgroundLayer from '../../common/BackgroundLayer';
import RocketChatLogo from '../../common/RocketChatLogo';

const EmailConfirmedPage: FC<{
  title?: string;
  subtitle?: string;
  forceDarkMode?: boolean;
}> = ({ title, subtitle, forceDarkMode }) => {
  const darkMode = useDarkMode(forceDarkMode);
  const color = darkMode ? colors.white : colors.n900;

  return (
    <BackgroundLayer forceDarkMode={forceDarkMode}>
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
