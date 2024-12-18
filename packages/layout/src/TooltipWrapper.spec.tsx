import { render } from '@testing-library/react';

import TooltipWrapper from './TooltipWrapper';

it('renders without crashing', () => {
  render(<TooltipWrapper children={() => null} text='' />);
});

it('renders without crashing', () => {
  render(<TooltipWrapper children={<div />} text='' />);
});
