import { render } from '@testing-library/react';
import { it } from 'vitest';

import RegisterServerPage from './RegisterServerPage.js';

it('renders without crashing', () => {
  render(
    <RegisterServerPage
      currentStep={1}
      stepCount={1}
      onSubmit={() => undefined}
      onClickRegisterOffline={() => undefined}
    />,
  );
});
