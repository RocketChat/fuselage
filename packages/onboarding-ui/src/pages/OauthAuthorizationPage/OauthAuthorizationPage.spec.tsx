import { render } from '@testing-library/react';
import { it } from 'vitest';

import OauthAuthorizationPage from './OauthAuthorizationPage.js';

it('renders without crashing', () => {
  render(
    <OauthAuthorizationPage
      clientName={undefined}
      onClickAuthorizeOAuth={() => undefined}
      error={{
        message: undefined,
        onGoBack: () => undefined,
      }}
    />,
  );
});
