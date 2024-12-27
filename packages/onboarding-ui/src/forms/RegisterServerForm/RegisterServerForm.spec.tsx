import { render } from '@testing-library/react';

import RegisterServerForm from './RegisterServerForm';

it('renders without crashing', () => {
  render(
    <RegisterServerForm
      currentStep={1}
      stepCount={1}
      validateEmail={() => true}
      onClickRegisterOffline={() => undefined}
      onSubmit={() => undefined}
    />,
  );
});
