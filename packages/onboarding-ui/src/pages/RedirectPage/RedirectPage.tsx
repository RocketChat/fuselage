import { Box, Margins } from '@rocket.chat/fuselage';
import { ActionLink, LayoutLogo, BackgroundLayer } from '@rocket.chat/layout';
import type { ReactElement } from 'react';
import { useEffect, useState } from 'react';
import { useTranslation, Trans } from 'react-i18next';

type RedirectPageProps = {
  title: string;
  countDownSeconds: number;
  onRedirect: () => void;
};

const RedirectPage = ({
  title,
  countDownSeconds,
  onRedirect,
}: RedirectPageProps): ReactElement => {
  const { t } = useTranslation();

  const [seconds, setSeconds] = useState(countDownSeconds);

  useEffect(() => {
    if (seconds === 0) return;

    const timer = setInterval(() => {
      setSeconds((prev) => Math.max(0, prev - 1));
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    if (seconds === 0) onRedirect();
  }, [seconds]);

  return (
    <BackgroundLayer>
      <Box
        display='flex'
        flexDirection='column'
        alignItems='center'
        textAlign='center'
        width='100%'
        maxWidth={768}
        paddingBlock={32}
        paddingInline={16}
      >
        <Margins blockEnd={32}>
          <LayoutLogo.LayoutLogo />

          <Box fontScale='hero'>{title}</Box>

          <Box fontScale='p1b'>{t('page.redirect.subtitle', { seconds })}</Box>

          <Box fontScale='c1'>
            <Trans i18nKey='page.redirect.redirectNotWorking'>
              Redirect not working?
              <ActionLink onClick={onRedirect}>Open workspace</ActionLink>
            </Trans>
          </Box>
        </Margins>
      </Box>
    </BackgroundLayer>
  );
};

export default RedirectPage;
