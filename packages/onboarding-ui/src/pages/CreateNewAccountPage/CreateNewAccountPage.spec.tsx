import { render } from '@testing-library/react';
import { it } from 'vitest';

import CreateNewAccountPage from './CreateNewAccountPage.js';

it('renders without crashing', () => {
  render(
    <CreateNewAccountPage
      validateEmail={() => undefined}
      validatePassword={() => undefined}
      validateConfirmationPassword={() => undefined}
      onSubmit={() => undefined}
      onLogin={() => undefined}
    />,
  );
});
