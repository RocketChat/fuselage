import { render } from '@testing-library/react';
import { it } from 'vitest';

import LoginPage from './LoginPage.js';

it('renders without crashing', () => {
  render(
    <LoginPage
      isMfa={false}
      initialValues={undefined}
      onChangeForm={() => undefined}
      onResetPassword={() => undefined}
      onSubmit={() => undefined}
      isPasswordLess={false}
      onCreateAccount={() => undefined}
    />,
  );
});
