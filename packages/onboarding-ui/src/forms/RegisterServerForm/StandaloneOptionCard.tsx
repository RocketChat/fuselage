import { RadioButton } from '@rocket.chat/fuselage';
import React, { ReactElement } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import OptionCard from './OptionCard';

const RegisterOptionCard = (): ReactElement => {
  const { t } = useTranslation();

  const { register, setValue } = useFormContext();

  const onClickCard = () => {
    setValue('registerType', 'standalone');
  };

  const selected = useWatch({ name: 'registerType' }) === 'standalone';

  return (
    <OptionCard selected={selected} onClick={onClickCard}>
      <OptionCard.Block>
        <OptionCard.Title>
          <RadioButton
            {...register('registerType')}
            mie='x8'
            value='standalone'
          />
          {t('form.serverRegistrationForm.standalone.title')}
        </OptionCard.Title>
      </OptionCard.Block>
      <OptionCard.Block>
        <OptionCard.Description>
          {t('form.serverRegistrationForm.standalone.description')}
        </OptionCard.Description>
        <OptionCard.List listStyle='inside' spacing='x2' color='info'>
          <OptionCard.ListItem>
            {t('form.serverRegistrationForm.standalone.actionList.accounts')}
          </OptionCard.ListItem>
          <OptionCard.ListItem>
            {t('form.serverRegistrationForm.standalone.actionList.settings')}
          </OptionCard.ListItem>
          <OptionCard.ListItem>
            {t('form.serverRegistrationForm.standalone.actionList.mobile')}
          </OptionCard.ListItem>
        </OptionCard.List>
      </OptionCard.Block>
    </OptionCard>
  );
};

export default RegisterOptionCard;
