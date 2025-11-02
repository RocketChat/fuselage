import { render } from '@testing-library/react';

import LoginLinkEmailPage from './LoginLinkEmailPage.js';

it('renders without crashing', () => {
  render(
    <LoginLinkEmailPage
      onResendEmailRequest={() => undefined}
      onChangeEmailRequest={() => undefined}
    />,
  );
});
