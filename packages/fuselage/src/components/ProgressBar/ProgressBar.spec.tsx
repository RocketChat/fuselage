import { render } from '@testing-library/react';

import { ProgressBar } from './ProgressBar';

describe('[ProgressBar Component]', () => {
  it('renders without crashing', () => {
    render(<ProgressBar percentage={0} />, { legacyRoot: true });
  });
});
