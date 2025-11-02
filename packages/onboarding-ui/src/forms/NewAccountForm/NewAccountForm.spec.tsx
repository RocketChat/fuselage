import { render } from '@testing-library/react';

import NewAccountForm from './NewAccountForm.js';

it('renders without crashing', () => {
  render(
    <NewAccountForm
      validateEmail={() => undefined}
      validatePassword={() => undefined}
      validateConfirmationPassword={() => undefined}
      onSubmit={() => undefined}
    />,
  );
});
