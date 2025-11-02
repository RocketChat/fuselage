import { render } from '@testing-library/react';
import { it } from 'vitest';

import InformationTooltipTrigger from './InformationTooltipTrigger.js';

it('renders without crashing', () => {
  render(<InformationTooltipTrigger text='' />);
});
