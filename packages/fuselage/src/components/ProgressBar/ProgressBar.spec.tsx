import { render } from '@testing-library/react';

import { ProgressBar } from '../..';

describe('[ProgressBar Component]', () => {
  it('renders without crashing', () => {
    render(<ProgressBar percentage={0} />);
  });
});
