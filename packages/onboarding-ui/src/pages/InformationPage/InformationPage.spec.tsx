import { render } from '@testing-library/react';

import InformationPage from './InformationPage.js';

it('renders without crashing', () => {
  render(<InformationPage title='' description='' />);
});
