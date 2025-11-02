import { render } from '@testing-library/react';

import ResetPasswordPage from './ResetPasswordPage.js';

it('renders without crashing', () => {
  render(
    <ResetPasswordPage
      validateEmail={() => undefined}
      onSubmit={() => undefined}
      onLogin={() => undefined}
    />,
  );
});
