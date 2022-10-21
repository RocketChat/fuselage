import { Box, Margins, ProgressBar } from '@rocket.chat/fuselage';
import { BackgroundLayer, LayoutLogo } from '@rocket.chat/layout';
import type { ReactElement } from 'react';
import { useEffect, useState } from 'react';

type LoaderPageProps = {
  title: string;
  subtitles: string[];
  isReady: boolean;
  loadingSeconds?: number;
};

const LoaderPage = ({
  title,
  subtitles,
  isReady = false,
  loadingSeconds = 90,
}: LoaderPageProps): ReactElement => {
  const timeFraction = 100 / subtitles.length;

  const [percentage, setPercentage] = useState(0);
  const [subtitleIndex, setSubtitleIndex] = useState(0);

  const progressHandler = () => {
    const interval = (loadingSeconds * 1000) / 100;
    setInterval(() => {
      setPercentage((prev) => (prev === 99 ? 99 : prev + 1));
    }, interval);
  };

  useEffect(() => {
    if (isReady) setPercentage(100);
    else progressHandler();
  }, [isReady]);

  useEffect(() => {
    // Change subtitle according to percentage
    const index = Math.floor(percentage / timeFraction);
    if (index !== subtitleIndex) setSubtitleIndex(index);
  }, [percentage]);

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

          <Box fontScale='p1b'>{subtitles[subtitleIndex]}</Box>

          <ProgressBar barColor='#1D74F5' percentage={percentage} />
        </Margins>
      </Box>
    </BackgroundLayer>
  );
};

export default LoaderPage;
