import { render } from '@testing-library/react';
import { it } from 'vitest';

import LoginForm from './LoginForm.js';

it('renders without crashing', () => {
  render(
    <LoginForm
      onChangeForm={() => undefined}
      isPasswordLess={false}
      onResetPassword={() => undefined}
      onSubmit={() => undefined}
    />,
  );
});
