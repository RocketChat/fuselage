import { render } from '@testing-library/react';
import { it } from 'vitest';

import RegisterOfflinePage from './index.js';

it('renders without crashing', () => {
  render(
    <RegisterOfflinePage
      termsHref=''
      policyHref=''
      clientKey=''
      onSubmit={() => undefined}
      onCopySecurityCode={() => undefined}
      onBackButtonClick={() => undefined}
    />,
  );
});
