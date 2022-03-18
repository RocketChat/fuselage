import { Box, ProgressBar } from '@rocket.chat/fuselage';
import type { ReactElement } from 'react';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const sentences = [
  'Bringing rocket to launch position',
  'Loading rocket propellant',
  'Performing final go/no go poll with flight crew',
  'All systems nominal, switching to internal computer',
  'Beginning countdown, 5...4...3...2...1',
  'Transitioning to liftoff',
];

type LaunchingLoaderProps = {
  name: string;
  loadingSeconds?: number;
};

const LaunchingLoader = ({
  name,
  loadingSeconds = 90,
}: LaunchingLoaderProps): ReactElement => {
  const { t } = useTranslation();

  const [percentage, setPercentage] = useState(0);
  const [subtitleIndex, setSubtitleIndex] = useState(0);

  useEffect(() => {
    setPercentage(0);
    const interval = (loadingSeconds * 1000) / 100;
    console.log(interval);

    setInterval(() => {
      setPercentage((prev) => (prev >= 99 ? 99 : prev + 1));
    }, interval);
  }, [loadingSeconds]);

  useEffect(() => {
    switch (percentage) {
      case 0:
        setSubtitleIndex(0);
        break;

      case 25:
        setSubtitleIndex(1);
        break;

      case 40:
        setSubtitleIndex(2);
        break;

      case 55:
        setSubtitleIndex(3);
        break;

      case 70:
        setSubtitleIndex(4);
        break;

      case 85:
        setSubtitleIndex(5);
        break;

      default:
        break;
    }
  }, [percentage]);

  return (
    <>
      <Box fontScale='hero'>
        {t('page.launchingWorkspace.notReady.title', { name })}
      </Box>

      <Box fontScale='p1b'>{sentences[subtitleIndex]} 🚀</Box>

      <ProgressBar barColor='#1D74F5' percentage={percentage} />
    </>
  );
};

export default LaunchingLoader;
