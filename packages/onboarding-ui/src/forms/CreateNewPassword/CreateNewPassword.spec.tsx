import { render } from '@testing-library/react';
import { it } from 'vitest';

import CreateNewPassword from './CreateNewPassword.js';

it('renders without crashing', () => {
  render(
    <CreateNewPassword
      validatePasswordConfirmation={() => undefined}
      onSubmit={() => undefined}
      validatePassword={() => undefined}
    />,
  );
});
