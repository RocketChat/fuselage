import { render } from '@testing-library/react';
import { it } from 'vitest';

import ResetPasswordForm from './ResetPasswordForm.js';

it('renders without crashing', () => {
  render(
    <ResetPasswordForm
      onSubmit={() => undefined}
      validateEmail={() => undefined}
    />,
  );
});
