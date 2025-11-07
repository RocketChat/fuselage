import { render } from '@testing-library/react';
import { it } from 'vitest';

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
