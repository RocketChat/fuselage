import { render } from '@testing-library/react';

import InformationTooltipTrigger from './InformationTooltipTrigger.js';

it('renders without crashing', () => {
  render(<InformationTooltipTrigger text='' />);
});
