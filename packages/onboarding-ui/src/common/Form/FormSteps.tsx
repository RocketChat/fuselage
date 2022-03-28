import Box from '@rocket.chat/fuselage';
import type { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

type FormStepsProps = {
  currentStep: number;
  stepCount: number;
};

const FormSteps = ({
  currentStep,
  stepCount,
}: FormStepsProps): ReactElement => {
  const { t } = useTranslation();

  return (
    <Box mbe='x8' fontScale='c2' color='neutral-600'>
      {t('component.form.steps', { currentStep, stepCount })}
    </Box>
  );
};

export default FormSteps;
