import { render } from '@testing-library/react';
import { it } from 'vitest';

import ResetPasswordConfirmationPage from './ResetPasswordConfirmationPage.js';

it('renders without crashing', () => {
  render(<ResetPasswordConfirmationPage />);
});
