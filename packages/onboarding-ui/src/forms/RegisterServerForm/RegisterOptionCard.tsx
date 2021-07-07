import { Divider, CheckBox, RadioButton, Box } from '@rocket.chat/fuselage';
import React, { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

import OptionCard from './OptionCard';

const RegisterOptionCard = (): ReactElement => {
  const { t } = useTranslation();
  return (
    <OptionCard onClick={() => undefined}>
      <OptionCard.Block>
        <OptionCard.Title>
          <RadioButton mie='x8' />
          {t('form.serverRegistrationForm.register.title')}
        </OptionCard.Title>
      </OptionCard.Block>
      <OptionCard.Block>
        <OptionCard.Description>
          {t('form.serverRegistrationForm.register.description')}
        </OptionCard.Description>
      </OptionCard.Block>
      <OptionCard.Block>
        <OptionCard.Subtitle>
          {t('form.serverRegistrationForm.register.subtitle')}
        </OptionCard.Subtitle>
        <OptionCard.List>
          <OptionCard.ListItem icon='check'>
            {t('form.serverRegistrationForm.register.included.push')}
          </OptionCard.ListItem>
          <OptionCard.ListItem icon='check'>
            {t('form.serverRegistrationForm.register.included.livechat')}
          </OptionCard.ListItem>
          <OptionCard.ListItem icon='check'>
            {t('form.serverRegistrationForm.register.included.oAuth')}
          </OptionCard.ListItem>
          <OptionCard.ListItem icon='check'>
            {t('form.serverRegistrationForm.register.included.apps')}
          </OptionCard.ListItem>
        </OptionCard.List>
      </OptionCard.Block>
      <Divider />
      <OptionCard.Block>
        <Box mbe='x8' display='block' color='info' fontScale='c1'>
          <CheckBox mie='x8' />{' '}
          {t('form.serverRegistrationForm.register.includeUpdates')}
        </Box>
        <Box color='default' fontScale='c1'>
          <CheckBox mie='x8' />{' '}
          {t('form.serverRegistrationForm.register.agreement')}
        </Box>
      </OptionCard.Block>
    </OptionCard>
  );
};

export default RegisterOptionCard;
