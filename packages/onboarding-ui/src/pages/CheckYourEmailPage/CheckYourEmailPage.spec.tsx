import { render } from '@testing-library/react';
import { it } from 'vitest';

import CheckYourEmailPage from './CheckYourEmailPage.js';

it('renders without crashing', () => {
  render(
    <CheckYourEmailPage
      onResendEmailRequest={() => undefined}
      onChangeEmailRequest={() => undefined}
    />,
  );
});
