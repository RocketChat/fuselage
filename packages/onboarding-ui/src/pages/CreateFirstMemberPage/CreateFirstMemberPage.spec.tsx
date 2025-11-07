import { render } from '@testing-library/react';
import { it, vi } from 'vitest';

import CreateFirstMemberPage from './CreateFirstMemberPage.js';

const onSubmit = vi.fn();
const onBackButtonClick = vi.fn();
const validateUsername = vi.fn();
const validatePassword = vi.fn();

const props = {
  currentStep: 1,
  stepCount: 1,
  organizationName: 'Kapai',
  onSubmit,
  onBackButtonClick,
  validateUsername,
  validatePassword,
};

it('renders without crashing', () => {
  render(<CreateFirstMemberPage {...props} />);
});
