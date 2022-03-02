import type { SelectOptions } from '@rocket.chat/fuselage';
import { fireEvent, render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import '@testing-library/jest-dom';

import RequestTrialForm from './RequestTrialForm';

const organizationSizeOptions: SelectOptions = [['0', '1-10 people']];
const countryOptions: SelectOptions = [['worldwide', 'Worldwide']];
const onSubmit = jest.fn();
const validateCorporateEmail = jest.fn();
const onManageWorkspaces = jest.fn();
const defaultValues = {
  email: '',
  organizationName: 'RocketChat',
  organizationSize: '0',
  country: 'worldwide',
  updates: true,
  agreement: true,
};

describe('RequestTrialForm', () => {
  it('renders without crashing', () => {
    render(
      <RequestTrialForm
        defaultValues={defaultValues}
        onSubmit={onSubmit}
        countryOptions={countryOptions}
        organizationSizeOptions={organizationSizeOptions}
        validateEmail={validateCorporateEmail}
        onManageWorkspaceClick={onManageWorkspaces}
      />
    );
  });

  it('enables Request Trial button organization form is fulfilled', async () => {
    validateCorporateEmail.mockReturnValueOnce(true);

    const component = await render(
      <RequestTrialForm
        defaultValues={defaultValues}
        onSubmit={onSubmit}
        countryOptions={countryOptions}
        organizationSizeOptions={organizationSizeOptions}
        validateEmail={validateCorporateEmail}
        onManageWorkspaceClick={onManageWorkspaces}
      />
    );

    const submit = await component.findByTestId('submit');
    const emailInput = await component.findByTestId('emailInput');
    await userEvent.type(emailInput, 'test11@rocket.chat');
    // console.log(emailInput);

    await waitFor(() => {
      expect(submit).not.toHaveProperty('disabled');
    });
  });

  it.skip('enables Request Trial button organization form is fulfilled', async () => {
    const component = await render(
      <RequestTrialForm
        defaultValues={defaultValues}
        onSubmit={onSubmit}
        countryOptions={countryOptions}
        organizationSizeOptions={organizationSizeOptions}
        validateEmail={validateCorporateEmail}
        onManageWorkspaceClick={onManageWorkspaces}
      />
    );
    const checkboxUpdates = component.getByTestId(
      'request-trial-form-checkbox-updates'
    );
    const checkboxAgreement = component.getByTestId(
      'request-trial-form-checkbox-agreement'
    );
    fireEvent.click(checkboxUpdates);
    fireEvent.click(checkboxAgreement);
    const name = await component.getByTestId('request-trial-form-name');
    fireEvent.change(name, { target: { value: 'rocket' } });
    const button = await component.getByTestId(
      'request-trial-form-submit-button'
    );
    console.log(button);

    await waitFor(() => {
      expect(button).not.toHaveProperty('disabled');
    });
  });
});
