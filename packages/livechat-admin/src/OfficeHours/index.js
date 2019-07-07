import React from 'react';
import { useForm, useField } from 'react-final-form-hooks';
import {
  Button,
  ButtonGroup,
  CheckBox,
  Form,
  FormItem,
  FormLabel,
  Grid,
  TextInput,
  useUniqueId,
} from '@rocket.chat/fuselage';

import { Shell } from '../Shell';


function OfficeHourDay({ label, disabled, enabledField, startField, endField }) {
  const openId = useUniqueId();
  const closeId = useUniqueId();

  return <Grid container outsideGutter={false} justification="flex-start">
    <Grid item md={3}>
      <CheckBox
        label={label}
        {...enabledField.input}
        disabled={disabled}
        checked={enabledField.input.value}
        value="true"
      />
    </Grid>
    <Grid item md={2}>
      <FormItem>
        <FormLabel htmlFor={openId}>Open</FormLabel>
        <TextInput
          {...startField.input}
          id={openId}
          type="time"
          disabled={disabled || !enabledField.input.value}
        />
      </FormItem>
    </Grid>
    <Grid item md={2}>
      <FormItem>
        <FormLabel htmlFor={closeId}>Close</FormLabel>
        <TextInput
          {...endField.input}
          id={closeId}
          type="time"
          disabled={disabled || !enabledField.input.value}
        />
      </FormItem>
    </Grid>
  </Grid>;
}

export function OfficeHours({ onSubmit = () => {}, ...props }) {
  const { form, handleSubmit, pristine, modified, invalid, submitting } = useForm({
    onSubmit,
  });

  const officeHoursEnabled = useField('enableOfficeHours', form);
  const allowOnlineAgentsOutsideOfOfficeHours = useField('allowAgentsOnlineOutOfficeHours', form);

  const fields = [
    {
      label: 'Sunday',
      enabledField: useField('Sunday_open', form),
      startField: useField('Sunday_start', form),
      endField: useField('Sunday_end', form),
    },
    {
      label: 'Monday',
      enabledField: useField('Monday_open', form),
      startField: useField('Monday_start', form),
      endField: useField('Monday_end', form),
    },
    {
      label: 'Tuesday',
      enabledField: useField('Tuesday_open', form),
      startField: useField('Tuesday_start', form),
      endField: useField('Tuesday_end', form),
    },
    {
      label: 'Wednesday',
      enabledField: useField('Wednesday_open', form),
      startField: useField('Wednesday_start', form),
      endField: useField('Wednesday_end', form),
    },
    {
      label: 'Thursday',
      enabledField: useField('Thursday_open', form),
      startField: useField('Thursday_start', form),
      endField: useField('Thursday_end', form),
    },
    {
      label: 'Friday',
      enabledField: useField('Friday_open', form),
      startField: useField('Friday_start', form),
      endField: useField('Friday_end', form),
    },
    {
      label: 'Saturday',
      enabledField: useField('Saturday_open', form),
      startField: useField('Saturday_start', form),
      endField: useField('Saturday_end', form),
    },
  ];

  const handleSaveClick = () => {
    form.submit();
  };

  return (
    <Shell title="Office Hours" url="/office-hours" headerChildren={<ButtonGroup>
      <Button
        primary
        disabled={pristine || !modified || invalid || submitting}
        onClick={handleSaveClick}
      >
        Save
      </Button>
    </ButtonGroup>} is={Form} onSubmit={handleSubmit} {...props}>
      <Grid container>
        <Grid item md>
          <FormItem>
            <CheckBox
              label="Office Hours Enabled"
              {...officeHoursEnabled.input}
              checked={officeHoursEnabled.input.value}
              value="true"
            />
          </FormItem>

          <FormItem>
            <CheckBox
              label="Allow online agents outside of office hours"
              {...allowOnlineAgentsOutsideOfOfficeHours.input}
              disabled={!officeHoursEnabled.input.value}
              checked={allowOnlineAgentsOutsideOfOfficeHours.input.value}
              value="true"
            />
          </FormItem>

          {fields.map(({ label, enabledField, startField, endField }) => <OfficeHourDay
            key={label}
            label={label}
            disabled={!officeHoursEnabled.input.value}
            enabledField={enabledField}
            startField={startField}
            endField={endField}
          />)}
        </Grid>
      </Grid>
    </Shell>
  );
}
