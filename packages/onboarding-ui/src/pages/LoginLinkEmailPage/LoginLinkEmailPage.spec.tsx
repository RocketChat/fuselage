import { render } from '@testing-library/react';
import { it } from 'vitest';

import LoginLinkEmailPage from './LoginLinkEmailPage.js';

it('renders without crashing', () => {
  render(
    <LoginLinkEmailPage
      onResendEmailRequest={() => undefined}
      onChangeEmailRequest={() => undefined}
    />,
  );
});
