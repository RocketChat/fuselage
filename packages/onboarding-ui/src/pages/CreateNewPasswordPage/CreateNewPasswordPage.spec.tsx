import { render } from '@testing-library/react';
import { it } from 'vitest';

import CreateNewPasswordPage from './CreateNewPasswordPage.js';

it('renders without crashing', () => {
  render(
    <CreateNewPasswordPage
      validatePassword={() => undefined}
      validatePasswordConfirmation={() => undefined}
      onSubmit={() => undefined}
      onLogin={() => undefined}
    />,
  );
});
