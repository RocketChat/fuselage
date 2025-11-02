import { render } from '@testing-library/react';

import InvalidLinkPage from './InvalidLinkPage.js';

it('renders without crashing', () => {
  render(<InvalidLinkPage onRequestNewLink={() => undefined} />);
});
