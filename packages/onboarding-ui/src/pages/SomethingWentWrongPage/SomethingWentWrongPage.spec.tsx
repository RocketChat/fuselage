import { render } from '@testing-library/react';
import { it } from 'vitest';

import SomethingWentWrongPage from './SomethingWentWrongPage.js';

it('renders without crashing', () => {
  render(<SomethingWentWrongPage />);
});
