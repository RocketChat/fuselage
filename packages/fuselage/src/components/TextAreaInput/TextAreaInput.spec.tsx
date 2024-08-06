import { render } from '@testing-library/react';

import { TextAreaInput } from './TextArea';

describe('[TextAreaInput]', () => {
  it('renders without crashing', () => {
    render(<TextAreaInput />, { legacyRoot: true });
  });
});
