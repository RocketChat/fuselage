import { render } from '@testing-library/react';

import { TextAreaInput } from './TextAreaInput';

describe('[TextAreaInput]', () => {
  it('renders without crashing', () => {
    render(<TextAreaInput />, { legacyRoot: true });
  });
});
