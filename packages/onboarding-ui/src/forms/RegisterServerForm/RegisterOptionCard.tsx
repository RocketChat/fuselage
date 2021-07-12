import { Divider, CheckBox, RadioButton, Box } from '@rocket.chat/fuselage';
import React, { ReactElement, useEffect } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import { useTranslation, Trans } from 'react-i18next';

import OptionCard from './OptionCard';
import type { ExternalLinks } from './RegisterServerForm';

const RegisterOptionCard = ({
  agreementHref,
  policyHref,
}: ExternalLinks): ReactElement => {
  const { t } = useTranslation();

  const { register, setValue } = useFormContext();

  const onClickCard = () => {
    setValue('registerType', 'registered');
  };

  const selected = useWatch({ name: 'registerType' }) === 'registered';

  useEffect(() => {
    if (!selected) {
      setValue('agreement', false);
      setValue('updates', false);
    }
  }, [selected, setValue]);

  return (
    <OptionCard selected={selected} onClick={onClickCard}>
      <OptionCard.Block>
        <OptionCard.Title>
          <RadioButton
            {...register('registerType')}
            mie='x8'
            value='registered'
          />
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
          <CheckBox mie='x8' disabled={!selected} {...register('updates')} />{' '}
          <label htmlFor='updates'>
            {t('form.serverRegistrationForm.register.includeUpdates')}
          </label>
        </Box>
        <Box color='default' fontScale='c1'>
          <CheckBox mie='x8' disabled={!selected} {...register('agreement')} />{' '}
          <label htmlFor='agreement'>
            <Trans i18nKey='form.serverRegistrationForm.register.agreement'>
              I agree with
              <OptionCard.Link href={agreementHref}>
                Terms and Conditions
              </OptionCard.Link>
              and
              <OptionCard.Link href={policyHref}>
                Privacy Policy
              </OptionCard.Link>
            </Trans>
          </label>
        </Box>
      </OptionCard.Block>
    </OptionCard>
  );
};

export default RegisterOptionCard;
