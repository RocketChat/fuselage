import { render } from '@testing-library/react';
import { it } from 'vitest';

import AwaitingConfirmationPage from './AwaitingConfirmationPage.js';

it('renders without crashing', () => {
  render(
    <AwaitingConfirmationPage
      currentStep={4}
      stepCount={4}
      securityCode=''
      emailAddress=''
      onResendEmailRequest={() => undefined}
      onChangeEmailRequest={() => undefined}
    />,
  );
});
